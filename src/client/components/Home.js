import React, { Component } from "react";

import BookingForm from "./BookingForm";
import NewsWidget from "./NewsWidget";
import Activities from "./Activities";
import RoomList from "./RoomList";
import { rooms } from "./models";
import { Container, Grid, Divider, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import Facilities from "./Facilities";
import Contacts from "./Contacts";
import bg from "../img/bg.jpg";
import "../css/style.css";

class Home extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { news: null };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Container className="HeaderContainer">
          <Container>
            <Grid>
              <Grid.Row
                className="GridRow"
                columns={2}
                style={{ marginTop: "10em" }}
              >
                <Grid.Column>
                  <NewsWidget news={this.state.news} />
                </Grid.Column>

                <Grid.Column width={7} floated="right">
                  <BookingForm rooms={rooms} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Container>

        <Container>
          <Grid>
            <Grid.Row columns={2} style={{ marginTop: "3em" }}>
              <Grid.Column width={11}>
                <RoomList rooms={rooms} />
              </Grid.Column>
              <Grid.Column width={5}>
                <Facilities />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container>
          <Grid>
            <Grid.Row columns={2} style={{ marginTop: "3em" }}>
              <Grid.Column width={11}>
                {" "}
                <Activities />
              </Grid.Column>
              <Grid.Column width={5}>
                {" "}
                <Contacts />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
