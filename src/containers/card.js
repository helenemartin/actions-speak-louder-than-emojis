import React from "react";
import { Card } from "../components";
import movies from "../fixtures/movie.json";

export function CardContainer() {
  return (
    <Card.Container>
      {movies.map(movies => (
        <Card>
          <Card.Image src={movie.image} alt={item.alt} />
        </Card>
      ))}
    </Card.Container>
  );
}
