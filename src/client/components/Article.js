import { Component } from 'react';
import React from 'react';
import { Item, Header, Button, Divider } from 'semantic-ui-react';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
  componentWillMount() {
    console.log('---', 'mount');
  }

  componentDidMount() {
    console.log('---', 'mounted');
  }

  componentWillReceiveProps(nextProps) {
    console.log('---', 'updating', this.props.isOpen, nextProps.isOpen);
  }

  // For separate updating of component, but this is useless 
  // when you exactly know this component is immutable.
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen;
  }

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

export default Article;
