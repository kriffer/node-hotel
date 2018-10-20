import React, { Component } from 'react';


export class WeatherForecastWidget extends Component {

}

export class DiscountWidget extends Component {

}

export class NewsfeedWidget extends Component {
  render() {
    return (
      <div className="col-md-8">

        <div className="intro_title_booking">
          <h1 className="animated fadeInDown">Newsfeed</h1>

        </div>

      </div>
    );
  }
}

export class TopHeader extends Component {
  render() {
    return (

      <div className="container">
        <div>

          <ul id="top_links">
            <li><a href="#">Fi</a></li>
            <li><a href="#">En</a></li>
            <li><a href="#">Ru</a></li>
          </ul>

        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div id="logo">
              <a href="#">
                <img
                  className="logo"
                  src="../src/client/img/logo.png"
                  width="240"
                  height="40"
                  alt="CountryHolidays"
                  data-retina="true"
                />
              </a>
            </div>
          </div>
          <nav className="col-md-8 col-sm-8 col-xs-8">
            <a
              className="cmn-toggle-switch cmn-toggle-switch__rot  open_close"
              href="javascript:void(0);"
            >
              <span>
Menu
                      mobile
              </span>
            </a>
            <div className="main-menu">
              <div id="header_menu">
                <img
                  className="logo"
                  src="../src/client/img/logo.png"
                  width="240"
                  height="40"
                  alt="CountryHolidays"
                  data-retina="true"
                />
              </div>
              <a href="#" className="open_close" id="close_in">
                <i
                  className="icon_set_1_icon-77"
                />
              </a>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    About
                    <i
                      className="icon-down-open-mini"
                    />
                  </a>

                </li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Rooms
                    <i
                      className="icon-down-open-mini"
                    />
                  </a>

                </li>
                <li><a href="about.html">News</a></li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Activities
                    <i
                      className="icon-down-open-mini"
                    />
                  </a>

                </li>
                <li className="submenu">
                  <a href="javascript:void(0);" className="show-submenu">
                    Blog
                    <i
                      className="icon-down-open-mini"
                    />
                  </a>

                </li>
                <li><a href="contacts.html">Contact us</a></li>

              </ul>
            </div>

          </nav>
        </div>
      </div>
    );
  }
}

export class TopLineLang extends React.Component {
  render() {
    return (

      <div>

        <div className="container">

          {/* <div id="top_line">

                            <ul id="top_links">
                            <li><a href="#">Fi</a></li>
                           <li><a href="#">En</a></li>
                            <li><a href="#">Ru</a></li>
                        </ul>

                    </div> */}
        </div>
      </div>

    );
  }
}

export class BookingForm extends React.Component {
  render() {
    return (
      <div>
        {/* <div id="message-booking" /> */}
        <form>
          <input
            type="hidden"
            role="form"
            method="post"
            action="assets/check_avail.php"
            id="check_avail"
            autoComplete="off"
          />

          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="form-group">
                <label>Check in</label>
                <input
                  className="date-pick form-control"
                  data-date-format="M d, D"
                  type="text"
                  id="check_in"
                  name="check_in"
                  placeholder="Check in"
                />
                <span className="input-icon">
                  <i className=" icon-calendar"/>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="form-group">
                <label>Check out</label>
                <input
                  className="date-pick form-control"
                  data-date-format="M d, D"
                  type="text"
                  id="check_out"
                  name="check_out"
                  placeholder="Check out"
                />
                <span className="input-icon">
                  <i className=" icon-calendar"/>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="form-group">
                <label>Adults</label>
                <div className="qty-buttons">
                  <input
                    type="button"
                    value="-"
                    className="qtyminus"
                    name="adults"
                  />
                  <input
                    type="text"
                    name="adults"
                    id="adults"
                    value=""
                    className="qty form-control"
                    placeholder="0"
                  />
                  <input
                    type="button"
                    value="+"
                    className="qtyplus"
                    name="adults"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="form-group">
                <label>Children</label>
                <div className="qty-buttons">
                  <input
                    type="button"
                    value="-"
                    className="qtyminus"
                    name="children"
                  />
                  <input
                    type="text"
                    name="children"
                    id="children"
                    value=""
                    className="qty form-control"
                    placeholder="0"
                  />
                  <input
                    type="button"
                    value="+"
                    className="qtyplus"
                    name="children"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Room type</label>
                <select className="form-control" name="room_type" id="room_type">
                  <option value="">Select room type</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Double Room">Double Room</option>
                  <option value="Luxury Double Room">Luxury Double Room</option>
                </select>
              </div>
            </div>

            <div className="col-md-12 col-sm-6">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name_booking"
                  id="name_booking"
                  placeholder="Name and Last name"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email_booking"
                  id="email_booking"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <input
                  type="submit"
                  value="Book now"
                  className="btn_full"
                  id="submit-booking"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export class Footer extends Component {


}

export class Rooms extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-9 col-md-8">
          <div className="strip_all_rooms_list wow fadeIn" data-wow-delay="0.1s">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="img_list">
                  <a href="room_details.html"><img src="../src/client/img/room_list_1.jpg" alt=""/></a>
                </div>
              </div>
              <div className="clearfix visible-xs-block"/>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="rooms_list_desc">
                  <h3>
                    <strong>Single</strong>
                    {' '}
                    room
                  </h3>
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                    eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit....
                  </p>
                  <ul className="add_info">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Plasma TV with cable channels"
                      >
                        <i
                          className="icon_set_2_icon-116"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Breakfast included"
                      >
                        <i className="icon_set_1_icon-59"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="King size bed"
                      >
                        <i className="icon_set_2_icon-104"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Shower"
                      >
                        <i className="icon_set_2_icon-118"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="No smoking"
                      >
                        <i className="icon_set_1_icon-47"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="price_list">
                  <div>
                    <sup>$</sup>
                    89*
                    <span className="normal_price_list">$99</span>
                    <small>*Pax/Per night</small>
                    <p>
                      <a href="room_details.html" className="btn_1">Details</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="strip_all_rooms_list wow fadeIn" data-wow-delay="0.2s">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="img_list">
                  <a href="room_details.html"><img src="../src/client/img/room_list_2.jpg" alt=""/></a>
                </div>
              </div>
              <div className="clearfix visible-xs-block"/>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="rooms_list_desc">
                  <h3>
                    <strong>Double</strong>
                    {' '}
                    room
                  </h3>
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                    eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit....
                  </p>
                  <ul className="add_info">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Plasma TV with cable channels"
                      >
                        <i
                          className="icon_set_2_icon-116"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Breakfast included"
                      >
                        <i className="icon_set_1_icon-59"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="King size bed"
                      >
                        <i className="icon_set_2_icon-104"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Shower"
                      >
                        <i className="icon_set_2_icon-118"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="No smoking"
                      >
                        <i className="icon_set_1_icon-47"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="price_list">
                  <div>
                    <sup>$</sup>
                    89*
                    <span className="normal_price_list">$99</span>
                    <small>*Pax/Per night</small>
                    <p>
                      <a href="room_details.html" className="btn_1">Details</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="strip_all_rooms_list wow fadeIn" data-wow-delay="0.3s">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="img_list">
                  <a href="room_details.html"><img src="../src/client/img/room_list_3.jpg" alt=""/></a>
                </div>
              </div>
              <div className="clearfix visible-xs-block"/>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="rooms_list_desc">
                  <h3>
                    <strong>King double</strong>
                    {' '}
                    room
                  </h3>
                  <p>
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                    eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit....
                  </p>
                  <ul className="add_info">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Plasma TV with cable channels"
                      >
                        <i
                          className="icon_set_2_icon-116"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Breakfast included"
                      >
                        <i className="icon_set_1_icon-59"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="King size bed"
                      >
                        <i className="icon_set_2_icon-104"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="Shower"
                      >
                        <i className="icon_set_2_icon-118"/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-1"
                        data-placement="top"
                        title="No smoking"
                      >
                        <i className="icon_set_1_icon-47"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2">
                <div className="price_list">
                  <div>
                    <sup>$</sup>
                    89*
                    <span className="normal_price_list">$99</span>
                    <small>*Pax/Per night</small>
                    <p>
                      <a href="room_details.html" className="btn_1">Details</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Facilities/>

      </div>


    );
  }
}

export class Facilities extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4">
        <div className="box_style_1" id="general_facilities">
          <h3>General facilities</h3>
          <ul>
            <li>
              <i className="icon_set_1_icon-86"/>
              Free Wifi
            </li>
            <li>
              <i className="icon_set_2_icon-103"/>
              Loundry service
            </li>
            <li>
              <i className="icon_set_2_icon-110"/>
              Swimming pool
            </li>
            <li>
              <i className="icon_set_1_icon-58"/>
              Restaurant
            </li>
            <li>
              <i className="icon_set_1_icon-27"/>
              Parking
            </li>
          </ul>
          <p>
            His
            {' '}
            <strong>civibus tacimates</strong>
            {' '}
            ex, an quo nominavi qualisque. In erant
            dissentiunt vel, dicit legimus docendi an nam. Te congue perfecto eos, aliquid corrumpit
            ea est, eam petentium repudiandae ad.
          </p>
        </div>
        <div className=" box_style_2">
          <i className="icon_set_1_icon-90"/>
          <h4>Need help? Call us</h4>
          <a href="tel://004542344599" className="phone">+45 423 445 99</a>
          <small>Monday to Friday 9.00am - 7.30pm</small>
        </div>
      </div>
    );
  }
}

export class Map extends Component {

}

export class News extends Component {

}

export class BlogPost extends Component {

}

export class Activities extends Component {
  render() {
    return (
      <div className="container add_bottom_60">
        <div className="main_title add_bottom_45">
          <span/>
          <h2>Other stuff you may consider</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8" id="strip_activities">
            <ul>
              <li>
                <img src="./img/activities_1_thumb.jpg" alt="" className="img-circle styled"/>
                <h4>Take a ride on a Horse</h4>
                <p>
                  Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut
                  utamur antiopam
                  inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis
                  pertinax
                  elaboraret sed in. Per no vidit timeam, quis omittam sed at.
                  {' '}
                  <a
                    href="#"
                    className="link_normal"
                  >
                    Read
                    more
                  </a>
                </p>
              </li>
              <li>
                <img src="./img/activities_2_thumb.jpg" alt="" className="img-circle styled"/>
                <h4>Discover typical Food </h4>
                <p>
                  Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur
                  antiopam
                  inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis
                  pertinax
                  elaboraret sed in. Per no vidit timeam, quis omittam sed at.
                  <a href="#" className="link_normal">Read more</a>
                </p>
              </li>
              <li>
                <img src="./img/activities_3_thumb.jpg" alt="" className="img-circle styled"/>
                <h4>Learn to cook deliciuos food</h4>
                <p>
                  Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur
                  antiopam
                  inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis
                  pertinax
                  elaboraret sed in. Per no vidit timeam, quis omittam sed at.
                  {' '}
                  <a
                    href="#"
                    className="link_normal"
                  >
                    Read
                    more
                  </a>
                </p>
              </li>
              <li>
                <img src="img/activities_4_thumb.jpg" alt="" className="img-circle styled"/>
                <h4>Farm activities</h4>
                <p>
                  Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur
                  antiopam
                  inciderint sed. Ut iriure perpetua voluptaria has, vim postea denique in, mollis
                  pertinax
                  elaboraret sed in. Per no vidit timeam, quis omittam sed at.
                  {' '}
                  <a
                    href="#"
                    className="link_normal"
                  >
                    Read
                    more
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="box_style_1 text-center">
              <p><img src="img/best_price.png" alt=""/></p>
              <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et quot persecuti mel.
                Libris
                hendrerit ex sea. Duo legere evertitur an, pri hinc
                {' '}
                <strong>
                  doctus
                  definitiones
                </strong>
                {' '}
                an,
                vix id dicam putent. Ius ornatus instructior in.
              </p>
              <p>
                Ad cum movet fierent assueverit, mei stet legere ne. Mel at vide soluta, ut utamur
                antiopam
                inciderint sed.
              </p>
            </div>


          </div>
        </div>

      </div>

    );
  }
}
