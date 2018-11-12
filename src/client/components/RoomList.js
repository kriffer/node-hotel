import { Component } from "react";
import React from "react";
import { Container, Segment, Item, Button } from "semantic-ui-react";

import { Room } from "./Room";

export class RoomList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rooms } = this.props;
    const roomsList = rooms.map(room => <Room key={room.id} room={room} />);

    return <Container>{roomsList}</Container>;
  }
}
