import { Component } from 'react';
import React from 'react';
import { Segment, Feed } from 'semantic-ui-react';

const image = '../src/client/img/feed_icon.jpg';
const date = '3 days ago';
const summary = 'We created a post';
const extraText = 'Have you seen what\'s going on? Can you believe it.';

class NewsWidget extends Component {
  render() {
    return (
      <Segment padded style={{ opacity: '0.7' }}>
        <Feed>
          <Feed.Event
            image={image}
            date={date}
            summary={summary}
            extraText={extraText}
          />

          <Feed.Event>
            <Feed.Label image={image} />
            <Feed.Content date={date} summary={summary} extraText={extraText} />
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image={image} />
            <Feed.Content>
              <Feed.Date content={date} />
              <Feed.Summary content={summary} />
              <Feed.Extra text content={extraText} />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    );
  }
}

export default NewsWidget;
