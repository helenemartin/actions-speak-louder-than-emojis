import React from "react";
import { Card } from "../components";

export function CardContainer() {
  return (
      {movies.map(movie => (
        <Card>
            Card.Image src={movie.image} alt={movie.title) />
            </Card>
        
    ))}
     
  );
}
