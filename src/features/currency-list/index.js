import React from 'react';

import List from './components/list/List';
import ChangeCurrency from './components/filtering/ChangeCurrency';

export default function CurrenciesPage() {
  return (
    <>
      <ChangeCurrency />
      <List />
    </>
  );
}
