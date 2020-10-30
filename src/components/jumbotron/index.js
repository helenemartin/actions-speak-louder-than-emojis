import React from "react";
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Pane,
  Image,
  Emoji,
  EmojiButton
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ ...restProps }) {
  return <Pane {...restProps} />;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.Emoji = function JumbotronEmoji({ ...restProps }) {
  return <Emoji {...restProps} />;
};

Jumbotron.EmojiButton = function JumbotronEmojiButton({ ...restProps }) {
  return <EmojiButton {...restProps} />;
};
