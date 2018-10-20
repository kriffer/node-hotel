import React from 'react';
import ReactDOM from 'react-dom';
import {
  BookingForm, NewsfeedWidget, Rooms, TopHeader
} from './App';


// ReactDOM.render(<TopLineLang />, document.getElementById('top_line'));
ReactDOM.render(<TopHeader/>, document.getElementById('top_header'));
ReactDOM.render(<NewsfeedWidget/>, document.getElementById('newsfeed'));
ReactDOM.render(<Rooms/>, document.getElementById('rooms'));
ReactDOM.render(<BookingForm/>, document.getElementById('book'));
