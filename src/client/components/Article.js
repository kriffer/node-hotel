import { Component } from 'react';
import React from 'react';
import { Item, Header, Button, Divider } from 'semantic-ui-react';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return <p style={{ fontSize: '1.33em' }}>{article.text}</p>;
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    const text = isOpen ? 'Read Less' : 'Read More';
    return (
      <Item>
        <Header as="h3" style={{ fontSize: '2em' }}>
          {article.title}
        </Header>

        <Button as="a" size="large" onClick={toggleOpen}>
          {text}
        </Button>
        {this.getBody()}
        <Divider style={{ margin: '3em 0em' }} />
      </Item>
    );
  }
}

export default toggleOpen(Article);
