# React Init

React Init is a quick-start package for building Single Page React Applications. It provides you with a preconfigured build process and a project scaffold that can be built upon.

ESLint is included to enforce uniform and well-written code, but it is fully customizable through the *.eslintrc* file.

Formik and Yup are the new better alternative to Redux Form and I strongly encourage you to use them if you aren't already.

This package has also been updated to Webpack 4 and the configuration files have been mostly trimmed to adjust to the changes.

Enzyme and Jest have been included for testing.

## Includes

* [Styled Components](https://www.styled-components.com/)
* [ESLint](https://eslint.org)
* [Airbnb Style Guide](https://github.com/airbnb/javascript)
* [Webpack 4](https://webpack.js.org)
* [React Router](https://reacttraining.com/react-router)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Formik](https://github.com/jaredpalmer/formik)
* [Yup](https://github.com/jquense/yup)
* [Axios](https://github.com/axios/axios)
* [PropTypes](https://github.com/facebook/prop-types)
* [Enzyme](http://airbnb.io/enzyme/)
* [Jest](https://facebook.github.io/jest/)

### Installation

To install the template, simply clone or download the repository, navigate to the project root and run:

```
npm install
```

### Usage

For development with the Webpack Dev Server and HMR, use:

```
npm run watch
```

To build the project for production, use:

```
npm run build
```

Your project files will be located in the `/dist/` folder after building. Images smaller than 8KB will be embedded, while larger ones will be located in `/dist/assets/`.

To run tests, use:

```
npm run test
```

### License

This started out as a quick-start template for my own projects, so feel free to modify or use it as you like.