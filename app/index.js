var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.sass');
var App = require('./components/App');

ReactDOM.render(
   <App/>,
   document.getElementById('app')
);
