import React from 'react';
import { List, Segment } from 'semantic-ui-react';

export const Contacts = () => (
  <Segment>
    <List>
      <List.Header floated="center">Contact us</List.Header>
      <List.Item>
        <List.Icon name="users" />
        <List.Content>Node Hotel</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="marker" />
        <List.Content>Lappeenranta, Finland</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>
          <a href="mailto:admin@node-hotel.com">admin@node-hotel.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="linkify" />
        <List.Content>
          <a href="http://www.nodehotel.com">nodehotel.com</a>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
);

 
