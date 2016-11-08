//modules
import css from '../../dist/assets/styles.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import homeHTML from './views/homeHTML';
import bioHTML from './views/bioHTML';
import techHTML from './views/techHTML';

angular.module("portfolioApp", [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        .state("home", {
            url: "/",
            template: homeHTML
        })
        .state("welcome", {
            url: '/bio',
            template: bioHTML
        })
        .state("technologies" {
            url: '/technologies',
            template: techHTML
        })
  })
