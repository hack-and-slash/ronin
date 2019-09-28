import React from 'react';
import { Form } from 'react-final-form';

import CharacterFields from 'components/CharacterFields';
import ClanFields from 'components/ClanFields';

function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <CharacterFields />
          <ClanFields />
        </form>
      )}
    />
  );
}

export default App;
