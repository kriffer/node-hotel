import React, { Component } from 'react';
import { Header } from './Header';


export class Blog extends Component {
  render() {
    return (
      <div>

        <div className="container margin_60">
          <div className="row">

            <div className="col-md-9">
              <div className="box_style_1">
                <div className="post">
                  <a href="blog_post.html">
                    <img
                      src="img/blog-3.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                  <div className="post_info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <i className="icon-calendar-empty" />
                          {' '}
On
                          {' '}
                          <span>12 Nov 2020</span>
                        </li>
                        <li>
                          <i className="icon-inbox-alt" />
                          {' '}
In
                          {' '}
                          <a href="#">Top tours</a>
                        </li>
                        <li>
                          <i className="icon-tags" />
                          {' '}
Tags
                          {' '}
                          <a href="#">Works</a>
,
                          {' '}
                          <a
                            href="#"
                          >
Personal
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-right">
                      <i className="icon-comment" />
                      <a href="#">25 </a>
                    </div>
                  </div>
                  <h2>Duis aute irure dolor in reprehenderit</h2>
                  <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum
                  albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere
                  alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur
                  voluptatibus. Et volumus sententiae adversarium duo......
                  </p>
                  <p>
                  Ludus albucius adversarium eam eu. Sit eu reque tation aliquip. Quo no dolorum
                  albucius lucilius, hinc eligendi ut sed. Ex nam quot ferri suscipit, mea ne legere
                  alterum repudiandae. Ei pri quaerendum intellegebat, ut vel consequuntur
                  voluptatibus. Et volumus sententiae adversarium duo......
                  </p>
                  <a href="blog_post.html" className="btn_1">Read more</a>
                </div>

              </div>


              <div className="text-center">
                <ul className="pagination">
                  <li><a href="#">Prev</a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">Next</a></li>
                </ul>

              </div>

            </div>


            <aside className="col-md-3">

              <div className="widget">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button" styles={{marginLeft:'0'}}>
                      <i
                        className="icon-search"
                      />
                    </button>
                  </span>
                </div>

              </div>


              <div className="widget" id="cat_blog">
                <h4>Categories</h4>
                <ul>
                  <li><a href="#">Places to visit</a></li>
                  <li><a href="#">Top tours</a></li>
                  <li><a href="#">Tips for travellers</a></li>
                  <li><a href="#">Events</a></li>
                </ul>
              </div>




                <div className="widget">
                  <h4>Recent post</h4>
                  <ul className="recent_post">
                    <li>
                      <i className="icon-calendar-empty" />
                      {' '}
16th July, 2020
                      <div>
                        <a href="#">
It is a long established fact that a reader will be
                      distracted
                          {' '}
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="icon-calendar-empty" />
                      {' '}
16th July, 2020
                      <div>
                        <a href="#">
It is a long established fact that a reader will be
                      distracted
                          {' '}
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="icon-calendar-empty" />
                      {' '}
16th July, 2020
                      <div>
                        <a href="#">
It is a long established fact that a reader will be
                      distracted
                          {' '}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>


              <div className="widget tags">
                <h4>Tags</h4>
                <a href="#">Lorem ipsum</a>
                <a href="#">Dolor</a>
                <a href="#">Long established</a>
                <a href="#">Sit amet</a>
                <a href="#">Latin words</a>
                <a href="#">Excepteur sint</a>
              </div>


            </aside>


          </div>

        </div>
      </div>


    );
  }
}
