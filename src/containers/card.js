import React from "react";
import Card from "../components/card";
import cardData from "../fixtures/movie.json";

export function CardContainer() {
  return (
    <CardContainer>
      {cardData.map(movie => (
        <Card key={movie.id}>
          <Card.Image src={movie.image} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.desc}</Card.Text>
            <Card.Button>{movie.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </CardContainer>
  );
}
