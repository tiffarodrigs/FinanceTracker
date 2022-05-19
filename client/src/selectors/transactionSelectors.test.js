import { selectTransactionForDisplay, selectTotalSavings } from './transactionSelector';
describe('selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      transactions: [
        {
          _id: '1',
          category: '1',
          transactionType: '1',
          account: '1',
          value: '10',
          date: '1652684400000',
        },
        {
          _id: '2',
          category: '2',
          transactionType: '2',
          account: '1',
          value: '100',
          date: '1652684400000',
        },
      ],
      accounts: [{ _id: 1, startingBalance: 100 }],
      categories: [{ _id: 1, label: 'Cat 1' },{ _id: 2, label: 'Cat 2' }],
      transactionType: [{ _id: 1, label: 'expense' },{ _id: 2, label: 'income' }],
    };
  })
  it('selectAccountsForDisplay', () => {
    
    expect(selectTransactionForDisplay(state)).toEqual([
      {
        _id: '1',
        account: { _id: 1, startingBalance: 100 },
        category: { _id: 1, label: 'Cat 1' },
        date: 'undefined - NaN, NaN',
        transactionType: { _id: 1, label: 'expense' },
        value: '10',
      },
      {
        _id: '2',
        account: { _id: 1, startingBalance: 100 },
        category: { _id: 2, label: 'Cat 2' },
        date: 'undefined - NaN, NaN',
        transactionType: { _id: 2, label: 'income' },
        value: '100',
      }
    ]);
  });
  it('selectTotalSavings', () => {
    expect(selectTotalSavings(state)).toEqual(190);
  })
});
