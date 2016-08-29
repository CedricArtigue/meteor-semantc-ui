import { Template } from 'meteor/templating';

import './main-layout.html';

Template.main_layout.onCreated(function() {
  console.log('Layout created');
});

// // Template.hello.helpers({
// //   counter() {
// //     return Template.instance().counter.get();
// //   },
// // });

// // Template.hello.events({
// //   'click button'(event, instance) {
// //     // increment the counter when button is clicked
// //     instance.counter.set(instance.counter.get() + 1);
// //   },
// // });

// // create sidebar and attach to menu open

// Template.main_layout.onCreated(function() {
//   $('.ui.sidebar').sidebar('attach events', '.toc.item');
// });