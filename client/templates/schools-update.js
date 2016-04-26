
Template.schoolsUpdate.helpers({
  isSuperAdmin: function() {
   return Meteor.user() && Meteor.user().admin;
  }
});

Template.schoolsUpdate.events({
  'submit form': function(event) {
    event.preventDefault();

    const target = event.target;

  Schools.update(this._id, {
      $set: { Name: target.Name.value },
  });

    alert('Updated');
  },

  
  'click .login': function() {
    Meteor.loginWithTwitter();
  },
})
