import React from 'react';
import { render,fireEvent,waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Create from "./create";
import {rest} from 'msw'
import {setupServer} from 'msw/node';
const server = setupServer(
  rest.post('/transactions/add', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
);
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

describe('Create', () => {
  it('Should render without issues', ()=>{
    render(<Create />)
    expect(screen.getByRole('heading')).toHaveTextContent('Create New Transaction')
    // expect(screen.getByRole('form')).toHaveFormValues({})
  });

  it('should cal api', async () => {
    server.use(
      rest.post('/transactions/add', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Create onCreate={(x) => x}/>);
    fireEvent.click(screen.getByText('Create transaction'));
    await waitFor(() => screen.getByRole('alert'));
    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  });
})