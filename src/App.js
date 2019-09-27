import React from 'react';
import { Form } from 'react-final-form';

function App() {
  return (
    <Form
      onSubmit={console.log}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
        </form>
      )}
    />
  );
}

export default App;
