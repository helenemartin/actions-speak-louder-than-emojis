import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { CardContainer } from "../containers/card";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <CardContainer />
      <FaqsContainer />
      <CardContainer />
      <FooterContainer />
    </>
  );
}
