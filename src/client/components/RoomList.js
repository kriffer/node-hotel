import { Component } from 'react';
import React from 'react';
import { PropTypes } from 'prop-types'
import { rooms } from '../store/models'
import { Room } from './Room'

import { Container, Segment, Item, Button } from 'semantic-ui-react';

export class RoomList extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired
  }


  componentDidMount() {

  }
  render() {

    const roomsList = rooms.map(room => <Room key={room.id} room={room} />)

    return (
      <Container>
        {roomsList}
      </Container>
    )
  }
}
