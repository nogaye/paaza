

Template.post.helpers({
  isAdmin: function() {
    return Meteor.user() && Meteor.user().admin;
  },
   bookmarked: function() {
    return Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  }
});

Template.post.events({

 'click .js-add-bookmark': function(event) {
    event.preventDefault();

    if (! Meteor.userId())
      return Overlay.open('authOverlay');
    
    Meteor.call('bookmarkRecipe', this.name);
  },

  'click .js-remove-bookmark': function(event) {
    event.preventDefault();

    Meteor.call('unbookmarkRecipe', this.name);
  },
'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  },



  'submit form': function(event) {
    event.preventDefault();

    var text = $(event.target).find('[name=text]').val();
    
    News.insert({ text: text, date: new Date });

    alert('Saved latest news');
  },
  
  'click .login': function() {
    Meteor.loginWithTwitter();
  }
});
