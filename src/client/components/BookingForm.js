import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Segment,
  Select,
  Button,

  Form

} from 'semantic-ui-react';

import { DateInput } from 'semantic-ui-calendar-react';



const room_types = [{ text: 'Room1', value: 'room1' }, { text: 'Room2', value: 'room2' }];
const guest_amount = [{ text: '1', value: '1' }, { text: '2', value: '2' },{ text: '3', value: '3' }];

export class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <Segment padded>
        <Form onSubmit={this.handleSubmit} size="small">
          <Form.Group widths="equal">
            <DateInput
              name="date"
              value={this.state.date}
              label="Check in"
              control="input"
              iconPosition="left"
              placeholder="Check in"
              onChange={this.handleChange}
            />
            <DateInput
              name="date"
              value={this.state.date}
              label="Check out"
              control="input"
              iconPosition="left"
              placeholder="Check out"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              control={Select} label='Room type' options={room_types} placeholder='Room Type'
            />
            <Form.Field
              control={Select} label='Guests amount' options={guest_amount} placeholder='Guests amount'
            />

          </Form.Group>
          <Form.Group grouped >
            <Form.Field
              label="First Name"
              control="input"
              placeholder="first name"
            />
            <Form.Field
              label="Last Name"
              control="input"
              placeholder="last name"
            />
            <Form.Input required
              label="Email"

              placeholder="Email"
            />
          </Form.Group>

          <Form.Group  >
            <Button primary floated="right">BOOK NOW</Button>
          </Form.Group>

        </Form>
      </Segment>
    );
  }
}
