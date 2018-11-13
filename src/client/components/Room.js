import { Component } from 'react';
import React from 'react';
import { Container, Segment, Item, Button, List } from 'semantic-ui-react';

class Room extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { room } = this.props;
    const roomOptions = room.options.map(option => (
      <List>
        <List.Item> {option}</List.Item>
      </List>
    ));
    return (
      <Segment style={{ marginTop: '5em' }}>
        <Item.Group relaxed divided unstackable>
          <Item>
            <Item.Content>
              <Item.Header>Rooms</Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size='small' src='../src/client/img/room_1.png' />

            <Item.Content verticalAlign='middle'>
              <Item.Header>{room.name}</Item.Header>
              <Item.Description> {room.description}</Item.Description>
              <Item.Extra>{room.price}</Item.Extra>
              <Item.Extra>{roomOptions}</Item.Extra>
              <Item.Extra>
                <Button floated='right'>Read more</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default Room;
