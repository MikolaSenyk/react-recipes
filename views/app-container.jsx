var React = require('react');
var ListHolidays = require('../views/list-holidays.jsx');

var AppContainer = new React.createClass({

    render: function() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Holidays</h2>
                        <ListHolidays/>
                    </div>
                    <div className="col-lg-8">Main part</div>
                </div>
            </div>
        );
    }

});

module.exports = AppContainer;
