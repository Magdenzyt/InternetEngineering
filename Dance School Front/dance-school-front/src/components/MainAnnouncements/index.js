import React, { Component } from "react";
import style from "./MainAnnouncements.module.css";
import { Media } from 'reactstrap';
import koniczyna from '../../assets/Koniczyna_biala.png';
import Moment from 'moment';

class MainAnnouncements extends Component {

  constructor(props) {
    super(props);
    this.state = { announcements: [] };
  }

  callAPI() {
    fetch("http://localhost:8080/ads")
      .then(res => res.json())
      .then(res => this.setState({ announcements: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    Moment.locale('en');
    return (
      <div className={style.text} id="MainAnnouncements">
        <h1 id="MainAnnouncements">Announcements</h1>
        <br></br>
        {this.state.announcements.map(announcement => (
          <Media className={style.announcement}>
            <Media left center href="#">
              <Media src={koniczyna} height="120" alt="Generic placeholder image" />
            </Media>
            <Media body className={style.m_body}>
              <Media heading>
                {Moment(announcement.date).format('DD.MM.YYYY')}
              </Media>
              {announcement.text}
            </Media>

          </Media>
        ))}
      </div>
    );
  }
}

export default MainAnnouncements;