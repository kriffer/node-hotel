import { Component } from 'react';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Segment, Item, Button } from 'semantic-ui-react';
import Room from './Room';

class RoomList extends Component {

  static PropTypes = { rooms: PropTypes.array };

  render() {
    const { rooms } = this.props;
    const roomsList = rooms.map(room => <Room key={room.id} room={room} rooms={rooms} />);

    return <Container><Segment><h1>Rooms</h1>{roomsList}</Segment></Container>;
  }
}

export default RoomList;
