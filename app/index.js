'use strict';

import angular from 'angular';
import 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';

import routing from './app.config';

import AppCtrl from './controllers/app';

angular
  .module('myApp', ['ngRoute'])
  .config(routing)
  .controller('AppCtrl', AppCtrl);
