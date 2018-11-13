import React, { Component } from "react";
import { Segment, Container, Header, Button, Divider } from "semantic-ui-react";
import Article from "./Article";

class Blog extends Component {
  render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            {/* <a href='#'>Case Studies</a> */}
          </Divider>
        </Container>
      </Segment>
    );
  }
}

export default Blog;
