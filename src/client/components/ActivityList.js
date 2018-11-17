import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { activities } from './models';
import Activity from './Activity';
import { Segment, Item, Button, Header, Container } from 'semantic-ui-react';

class ActivityList extends Component {
  static propTypes = {
    activities: PropTypes.array
  };

  render() {
    const activityList = activities.map(activity => (
      <Activity key={activity.id} activity={activity} />
    ));
    return (
      <Container>
        <h1>Activities</h1>

        <Segment>{activityList}</Segment>
      </Container>
    );
  }
}

export default ActivityList;
