/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
//import LogoutPage from './Logout';
// import '../nav/sidebar.scss'

/// Image
import user from "../../../images/user.jpg";



class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    // var handleheartBlast = document.querySelector('.heart');
    // function heartBlast() {
    //   return handleheartBlast.classList.toggle("heart-blast");
    // }
    // handleheartBlast.addEventListener('click', heartBlast);

  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
    "",
    "dashboard-dark",
    "project",
    "contacts",
    "messages",
    "calendar",
    "kanban",
    "task",
  ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    redux = [
      "redux-form",
      "redux-wizard",
      "todo",
    ],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  const active = {
    padding: "6px",
    fontWeight: "700",
    color: "#7f7184"
  }
  return (
    <div
      className={`dlabnav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? scrollPosition > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">

        <MM className="metismenu links" id="menu">
          {/* <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}> */}
          <li className="">
            <Link className="ai-icon" to="/dashboard" >
              <i className="fas fa-home"></i>
              <span className="nav-text" style={window.location.href.includes("dashboard") ? active : {}}>Dashboard</span>
            </Link>
            <Link className="ai-icon" to="/customers" >
              <i className="fas fa-user"></i>
              <span className="nav-text" style={window.location.href.includes("customers") ? active : {}}>Customers</span>
            </Link>
            <Link className="ai-icon" to="/projects" >
              <i className="fas fa-desktop"></i>
              <span className="nav-text" style={window.location.href.includes("projects") ? active : {}}>Projects</span>
            </Link>
            <Link className="ai-icon" to="/servers" >
              <i className="fas fa-server"></i>
              <span className="nav-text" style={window.location.href.includes("servers") ? active : {}}>Servers</span>
            </Link>
            <Link className="ai-icon" to="/billing" >
              <i className="fas fa-file-invoice"></i>
              <span className="nav-text" style={window.location.href.includes("billing") ? active : {}}>Billing</span>
            </Link>
            <Link className="ai-icon" to="/settings" >
              <i className="fas fa-cog"></i>
              <span className="nav-text" style={window.location.href.includes("settings") ? active : {}}>Settings</span>
            </Link>
            <Link className="ai-icon" to="/teams" >
              <i className="fas fa-users"></i>
              <span className="nav-text" style={window.location.href.includes("teams") ? active : {}}>Teams</span>
            </Link>
            <Link className="ai-icon" to="/ssh-keys" >
              <i className="fas fa-key"></i>
              <span className="nav-text" style={window.location.href.includes("ssh-keys") ? active : {}}>SSH Keys</span>
            </Link>
            <Link className="ai-icon" to="/service-provider" >
              <i className="fas fa-business-time"></i>
              <span className="nav-text" style={window.location.href.includes("service-provider") ? active : {}}>Service Provider</span>
            </Link>
            {/* <ul >
              <li><Link className={`${path === "dashboard" ? "mm-active" : ""}`} to="/dashboard"> Dashboard Light</Link></li>
              <li><Link className={`${path === "dashboard-dark" ? "mm-active" : ""}`} to="/dashboard-dark"> Dashboard Dark</Link></li>
              <li><Link className={`${path === "project" ? "mm-active" : ""}`} to="/project">Project</Link></li>
              <li><Link className={`${path === "contacts" ? "mm-active" : ""}`} to="/contacts"> Contacts</Link></li>
              <li><Link className={`${path === "kanban" ? "mm-active" : ""}`} to="/kanban">Kanban</Link></li>
              <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li>
              <li><Link className={`${path === "calendar" ? "mm-active" : ""}`} to="/calendar">Calendar</Link></li>
              <li><Link className={`${path === "messages" ? "mm-active" : ""}`} to="/messages"> Messages</Link></li>
            </ul> */}
          </li>

          {/* <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-info-circle"></i>
              <span className="nav-text">Apps</span>
            </Link>
            <ul >
              <li><Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/app-profile">Profile</Link></li>
              <li><Link className={`${path === "post-details" ? "mm-active" : ""}`} to="/post-details">Post Details</Link></li>
              <li className={`${email.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Email</Link>
                <ul className={`${email.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${path === "email-compose" ? "mm-active" : ""}`} to="/email-compose">Compose</Link></li>
                  <li><Link className={`${path === "email-inbox" ? "mm-active" : ""}`} to="/email-inbox">Inbox</Link></li>
                  <li><Link className={`${path === "email-read" ? "mm-active" : ""}`} to="/email-read">Read</Link></li>
                </ul>
              </li>
              <li><Link className={`${path === "app-calender" ? "mm-active" : ""}`} to="/app-calender">Calendar</Link></li>
              <li className={`${shop.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Shop</Link>
                <ul className={`${shop.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${path === "ecom-product-grid" ? "mm-active" : ""}`} to="/ecom-product-grid">Product Grid</Link></li>
                  <li><Link className={`${path === "ecom-product-list" ? "mm-active" : ""}`} to="/ecom-product-list">Product List</Link></li>
                  <li><Link className={`${path === "ecom-product-detail" ? "mm-active" : ""}`} to="/ecom-product-detail">Product Details</Link></li>
                  <li><Link className={`${path === "ecom-product-order" ? "mm-active" : ""}`} to="/ecom-product-order">Order</Link></li>
                  <li><Link className={`${path === "ecom-checkout" ? "mm-active" : ""}`} to="/ecom-checkout">Checkout</Link></li>
                  <li><Link className={`${path === "ecom-invoice" ? "mm-active" : ""}`} to="/ecom-invoice">Invoice</Link></li>
                  <li><Link className={`${path === "ecom-customers" ? "mm-active" : ""}`} to="/ecom-customers">Customers</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-chart-line"></i>
              <span className="nav-text">Charts</span>
            </Link>
            <ul >
              <li><Link className={`${path === "chart-rechart" ? "mm-active" : ""}`} to="/chart-rechart">RechartJs</Link></li>
              <li><Link className={`${path === "chart-chartjs" ? "mm-active" : ""}`} to="/chart-chartjs">Chartjs</Link></li>
              <li><Link className={`${path === "chart-chartist" ? "mm-active" : ""}`} to="/chart-chartist">Chartist</Link></li>
              <li><Link className={`${path === "chart-sparkline" ? "mm-active" : ""}`} to="/chart-sparkline">Sparkline</Link></li>
              <li><Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} to="/chart-apexchart" >Apexchart</Link></li>
            </ul>
          </li>
          <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fab fa-bootstrap"></i>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul >
              <li><Link className={`${path === "ui-accordion" ? "mm-active" : ""}`} to="/ui-accordion">Accordion</Link></li>
              <li><Link className={`${path === "ui-alert" ? "mm-active" : ""}`} to="/ui-alert"> Alert</Link></li>
              <li><Link className={`${path === "ui-badge" ? "mm-active" : ""}`} to="/ui-badge">Badge</Link></li>
              <li><Link className={`${path === "ui-button" ? "mm-active" : ""}`} to="/ui-button">Button</Link></li>
              <li><Link className={`${path === "ui-modal" ? "mm-active" : ""}`} to="/ui-modal">Modal</Link></li>
              <li><Link className={`${path === "ui-button-group" ? "mm-active" : ""}`} to="/ui-button-group">Button Group</Link></li>
              <li><Link className={`${path === "ui-list-group" ? "mm-active" : ""}`} to="/ui-list-group" >List Group</Link></li>
              <li><Link className={`${path === "ui-card" ? "mm-active" : ""}`} to="/ui-card">Cards</Link></li>
              <li><Link className={`${path === "ui-carousel" ? "mm-active" : ""}`} to="/ui-carousel">Carousel</Link></li>
              <li><Link className={`${path === "ui-dropdown" ? "mm-active" : ""}`} to="/ui-dropdown">Dropdown</Link></li>
              <li><Link className={`${path === "ui-popover" ? "mm-active" : ""}`} to="/ui-popover">Popover</Link></li>
              <li><Link className={`${path === "ui-progressbar" ? "mm-active" : ""}`} to="/ui-progressbar">Progressbar</Link></li>
              <li><Link className={`${path === "ui-tab" ? "mm-active" : ""}`} to="/ui-tab">Tab</Link></li>
              <li><Link className={`${path === "ui-typography" ? "mm-active" : ""}`} to="/ui-typography">Typography</Link></li>
              <li><Link className={`${path === "ui-pagination" ? "mm-active" : ""}`} to="/ui-pagination">Pagination</Link></li>
              <li><Link className={`${path === "ui-grid" ? "mm-active" : ""}`} to="/ui-grid">Grid</Link></li>
            </ul>
          </li>
          <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-heart"></i><span className="nav-text">Plugins</span>
            </Link>
            <ul >
              <li><Link className={`${path === "uc-select2" ? "mm-active" : ""}`} to="/uc-select2">Select 2</Link></li>
              <li><Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} to="/uc-nestable">Nestedable</Link></li>
              <li><Link className={`${path === "uc-noui-slider" ? "mm-active" : ""}`} to="/uc-noui-slider">Noui Slider</Link></li>
              <li><Link className={`${path === "uc-sweetalert" ? "mm-active" : ""}`} to="/uc-sweetalert">Sweet Alert</Link></li>
              <li><Link className={`${path === "uc-toastr" ? "mm-active" : ""}`} to="/uc-toastr">Toastr</Link></li>
              <li><Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} to="/map-jqvmap">Jqv Map</Link></li>
              <li><Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} to="/uc-lightgallery">Light Gallery</Link></li>
            </ul>
          </li>
          <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-087-stop"></i><span className="nav-text">Redux</span>
            </Link>
            <ul>
              <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/todo">Todo</Link></li>
              <li><Link className={`${path === "redux-form" ? "mm-active" : ""}`} to="/redux-form">Redux Form</Link></li>
              <li><Link className={`${path === "redux-wizard" ? "mm-active" : ""}`} to="/redux-wizard">Redux Wizard</Link></li>
            </ul>
          </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="widget-basic" className="ai-icon" >
              <i className="fas fa-user-check"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-file-alt"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul >
              <li><Link className={`${path === "form-element" ? "mm-active" : ""}`} to="/form-element">Form Elements</Link></li>
              <li><Link className={`${path === "form-wizard" ? "mm-active" : ""}`} to="/form-wizard"> Wizard</Link></li>
              <li>
                <Link className={`${path === "form-editor-summernote" ? "mm-active" : ""}`} to="/form-editor-summernote">
                  Summernote
                </Link>
              </li>
              <li><Link className={`${path === "form-pickers" ? "mm-active" : ""}`} to="/form-pickers">Pickers</Link></li>
              <li>
                <Link className={`${path === "form-validation-jquery" ? "mm-active" : ""}`} to="/form-validation-jquery">
                  Form Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" ><i className="fas fa-table"></i><span className="nav-text">Table</span></Link>
            <ul>
              <li>
                <Link className={`${path === "table-filtering" ? "mm-active" : ""}`} to="/table-filtering">
                  Table Filtering
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-sorting" ? "mm-active" : ""}`} to="/table-sorting">
                  Table Sorting
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-bootstrap-basic" ? "mm-active" : ""}`} to="/table-bootstrap-basic">
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link className={`${path === "table-datatable-basic" ? "mm-active" : ""}`} to="/table-datatable-basic">
                  Datatable
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="fas fa-clone"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul >
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" >Error</Link>
                <ul>
                  <li><Link className={`${path === "page-error-400" ? "mm-active" : ""}`} to="/page-error-400">Error 400</Link></li>
                  <li><Link className={`${path === "page-error-403" ? "mm-active" : ""}`} to="/page-error-403">Error 403</Link></li>
                  <li><Link className={`${path === "page-error-404" ? "mm-active" : ""}`} to="/page-error-404">Error 404</Link></li>
                  <li><Link className={`${path === "page-error-500" ? "mm-active" : ""}`} to="/page-error-500">Error 500</Link></li>
                  <li><Link className={`${path === "page-error-503" ? "mm-active" : ""}`} to="/page-error-503">Error 503</Link></li>
                </ul>
              </li>
              <li><Link className={`${path === "page-lock-screen" ? "mm-active" : ""}`} to="/page-lock-screen">Lock Screen</Link></li>
            </ul>
          </li>  */}
        </MM>
        {/* <div className="side-bar-profile">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="side-bar-profile-img">
              <img src={user} alt="" />
            </div>
            <div className="profile-info1">
              <h4 className="fs-18 font-w500">Levi Siregar</h4>
              <span>leviregar@mail.com</span>
            </div>
            <div className="profile-button">
              <i className="fas fa-caret-down scale5 text-light"></i>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2 progress-info">
            <span className="fs-12"><i className="fas fa-star text-orange me-2"></i>Task Progress</span>
            <span className="fs-12">20/45</span>
          </div>
          <div className="progress default-progress">
            <div className="progress-bar bg-gradientf progress-animated" style={{ width: "45%", height: "10px" }} role="progressbar">
              <span className="sr-only">45% Complete</span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p><strong>Fillow Saas Admin</strong> © 2021 All Rights Reserved</p>
          <p className="fs-12">Made with <span className="heart"></span> by DexignLabs</p>
        </div> */}
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
