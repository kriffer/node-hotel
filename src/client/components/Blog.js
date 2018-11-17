import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Header, Button, Divider } from 'semantic-ui-react';
import Article from './Article';
import { articles } from './models';

class Blog extends Component {
  static propTypes = { articles: PropTypes.array };

  render() {
    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          {articles.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </Container>
      </Segment>
    );
  }
}

export default Blog;
