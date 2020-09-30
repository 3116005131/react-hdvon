import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class HdHeader extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-custom">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">弘度数据分发管理系统</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><i className="fa fa-cloud-upload"></i>教育云中心</a></li>
            <li><a href="#"><i className="fa fa-yelp"></i>分销中心</a></li>
            <li><a href="#"><i className="fa fa-xing"></i>CRM对接中心</a></li>
            <li><a href="/mine"><i className="fa fa-user"></i>个人中心</a></li>
            <li><a href="#"><i className="fa fa-bell"></i><span className="badge">20</span></a></li>
            <li><a href="#"><i className="fa fa-sign-out"></i>退出</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(HdHeader);
