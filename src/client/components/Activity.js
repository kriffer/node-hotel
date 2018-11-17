import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import toggleOpen from '../decorators/toggleOpen';

class Activity extends Component {
  getBody() {
    const { activity, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <Item>
        <Item.Description>{activity.description}</Item.Description>
      </Item>
    );
  }

  render() {
    const { activity, isOpen, toggleOpen } = this.props;
    const text = isOpen ? 'Show less' : 'Show more';
    return (
      <Item.Group relaxed divided unstackable>
        <Item>
          <Item.Image size="small" src="../src/client/img/room_1.png" />
          <Item.Content verticalAlign="middle">
            <Item.Header>{activity.name}</Item.Header>

            <Item.Extra>
              <Button floated="right" onClick={toggleOpen}>
                {text}
              </Button>
              {this.getBody()}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default toggleOpen(Activity);
