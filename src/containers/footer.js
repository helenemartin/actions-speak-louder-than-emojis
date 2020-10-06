import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">How it works</Footer.Link>
                    <Footer.Link href="#">Campains</Footer.Link>
                    <Footer.Link href="#">Sponsors</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">join</Footer.Link>
                    <Footer.Link href="#">Sign-in</Footer.Link>
                    <Footer.Link href="#">Sign-up</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}