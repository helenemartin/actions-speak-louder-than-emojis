import React from "react";
import { Container, Body, Title, Text, Image, Button } from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Body = function CardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Image = function CardImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Card.Button = function CardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
