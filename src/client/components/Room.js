import { Component } from 'react';
import React from 'react';
import {
  Container,
  Segment,
  Item,
  Button,
  List,
  Modal,
} from 'semantic-ui-react';
import BookingForm from './BookingForm';
import room_1 from '../img/room_1.png';

class Room extends Component {

  render() {
    const { rooms, room } = this.props;
    const roomOptions = room.options.map(option => (
      <List>
        <List.Item> {option}</List.Item>
      </List>
    ));
    return (
      <Item.Group relaxed divided unstackable>
        <Item>
          <Item.Image size="small" src={room_1} />

          <Item.Content verticalAlign="middle">
            <Item.Header>{room.name}</Item.Header>
            <Item.Description> {room.description}</Item.Description>
            <Item.Extra>{room.price}</Item.Extra>
            <Item.Extra>{roomOptions}</Item.Extra>
            <Item.Extra>
              <Modal trigger={<Button>Book room</Button>} basic size="small">
                <Modal.Header>Booking form</Modal.Header>

                <Modal.Content content>
                  <Modal.Description>
                    <BookingForm rooms={rooms} />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default Room;
