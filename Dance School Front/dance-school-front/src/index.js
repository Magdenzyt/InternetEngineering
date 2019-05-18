import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import ContainerRoute from "./components/ContainerRoute";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoursesPage from "./pages/CoursesPage";
import StudentPage from "./pages/StudentPage.js";
import TeacherPage from "./pages/TeacherPage.js";
import ThankYouPage from './pages/ThankYouPage';
import AfterBuyPage from './pages/AfterBuyPage';

class Router extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <ContainerRoute path="/" exact component={MainPage} />
            <ContainerRoute path="/login" exact component={LoginPage} />
            <ContainerRoute path="/register" exact component={RegisterPage} />
            <ContainerRoute path="/courses" exact component={CoursesPage} />
            <ContainerRoute path="/student" exact component={StudentPage} />
            <ContainerRoute path="/teacher" exact component={TeacherPage} />
            <ContainerRoute path="/thankYou" exact component={ThankYouPage}/>
            <ContainerRoute path="/afterBuy" exact component={AfterBuyPage}/>
          </Switch>
        </BrowserRouter>
      );
    }
  }
  
  ReactDOM.render(<Router />, document.getElementById("root"));
  
  serviceWorker.unregister();
  