import React from "react";
import IHeroAspectPair from "../Models/IHeroAspectPair";
import { Row, Col } from "react-bootstrap";

export default function HeroAspectPair({ hero, aspects }: IHeroAspectPair) {
  return (
    <Row>
      <Col>{hero}</Col>
      <Col>
        {aspects.map((aspect) => (
          <Row key={aspect}>{aspect}</Row>
        ))}
      </Col>
    </Row>
  );
}
