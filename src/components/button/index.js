import React from "react";
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 1 rem 1.5rem;
  font-size: 1.8rem;
  color: $(({primary})props => (primary ? 'red' : '#fff');
  outline: none;
  border: none;
  bacground-color: #333;
`;
export const Button = {{ primary, children }} => {
    return <StyledButton primary = {primary}>{children}</Syledbutton>;
};
