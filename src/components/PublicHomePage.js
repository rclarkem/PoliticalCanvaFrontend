import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function PublicHomePage() {
  return (
    <Jumbotron fluid>
      <h1>Welcome to PoliCanva</h1>
      <p>
        This is the simplest canvassing application that will allow you to keep track of your potential voters
        and make sure that your campaign is successful! Your main focus should be on policy and aiding your
        future constituents.
      </p>
    </Jumbotron>
  );
}
