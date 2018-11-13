import { Component } from "react";
import React from "react";
import { Segment, Item, Button } from "semantic-ui-react";

class Activities extends Component {
  render() {
    return (
      <Segment>
        <Item.Group relaxed divided unstackable>
          <Item>
            <Item.Content>
              <Item.Header>Activities</Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size="small" src="../src/client/img/room_1.png" />

            <Item.Content verticalAlign="middle">
              <Item.Header>Activity 1</Item.Header>
              <Item.Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.{" "}
              </Item.Description>
              <Item.Extra>
                <Button floated="right">Read more</Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default Activities;
