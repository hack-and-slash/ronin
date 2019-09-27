import React from 'react';
import { Form } from 'react-final-form';

import CharacterFields from 'components/CharacterFields';

function App() {
  return (
    <Form
      onSubmit={(values) => console.log(values)}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <CharacterFields />
        </form>
      )}
    />
  );
}

export default App;
