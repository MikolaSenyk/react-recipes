var React = require('react');
var ReactDom = require('react-dom');
var AppContainer = require('./views/app-container.jsx');

//window.React = React;

ReactDom.render(
    <AppContainer/>,
    document.getElementById('app')
);
