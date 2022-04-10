import React from 'react';
import { Container, Card, CardText, CardTitle } from 'reactstrap';

// This is a basic component rendering Hello 
const Hello = () => { 

  return(
    <Container>
      <Card body className="mt-3 text-right">
        <CardTitle tag="h5">Hello</CardTitle>
        <CardText>Whack some text in here</CardText>
      </Card>
    </Container>
  );

}

export default Hello;
