import React from 'react';
import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';
import { Route } from 'react-router-dom';
const ContainerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <React.Fragment>
        <Header />
        <Container>
          <Component {...props} />
        </Container>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default ContainerRoute;
