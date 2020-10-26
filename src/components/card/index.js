import React from "react";
import { Container, Body, Title, Text, Image, Button } from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default function Body({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
}

export default function Title({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

export default function Text({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
}

export default function Image({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
}
export default function Button({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}
