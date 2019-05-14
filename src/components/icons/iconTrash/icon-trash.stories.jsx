import React from 'react';

import IconTrash from './icon-trash';

import { storiesOf } from '@storybook/react';

storiesOf('UI|Icons/IconTrash', module).add('Default', () => {
  return (
    <div style={{ width: '64px', height: '64px' }}>
      <IconTrash />
    </div>
  );
});
