import React from 'react';
const Icon = (props) => {
  if (props.type === 'transaction') {
    return (
      <svg
      width="32"
        className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='CurrencyExchangeSharpIcon'
        tabIndex='-1'
        title='CurrencyExchangeSharp'
      >
        <path fill= "white" d='M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44zM3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67V21zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9H1z'></path>
      </svg>
    );
  }
  if (props.type === 'dashboard') {
    return (
      <svg
        width="32"
        className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='DashboardSharpIcon'
        tabIndex='-1'
        title='DashboardSharp'
      >
        <path fill= "white" d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'></path>
      </svg>
    );
  }
  if (props.type === 'card') {
    return (
      <svg
      width="32"
        className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='CreditCardSharpIcon'
        tabIndex='-1'
        title='CreditCardSharp'
      >
        <path fill= "white" d='M22 4H2.01L2 20h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z'></path>
      </svg>
    );
  }
  if (props.type === 'budget') {
    return (
      <svg
      width="32"
        className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='BarChartSharpIcon'
        tabIndex='-1'
        title='BarChartSharp'
      >
        <path fill= "white" d='M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z'></path>
      </svg>
    );
  }
};


export default Icon;