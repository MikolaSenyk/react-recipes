var AppDispatcher = require('../dispatcher/app-dispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var holidays = [];

var HolidayStore = assign({}, EventEmitter.prototype, {

});