import React from 'react';
import readme from './readme.md';

export default {
  title: 'Select Chips',
  parameters: {
    notes: { markdown: readme },
  },
};

const styles = {
  height: '100vh',
};

export const defaultSelect = () => {
  const canAddNew = true;
  return (
    <div style={styles}>
      <bds-select-chips new-prefix="Create: " can-add-new={canAddNew} chips='["Millie Bobby"]'>
        <bds-select-option value="1">Millie Bobby</bds-select-option>
        <bds-select-option value="2">Finn Wolfhard</bds-select-option>
        <bds-select-option value="3">David Harbour</bds-select-option>
        <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
        <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
        <bds-select-option value="6">Noah Schnapp</bds-select-option>
      </bds-select-chips>
    </div>
  );
};
