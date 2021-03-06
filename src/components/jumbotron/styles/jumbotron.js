import styled from "styled-components";
import EmojiWrapper from "../../../components/emoji/EmojiWrapper";
import AriaDiv from "../../../components/emoji/EmojiButton";
import EmojiBubble from "../../../components/emoji/EmojiBubble";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  background-color: #f0e6db;

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 100px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Helvetica", Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 100;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Emoji = styled(EmojiWrapper)`
  font-size: ${({ size }) => (size ? size : "1rem")};
  margin: 50px 100px;
`;

export const EmojiButton = styled(AriaDiv)`
display: flex;
padding: 1rem;
margin: 1rem;
background-color:coral;
opacity:0.5;
z-index: -1;
width: fit-content;
cursor: pointer;
transition: box-shaddow 0.6s ease;
  &:hover {
      box-shadow 0px 4px 10px rgba (26, 30, 33, 0.2);
  }
`;
