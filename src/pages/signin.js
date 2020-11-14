import React, { useState } from 'react';
import { Form } from '../components';

export default function Signin() {
    const [error, setError] = useState('');

export default function Signin() {
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
      </Form>
    </HeaderContainer>
  );
}
