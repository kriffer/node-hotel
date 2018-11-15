import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import logo from '../img/logo.png';
import { News } from "./News";
import "semantic-ui-css/semantic.min.css";
import { Menu, Sticky, Input, Icon, Image, Container } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top" pointing secondary style={{ background: "#fff" }}>
        <Container>
          <Menu.Item>
            <Image
              className="logo"
              src={logo}
              width="240"
              height="40"
              alt="NodeHotel"
              data-retina="true"
            />
          </Menu.Item>

          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            position="right"
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            name="rooms"
            active={activeItem === "rooms"}
            onClick={this.handleItemClick}
          >
            <Link to="/rooms">Rooms</Link>
          </Menu.Item>
          <Menu.Item
            name="news"
            active={activeItem === "news"}
            onClick={this.handleItemClick}
          >
            <Link to="/news">News</Link>
          </Menu.Item>

          <Menu.Item
            name="activities"
            active={activeItem === "activities"}
            onClick={this.handleItemClick}
          >
            <Link to="/activities">Activities</Link>
          </Menu.Item>

          <Menu.Item
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
          >
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            <Link to="/contact">Contact us</Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;
