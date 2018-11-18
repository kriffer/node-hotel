import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

import { Segment, Select, Button, Form, Message } from 'semantic-ui-react';

import { DateInput } from 'semantic-ui-calendar-react';

class BookingForm extends Component {
  static propTypes = { rooms: PropTypes.array };

  constructor(props) {
    super(props);
    this.roomNames = [];
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    checkinDate: '',
    checkoutDate: '',
    firstName: '',
    lastName: '',
    guestNum: '',
    roomType: '',
    email: '',
    roomNames: '',
  };

  componentDidMount() {
    return this.getRoomNames();
  }

  getRoomNames() {
    const { rooms } = this.props;
    let i = 0;
    rooms
      .map(room => room.name)
      .forEach(element => {
        const rn = {};
        rn.key = i++;
        rn.text = element;
        rn.value = element;
        this.roomNames.push(rn);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState = {
      checkinDate: value,
      checkoutDate: value,
      roomType: value,
      guestNum:value,
      firstName: value,
      lastName: value,
      email: value,
    };
    console.log(this.state);
  };

  handleChange = type => event => {
    const { value } = event.target;
    this.setState({ [type]: value });
  };

  render() {
    return (
      <Segment padded>
        <Form onSubmit={this.handleSubmit} size="small">
          <Form.Group widths="equal">
            <DateInput
              name="datein"
              value={this.state.checkinDate}
              label="Check in"
              control="input"
              iconPosition="left"
              placeholder="Check in"
              onChange={this.handleChange('checkinDate')}
            />
            <DateInput
              name="dateout"
              value={this.state.checkoutDate}
              label="Check out"
              control="input"
              iconPosition="left"
              placeholder="Check out"
              onChange={this.handleChange('checkoutDate')}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              label="Guests amount"
              options={this.roomNames}
              placeholder="Guests amount"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Select}
              label="Room type"
              options={this.roomNames}
              placeholder="Room Type"
            />
          </Form.Group>
          <Form.Group grouped>
            <Form.Field
              label="First Name"
              control="input"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
            />
            <Form.Field
              label="Last Name"
              control="input"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
            />
            <Form.Input
              required
              label="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </Form.Group>

          <Form.Group>
            <Button primary floated="right">
              BOOK NOW
            </Button>
            <Message success header='Form Completed' content={this.state} />
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default BookingForm;
