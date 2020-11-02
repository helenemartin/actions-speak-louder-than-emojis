import React, {useState, useEffect} from "react";
import jumboData from "../fixtures/jumbo.json";
import Jumbotron from "../components/jumbotron";


const [emojiQueue, setEmojiQueue] = useState([]);

useEffect(() => {}, [emojiQueue]})

const randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min +1)) + min
}

const randomPosOrNeg = (max, min) => {
  let randomNumber = Math.floor(Math.random() * (max - min +1)) + min
  randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1

  return randomNumber

}

const handleEmojiClick = (label, symbol) => {
  setEmojiQueue([
    ...emojiQueue, 
    {
      label, 
      symbol,
      size: randomNumber(3, 2),
      left: randomNumber(100, 0),
      one: randomPosOrNeg(200, 50),
      two: randomPosOrNeg(200, 50)
    }
  ])

}

const handleEmojiKeydown  = (e, label, symbol) => {
  if (e.key === "Enter") {
    setEmojiQueue([
      ...emojiQueue, 
      {
        label, 
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosOrNeg(200, 50),
        two: randomPosOrNeg(200, 50)
      }
    ])
  }

}
export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
      <Jumbotron.EmojiButton 
      onClick={()=> handleEmojiClick(label, symbol))}
      onKeyDown={e => handleEmojiKeydown(e, label, symbol)}
      >
        <Jumbotron.Emoji label="Please" symbol="💅" size="6rem" />
      </Jumbotron.EmojiButton>
    </Jumbotron.Container>
  );
}
