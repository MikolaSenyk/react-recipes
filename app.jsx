var React = require('react');
var ReactDom = require('react-dom');
var App = require('./views/App.jsx');

//window.React = React;

ReactDom.render(
    <App/>,
    document.getElementById('app')
);
