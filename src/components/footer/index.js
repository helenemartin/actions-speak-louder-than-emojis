import React from 'react';
import { Container} from './styles/footer';


export default function Footer({ children, direction = 'row', ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}