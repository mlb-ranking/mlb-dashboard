/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './MaterialAdmin.css';

// import MaterialHeader from '../MaterialHeader';
// import Feedback from '../Feedback';
// import Footer from '../Footer';
// import {profileHtml} from './main';
// import htmlRemovedMiddle from './main';


class MaterialAdmin extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <nav className="navbar-default navbar-static-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
              <li className="nav-header">
                <div className="dropdown profile-element"> <span>
                <img alt="image" className="img-circle" src="/img/profile_small.jpg" />
              </span>
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                  </span> <span className="text-muted text-xs block">Art Director <b className="caret" /></span> </span> </a>
                  <ul className="dropdown-menu animated fadeInRight m-t-xs">
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="contacts.html">Contacts</a></li>
                    <li><a href="mailbox.html">Mailbox</a></li>
                    <li className="divider" />
                    <li><a href="login.html">Logout</a></li>
                  </ul>
                </div>
                <div className="logo-element">
                  IN+
                </div>
              </li>
              <li className="active">
                <a href="index.html"><i className="fa fa-th-large" /> <span className="nav-label">Dashboards</span> <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li className="active"><a href="index.html">Dashboard v.1</a></li>
                  <li><a href="dashboard_2.html">Dashboard v.2</a></li>
                  <li><a href="dashboard_3.html">Dashboard v.3</a></li>
                  <li><a href="dashboard_4_1.html">Dashboard v.4</a></li>
                  <li><a href="dashboard_5.html">Dashboard v.5 </a></li>
                </ul>
              </li>
              <li>
                <a href="layouts.html"><i className="fa fa-diamond" /> <span className="nav-label">Layouts</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-bar-chart-o" /> <span className="nav-label">Graphs</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="graph_flot.html">Flot Charts</a></li>
                  <li><a href="graph_morris.html">Morris.js Charts</a></li>
                  <li><a href="graph_rickshaw.html">Rickshaw Charts</a></li>
                  <li><a href="graph_chartjs.html">Chart.js</a></li>
                  <li><a href="graph_chartist.html">Chartist</a></li>
                  <li><a href="c3.html">c3 charts</a></li>
                  <li><a href="graph_peity.html">Peity Charts</a></li>
                  <li><a href="graph_sparkline.html">Sparkline Charts</a></li>
                </ul>
              </li>
              <li>
                <a href="mailbox.html"><i className="fa fa-envelope" /> <span className="nav-label">Mailbox </span><span className="label label-warning pull-right">16/24</span></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="mailbox.html">Inbox</a></li>
                  <li><a href="mail_detail.html">Email view</a></li>
                  <li><a href="mail_compose.html">Compose email</a></li>
                  <li><a href="email_template.html">Email templates</a></li>
                </ul>
              </li>
              <li>
                <a href="metrics.html"><i className="fa fa-pie-chart" /> <span className="nav-label">Metrics</span></a>
              </li>
              <li>
                <a href="widgets.html"><i className="fa fa-flask" /> <span className="nav-label">Widgets</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-edit" /> <span className="nav-label">Forms</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="form_basic.html">Basic form</a></li>
                  <li><a href="form_advanced.html">Advanced Plugins</a></li>
                  <li><a href="form_wizard.html">Wizard</a></li>
                  <li><a href="form_file_upload.html">File Upload</a></li>
                  <li><a href="form_editors.html">Text Editor</a></li>
                  <li><a href="form_autocomplete.html">Autocomplete</a></li>
                  <li><a href="form_markdown.html">Markdown</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-desktop" /> <span className="nav-label">App Views</span>  <span className="pull-right label label-primary">SPECIAL</span></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="profile_2.html">Profile v.2</a></li>
                  <li><a href="contacts_2.html">Contacts v.2</a></li>
                  <li><a href="projects.html">Projects</a></li>
                  <li><a href="project_detail.html">Project detail</a></li>
                  <li><a href="activity_stream.html">Activity stream</a></li>
                  <li><a href="teams_board.html">Teams board</a></li>
                  <li><a href="social_feed.html">Social feed</a></li>
                  <li><a href="clients.html">Clients</a></li>
                  <li><a href="full_height.html">Outlook view</a></li>
                  <li><a href="vote_list.html">Vote list</a></li>
                  <li><a href="file_manager.html">File manager</a></li>
                  <li><a href="calendar.html">Calendar</a></li>
                  <li><a href="issue_tracker.html">Issue tracker</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="article.html">Article</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="timeline.html">Timeline</a></li>
                  <li><a href="pin_board.html">Pin board</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="search_results.html">Search results</a></li>
                  <li><a href="lockscreen.html">Lockscreen</a></li>
                  <li><a href="invoice.html">Invoice</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="login_two_columns.html">Login v.2</a></li>
                  <li><a href="forgot_password.html">Forget password</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li><a href="500.html">500 Page</a></li>
                  <li><a href="empty_page.html">Empty page</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-globe" /> <span className="nav-label">Miscellaneous</span><span className="label label-info pull-right">NEW</span></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="toastr_notifications.html">Notification</a></li>
                  <li><a href="nestable_list.html">Nestable list</a></li>
                  <li><a href="agile_board.html">Agile board</a></li>
                  <li><a href="timeline_2.html">Timeline v.2</a></li>
                  <li><a href="diff.html">Diff</a></li>
                  <li><a href="pdf_viewer.html">PDF viewer</a></li>
                  <li><a href="i18support.html">i18 support</a></li>
                  <li><a href="sweetalert.html">Sweet alert</a></li>
                  <li><a href="idle_timer.html">Idle timer</a></li>
                  <li><a href="truncate.html">Truncate</a></li>
                  <li><a href="password_meter.html">Password meter</a></li>
                  <li><a href="spinners.html">Spinners</a></li>
                  <li><a href="spinners_usage.html">Spinners usage</a></li>
                  <li><a href="tinycon.html">Live favicon</a></li>
                  <li><a href="google_maps.html">Google maps</a></li>
                  <li><a href="datamaps.html">Datamaps</a></li>
                  <li><a href="social_buttons.html">Social buttons</a></li>
                  <li><a href="code_editor.html">Code editor</a></li>
                  <li><a href="modal_window.html">Modal window</a></li>
                  <li><a href="clipboard.html">Clipboard</a></li>
                  <li><a href="text_spinners.html">Text spinners</a></li>
                  <li><a href="forum_main.html">Forum view</a></li>
                  <li><a href="validation.html">Validation</a></li>
                  <li><a href="tree_view.html">Tree view</a></li>
                  <li><a href="loading_buttons.html">Loading buttons</a></li>
                  <li><a href="chat_view.html">Chat view</a></li>
                  <li><a href="masonry.html">Masonry</a></li>
                  <li><a href="tour.html">Tour</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-flask" /> <span className="nav-label">UI Elements</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="typography.html">Typography</a></li>
                  <li><a href="icons.html">Icons</a></li>
                  <li><a href="draggable_panels.html">Draggable Panels</a></li> <li><a href="resizeable_panels.html">Resizeable Panels</a></li>
                  <li><a href="buttons.html">Buttons</a></li>
                  <li><a href="video.html">Video</a></li>
                  <li><a href="tabs_panels.html">Panels</a></li>
                  <li><a href="tabs.html">Tabs</a></li>
                  <li><a href="notifications.html">Notifications &amp; Tooltips</a></li>
                  <li><a href="helper_classes.html">Helper css classes</a></li>
                  <li><a href="badges_labels.html">Badges, Labels, Progress</a></li>
                </ul>
              </li>
              <li>
                <a href="grid_options.html"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-table" /> <span className="nav-label">Tables</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="table_basic.html">Static Tables</a></li>
                  <li><a href="table_data_tables.html">Data Tables</a></li>
                  <li><a href="table_foo_table.html">Foo Tables</a></li>
                  <li><a href="jq_grid.html">jqGrid</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-shopping-cart" /> <span className="nav-label">E-commerce</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="ecommerce_products_grid.html">Products grid</a></li>
                  <li><a href="ecommerce_product_list.html">Products list</a></li>
                  <li><a href="ecommerce_product.html">Product edit</a></li>
                  <li><a href="ecommerce_product_detail.html">Product detail</a></li>
                  <li><a href="ecommerce-cart.html">Cart</a></li>
                  <li><a href="ecommerce-orders.html">Orders</a></li>
                  <li><a href="ecommerce_payments.html">Credit Card form</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-picture-o" /> <span className="nav-label">Gallery</span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li><a href="basic_gallery.html">Lightbox Gallery</a></li>
                  <li><a href="slick_carousel.html">Slick Carousel</a></li>
                  <li><a href="carousel.html">Bootstrap Carousel</a></li>
                </ul>
              </li>
              <li>
                <a href="#"><i className="fa fa-sitemap" /> <span className="nav-label">Menu Levels </span><span className="fa arrow" /></a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href="#" id="damian">Third Level <span className="fa arrow" /></a>
                    <ul className="nav nav-third-level">
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                      <li>
                        <a href="#">Third Level Item</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Second Level Item</a></li>
                  <li>
                    <a href="#">Second Level Item</a></li>
                  <li>
                    <a href="#">Second Level Item</a></li>
                </ul>
              </li>
              <li>
                <a href="css_animation.html"><i className="fa fa-magic" /> <span className="nav-label">CSS Animations </span><span className="label label-info pull-right">62</span></a>
              </li>
              <li className="landing_link">
                <a target="_blank" href="landing.html"><i className="fa fa-star" /> <span className="nav-label">Landing Page</span> <span className="label label-warning pull-right">NEW</span></a>
              </li>
              <li className="special_link">
                <a href="package.html"><i className="fa fa-database" /> <span className="nav-label">Package</span></a>
              </li>
            </ul>
          </div>
        </nav>


        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="row border-bottom">
            <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
              <div className="navbar-header">
                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars" /> </a>
                <form role="search" className="navbar-form-custom" action="search_results.html">
                  <div className="form-group">
                    <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                  </div>
                </form>
              </div>
              <ul className="nav navbar-top-links navbar-right">
                <li>
                  <span className="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i className="fa fa-envelope" />  <span className="label label-warning">16</span>
                  </a>
                  <ul className="dropdown-menu dropdown-messages">
                    <li>
                      <div className="dropdown-messages-box">
                        <a href="profile.html" className="pull-left">
                          <img alt="image" className="img-circle" src="/img/a7.jpg" />
                        </a>
                        <div className="media-body">
                          <small className="pull-right">46h ago</small>
                          <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br />
                          <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="dropdown-messages-box">
                        <a href="profile.html" className="pull-left">
                          <img alt="image" className="img-circle" src="/img/a4.jpg" />
                        </a>
                        <div className="media-body ">
                          <small className="pull-right text-navy">5h ago</small>
                          <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br />
                          <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="dropdown-messages-box">
                        <a href="profile.html" className="pull-left">
                          <img alt="image" className="img-circle" src="/img/profile.jpg" />
                        </a>
                        <div className="media-body ">
                          <small className="pull-right">23h ago</small>
                          <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br />
                          <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                        </div>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="text-center link-block">
                        <a href="mailbox.html">
                          <i className="fa fa-envelope" /> <strong>Read All Messages</strong>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i className="fa fa-bell" />  <span className="label label-primary">8</span>
                  </a>
                  <ul className="dropdown-menu dropdown-alerts">
                    <li>
                      <a href="mailbox.html">
                        <div>
                          <i className="fa fa-envelope fa-fw" /> You have 16 messages
                          <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="profile.html">
                        <div>
                          <i className="fa fa-twitter fa-fw" /> 3 New Followers
                          <span className="pull-right text-muted small">12 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="grid_options.html">
                        <div>
                          <i className="fa fa-upload fa-fw" /> Server Rebooted
                          <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <div className="text-center link-block">
                        <a href="notifications.html">
                          <strong>See All Alerts</strong>
                          <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="login.html">
                    <i className="fa fa-sign-out" /> Log out
                  </a>
                </li>
                <li>
                  <a className="right-sidebar-toggle">
                    <i className="fa fa-tasks" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper wrapper-content">
                <div className="row">
                  {this.props.children}
                </div>
              </div>


              <div className="footer">
                <div className="pull-right">
                  10GB of <strong>250GB</strong> Free.
                </div>
                <div>
                  <strong>Copyright</strong> Example Company © 2014-2017
                </div>
              </div>


            </div>
          </div>
        </div>


        <div className="small-chat-box fadeInRight animated">
          <div className="heading" draggable="true">
            <small className="chat-date pull-right">
              02.19.2015
            </small>
            Small chat
          </div>
          <div className="content">
            <div className="left">
              <div className="author-name">
                Monica Jackson <small className="chat-date">
                10:02 am
              </small>
              </div>
              <div className="chat-message active">
                Lorem Ipsum is simply dummy text input.
              </div>
            </div>
            <div className="right">
              <div className="author-name">
                Mick Smith
                <small className="chat-date">
                  11:24 am
                </small>
              </div>
              <div className="chat-message">
                Lorem Ipsum is simpl.
              </div>
            </div>
            <div className="left">
              <div className="author-name">
                Alice Novak
                <small className="chat-date">
                  08:45 pm
                </small>
              </div>
              <div className="chat-message active">
                Check this stock char.
              </div>
            </div>
            <div className="right">
              <div className="author-name">
                Anna Lamson
                <small className="chat-date">
                  11:24 am
                </small>
              </div>
              <div className="chat-message">
                The standard chunk of Lorem Ipsum
              </div>
            </div>
            <div className="left">
              <div className="author-name">
                Mick Lane
                <small className="chat-date">
                  08:45 pm
                </small>
              </div>
              <div className="chat-message active">
                I belive that. Lorem Ipsum is simply dummy text.
              </div>
            </div>
          </div>
          <div className="form-chat">
            <div className="input-group input-group-sm">
              <input type="text" className="form-control" />
              <span className="input-group-btn"> <button className="btn btn-primary" type="button">Send
            </button> </span></div>
          </div>
        </div>
        <div id="small-chat">
          <span className="badge badge-warning pull-right">5</span>
          <a className="open-small-chat">
            <i className="fa fa-comments" />
          </a>
        </div>
        <div id="right-sidebar" className="animated">
          <div className="sidebar-container">
            <ul className="nav nav-tabs navs-3">
              <li className="active"><a data-toggle="tab" href="#tab-1">
                Notes
              </a></li>
              <li><a data-toggle="tab" href="#tab-2">
                Projects
              </a></li>
              <li className><a data-toggle="tab" href="#tab-3">
                <i className="fa fa-gear" />
              </a></li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane active">
                <div className="sidebar-title">
                  <h3> <i className="fa fa-comments-o" /> Latest Notes</h3>
                  <small><i className="fa fa-tim" /> You have 10 new message.</small>
                </div>
                <div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a1.jpg" />
                        <div className="m-t-xs">
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                        </div>
                      </div>
                      <div className="media-body">
                        There are many variations of passages of Lorem Ipsum available.
                        <br />
                        <small className="text-muted">Today 4:21 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a2.jpg" />
                      </div>
                      <div className="media-body">
                        The point of using Lorem Ipsum is that it has a more-or-less normal.
                        <br />
                        <small className="text-muted">Yesterday 2:45 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a3.jpg" />
                        <div className="m-t-xs">
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                        </div>
                      </div>
                      <div className="media-body">
                        Mevolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        <br />
                        <small className="text-muted">Yesterday 1:10 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a4.jpg" />
                      </div>
                      <div className="media-body">
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                        <br />
                        <small className="text-muted">Monday 8:37 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a8.jpg" />
                      </div>
                      <div className="media-body">
                        All the Lorem Ipsum generators on the Internet tend to repeat.
                        <br />
                        <small className="text-muted">Today 4:21 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a7.jpg" />
                      </div>
                      <div className="media-body">
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        <br />
                        <small className="text-muted">Yesterday 2:45 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a3.jpg" />
                        <div className="m-t-xs">
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                          <i className="fa fa-star text-warning" />
                        </div>
                      </div>
                      <div className="media-body">
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                        <br />
                        <small className="text-muted">Yesterday 1:10 pm</small>
                      </div>
                    </a>
                  </div>
                  <div className="sidebar-message">
                    <a href="#">
                      <div className="pull-left text-center">
                        <img alt="image" className="img-circle message-avatar" src="/img/a4.jpg" />
                      </div>
                      <div className="media-body">
                        Uncover many web sites still in their infancy. Various versions have.
                        <br />
                        <small className="text-muted">Monday 8:37 pm</small>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane">
                <div className="sidebar-title">
                  <h3> <i className="fa fa-cube" /> Latest projects</h3>
                  <small><i className="fa fa-tim" /> You have 14 projects. 10 not completed.</small>
                </div>
                <ul className="sidebar-list">
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Business valuation</h4>
                      It is a long established fact that a reader will be distracted.
                      <div className="small">Completion with: 22%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '22%'}} className="progress-bar progress-bar-warning" />
                      </div>
                      <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Contract with Company </h4>
                      Many desktop publishing packages and web page editors.
                      <div className="small">Completion with: 48%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '48%'}} className="progress-bar" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Meeting</h4>
                      By the readable content of a page when looking at its layout.
                      <div className="small">Completion with: 14%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '14%'}} className="progress-bar progress-bar-info" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-primary pull-right">NEW</span>
                      <h4>The generated</h4>
                      There are many variations of passages of Lorem Ipsum available.
                      <div className="small">Completion with: 22%</div>
                      <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Business valuation</h4>
                      It is a long established fact that a reader will be distracted.
                      <div className="small">Completion with: 22%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '22%'}} className="progress-bar progress-bar-warning" />
                      </div>
                      <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Contract with Company </h4>
                      Many desktop publishing packages and web page editors.
                      <div className="small">Completion with: 48%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '48%'}} className="progress-bar" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="small pull-right m-t-xs">9 hours ago</div>
                      <h4>Meeting</h4>
                      By the readable content of a page when looking at its layout.
                      <div className="small">Completion with: 14%</div>
                      <div className="progress progress-mini">
                        <div style={{width: '14%'}} className="progress-bar progress-bar-info" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="label label-primary pull-right">NEW</span>
                      <h4>The generated</h4>
                      {/*<div class="small pull-right m-t-xs">9 hours ago</div>*/}
                      There are many variations of passages of Lorem Ipsum available.
                      <div className="small">Completion with: 22%</div>
                      <div className="small text-muted m-t-xs">Project end: 4:00 pm - 12.06.2014</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="tab-3" className="tab-pane">
                <div className="sidebar-title">
                  <h3><i className="fa fa-gears" /> Settings</h3>
                  <small><i className="fa fa-tim" /> You have 14 projects. 10 not completed.</small>
                </div>
                <div className="setings-item">
              <span>
                Show notifications
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example" />
                      <label className="onoffswitch-label" htmlFor="example">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Disable Chat
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" name="collapsemenu" defaultChecked className="onoffswitch-checkbox" id="example2" />
                      <label className="onoffswitch-label" htmlFor="example2">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Enable history
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example3" />
                      <label className="onoffswitch-label" htmlFor="example3">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Show charts
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example4" />
                      <label className="onoffswitch-label" htmlFor="example4">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Offline users
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" defaultChecked name="collapsemenu" className="onoffswitch-checkbox" id="example5" />
                      <label className="onoffswitch-label" htmlFor="example5">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Global search
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" defaultChecked name="collapsemenu" className="onoffswitch-checkbox" id="example6" />
                      <label className="onoffswitch-label" htmlFor="example6">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="setings-item">
              <span>
                Update everyday
              </span>
                  <div className="switch">
                    <div className="onoffswitch">
                      <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example7" />
                      <label className="onoffswitch-label" htmlFor="example7">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="sidebar-content">
                  <h4>Settings</h4>
                  <div className="small">
                    I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(MaterialAdmin);
