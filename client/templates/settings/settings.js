Template['override-atPwdFormBtn'].replaces('atPwdFormBtn');


Template.settings.helpers({
  isLoggedIn: function() {
    return Meteor.user();
  }
});

Template.settings.events({
  
  'click .js-login': function() {
    Meteor.login();
  },
  'click .js-logout': function() {
    Meteor.logout();
}
})