import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { Accounts } from 'meteor/accounts-base';

import '../../ui/layouts/main-layout.js';
// import '../../ui/layouts/app-body.js';
// import '../../ui/layouts/unlogged-layout.js';
// import '../../ui/pages/root-redirector.js';
// import '../../ui/pages/etls-page.js';
// import '../../ui/pages/profile-page.js';
// import '../../ui/pages/login-page.js';
// import '../../ui/pages/forgot-password-page.js';
// import '../../ui/pages/reset-password-page.js';
// import '../../ui/pages/register-page.js';
// import '../../ui/pages/email-sent-page.js';
// import '../../ui/pages/home-page.js';

console.log('Router is running well')

FlowRouter.route('/', {
 name: 'App.home',
 // action() {BlazeLayout.render('main_layout', {main: 'home_page'});},
 action() {BlazeLayout.render('main_layout');}, 
});


// FlowRouter group allows redirection to login page if user is not logged in
// var loggedIn = FlowRouter.group({
//   triggersEnter: [function(context, redirect) {
//     if (FlowRouter.current().route.name == 'App.verifyEmail') return;
//     if (Meteor.loggingIn() || Meteor.userId()) return;
//     var route = FlowRouter.current();
//     if ((route.route.name != 'App.login') && (route.route.name != 'App.register') 
//       && (route.route.name != 'App.forgotPassword') && (route.route.name != 'App.resetPassword')
//       && (route.route.name != 'App.emailSent')) {
//       Session.set('redirectAfterLogin', route.path);
//       FlowRouter.go('App.login');
//     }
//   }]
// });

// Accounts.onLogin(function() {
//   var redirect = Session.get('redirectAfterLogin');
//   Session.set('redirectAfterLogin', '/');
//   if (redirect) FlowRouter.go(redirect);
//   else FlowRouter.go('/');
// });

// loggedIn.route('/', {
//  name: 'App.home',
//  action() {BlazeLayout.render('main_layout', {main: 'home_page'});},
// });

// loggedIn.route('/login', {
//   name: 'App.login',
//   action() {BlazeLayout.render('unlogged_layout', {main: 'login_page'});},
// });

// loggedIn.route('/forgot-password', {
//   name: 'App.forgotPassword',
//   action() {BlazeLayout.render('unlogged_layout', {main: 'forgot_password_page'});},
// });

// loggedIn.route('/reset-password/:token', {
//   name: 'App.resetPassword',
//   action() {BlazeLayout.render('unlogged_layout', {main: 'reset_password_page'});},
// });

// loggedIn.route('/register', {
//   name: 'App.register',
//   action() {BlazeLayout.render('unlogged_layout', {main: 'register_page'});},
// });

// loggedIn.route( '/verify-email/:token', {
//   name: 'App.verifyEmail',
//     action (params) {Accounts.verifyEmail(params.token, function (error) {
//       if (error) alert(error.reason);
//       else Meteor.call('users.sendWelcomeEmail', {}, function (error) {
//         if (error) alert(error.reason);
//       });
//     });}
// });

// loggedIn.route('/email-sent', {
//   name: 'App.emailSent',
//   action() {BlazeLayout.render('unlogged_layout', {main: 'email_sent_page'});},
// });

// loggedIn.route('/profile/:menu', {
//   name: 'App.profile',
//   action() {BlazeLayout.render('main_layout', {main: 'profile_page'});},
// });

// loggedIn.route('/etls/:_id/:menu', {
//   name: 'App.etl',
//   action() {BlazeLayout.render('main_layout', { main: 'etls_page' });},
// });

