import { Component } from "react";
import React from "react";
import { Segment, List } from "semantic-ui-react";

export class Facilities extends Component {
  render() {
    return (
      <Segment>
        <h3>General facilities</h3>
        <List>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header as="a">Krowlewskie Jadlo</List.Header>
              <List.Description>
                An excellent polish restaurant, quick delivery and hearty,
                filling meals.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header as="a">Xian Famous Foods</List.Header>
              <List.Description>
                A taste of Shaanxi's delicious culinary traditions, with
                delights like spicy cold noodles and lamb burgers.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header as="a">Sapporo Haru</List.Header>
              <List.Description>
                Greenpoint's best choice for quick and delicious sushi.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="marker" />
            <List.Content>
              <List.Header as="a">Enid's</List.Header>
              <List.Description>
                At night a bar, during the day a delicious brunch spot.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  }
}
