import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';

export function JumbotronContainer() {
    return(
        <Jumbotron.Container>
        {jumboData.map(() => (
            <Jumbotron>
                <Jumbotron.Title>Hello</Jumbotron.Title>
                <Jumbotron.SubTitle>Hello</Jumbotron.SubTitle>
            </Jumbotron>
        ))}
        </Jumbotron.Container>
    )
}

