//modules
import css from '../dist/styles.css';
// import bootstrap form 'bootstrap';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


import homeHTML from './views/homeHTML.html';
import bioHTML from './views/bioHTML.html';
import techHTML from './views/techHTML.html';
import projectsHTML from './views/projectsHTML.html';
import contactHTML from './views/contactHTML.html';

angular.module("portfolioApp", [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state("home", {
            url: "/",
            template: homeHTML
        })
        .state("bio", {
            url: '/bio',
            template: bioHTML
        })
        .state("technologies", {
            url: '/technologies',
            template: techHTML
        })
        .state("work", {
            url: '/projects',
            template: projectsHTML
        })
        .state("contact", {
            url: '/contact',
            template: contactHTML
        })
      $urlRouterProvider.otherwise('/');
  });
