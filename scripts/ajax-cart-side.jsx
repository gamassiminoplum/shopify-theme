import React from "react"
import ReactDom from "react-dom"

// const Test = () => {
//   return <div>This is tutorial to integrate react.js into shopify theme with webpack</div>
// }

// const root = document.getElementById('cart__drawer_items');
// ReactDom.render(<Test />, root);

import {Form, FormLayout, TextField, Button, AppProvider} from '@shopify/polaris';
import {useState, useCallback} from 'react';

function App() {
  const [newsletter, setNewsletter] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(() => {
    // setEmail('');
    // setNewsletter(false);
    fetch('http://127.0.0.1:3000/cart?email='+email)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data from API:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // const handleNewsLetterChange = useCallback(
  //   (value) => setNewsletter(value),
  //   [],
  // );

  const handleEmailChange = useCallback((value) => setEmail(value), []);

  return (
    <AppProvider>
      <Form onSubmit={handleSubmit}>
        <FormLayout>

          <TextField
            value={email}
            onChange={handleEmailChange}
            label="Email"
            type="email"
            autoComplete="email"
            helpText={
              <span>
                We’ll use this email address to inform you on future changes to
                Polaris.
              </span>
            }
          />

          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
    </AppProvider>
  );
}

// export default App;


const root = document.getElementById('cart__drawer_items');
ReactDom.render(<App />, root);