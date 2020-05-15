import React from 'react';
import RegExContainer from './RegExContainer';
import ArrayContainer from './ArrayContainer';

export default function MainPage() {
  return (
    <div>
      <RegExContainer />
      <ArrayContainer initialData={[1, 2, 3, 4, 5]} />
    </div>
  );
}
