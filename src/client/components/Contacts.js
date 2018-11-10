
import React from 'react';
import {
    List, Segment 
  } from 'semantic-ui-react';

export const Contacts = () => (
    <Segment>
    <List>
        <List.Header floated="center">Contact us</List.Header>
      <List.Item>
        <List.Icon name='users' />
        <List.Content>Semantic UI</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>New York, NY</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='mail' />
        <List.Content>
          <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='linkify' />
        <List.Content>
          <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
        </List.Content>
      </List.Item>
    </List>
    </Segment>
  )
  
