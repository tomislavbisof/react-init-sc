import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import {
  AppStyled,
  WelcomeStyled,
  Title,
  Paragraph,
  List,
  Item,
  Link,
  Logo,
} from './App.styled';

import colors from '../../constants/colors';

import ReactLogo from '../../assets/react.svg';

const Welcome = () => (
  <WelcomeStyled>
    <Title>Welcome to React Init</Title>
    <Paragraph>
      This React starter project is intended to jump-start development of new
      projects with a collection of commonly used libraries.
    </Paragraph>
    <Paragraph>The default installation includes:</Paragraph>
    <List>
      <Item>
        <Link
          href="https://www.styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Styled Components
        </Link>
      </Item>
      <Item>
        <Link
          href="https://eslint.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESLint
        </Link>{' '}
        with{' '}
        <Link
          href="https://github.com/airbnb/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          Airbnb Style Guide
        </Link>
      </Item>
      <Item>
        <Link
          href="https://webpack.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webpack 4
        </Link>{' '}
        &{' '}
        <Link
          href="https://webpack.js.org/configuration/dev-server/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webpack Dev Server
        </Link>
      </Item>
      <Item>
        <Link
          href="https://reacttraining.com/react-router/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Router
        </Link>
      </Item>
      <Item>
        <Link
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </Link>{' '}
        &{' '}
        <Link
          href="https://github.com/gaearon/redux-thunk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Thunk
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Formik
        </Link>{' '}
        &{' '}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/axios/axios"
          target="_blank"
          rel="noopener noreferrer"
        >
          Axios
        </Link>
      </Item>
      <Item>
        <Link
          href="https://github.com/facebook/prop-types"
          target="_blank"
          rel="noopener noreferrer"
        >
          PropTypes
        </Link>
      </Item>
      <Item>
        <Link
          href="http://airbnb.io/enzyme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enzyme
        </Link>{' '}
        &{' '}
        <Link
          href="https://facebook.github.io/jest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jest
        </Link>
      </Item>
    </List>
    <Paragraph>Happy coding!</Paragraph>
    <Logo className="app-page-logo" src={ReactLogo} alt="" />
  </WelcomeStyled>
);

const App = () => (
  <AppStyled data-test="App">
    <GlobalStyle />
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <Redirect to="/welcome" />
    </Switch>
  </AppStyled>
);

const GlobalStyle = createGlobalStyle`
  html, body, h1, p, ul {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.body};
    color: ${colors.secondary};

    font-family: 'Roboto', sans-serif;
    font-size: 13px;
  }
`;

export default App;
