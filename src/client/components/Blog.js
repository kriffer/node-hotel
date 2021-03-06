import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Container, Header, Button, Divider } from 'semantic-ui-react';
import Article from './Article';
// import { articles } from './models';
import {connect} from 'react-redux';

// reverse data flow methid is used here 

class Blog extends Component {
  state = {
    openArticleId: null,
  };

  static propTypes = { articles: PropTypes.array.isRequired };

  toggleOpenArticle = openArticleId => ev => {
    this.setState({ openArticleId });
  };

  render() {

    const{articles} = this.props
    return (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          {articles.map(article => (
            <Article
              key={article.id}
              article={article}
              isOpen={article.id === this.state.openArticleId}
              toggleOpen={this.toggleOpenArticle(article.id)}
            />
          ))}
        </Container>
      </Segment>
    );
  }
}

export default connect (state => ({ articles: state.articles}))(Blog); 
