import React, { useState } from 'react';

import Tab, { Item } from './index';

export default {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: 'Tab component used in Safe Multisig.'
  }
};

const items: Item[] = [
  { id: '1', label: 'Assets', icon: 'assets' },
  { id: '2', label: 'Transactions', icon: 'transactionsInactive' },
  { id: '3', label: 'Apps', icon: 'apps' },
  { id: '4', label: 'Address Book', icon: 'addressBook', disabled: true },
  { id: '5', label: 'Settings', customLabel: <div>custom</div> }
];

export const stepper = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        selectedTab={selected}
        variant="outlined"
        items={items}
      />
      {selected}
    </>
  );
};

export const stepperContained = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        selectedTab={selected}
        variant="contained"
        items={items}
      />
      {selected}
    </>
  );
};