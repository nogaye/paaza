var feedSubscription;
//var schoolsSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  feedSubscription = Meteor.subscribe('feed');
  //schoolsSubscription= Meteor.subscribe('schools');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('latestActivity', function () {
      dataReadyHold.release();
    });
  }
});

FeedController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
  }
});


ForumsController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
  }
});

RecipesController = RouteController.extend({
  data: function () {
    return _.values(RecipesData);
  }
});


TopicsController = RouteController.extend({
  data: function () {
    return _.values(TopicsData);
  }
});

StudentsController = RouteController.extend({
  data: function () {
    return _.values(StudentsData);
  }
});


FeesController = RouteController.extend({

  data: function () {
    return _.values(FeesData);
  }
});


BookmarksController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.user())
      Meteor.subscribe('bookmarks');
    else
      Overlay.open('authOverlay');
  },
  data: function () {
    if (Meteor.user())
      return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
});

PostController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('post', this.params.name);
  },
  data: function () {
    return TopicsData[this.params.name];
  }
});


StudentController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('student', this.params.name);
  },
  data: function () {
    return StudentsData[this.params.name];
  }
});


AdminController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('news');
  }
});

SchoolsController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('schools');
  }
});


Router.route('home', {
  path: '/'
});

Router.route('topics');


Router.route('post', {
  path: '/topics/:name'
});

Router.route('feed');

Router.route('forums');


Router.route('recipes');

Router.route('bookmarks');

Router.route('about');

Router.route('fees');

Router.route('recipe', {
  path: '/recipes/:name'
});

Router.route('students');

Router.route('student', {
  path: '/students/:name'
});

Router.route('admin', {
  layoutTemplate: null
});
Router.route('schools', {
  layoutTemplate: null
});

Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});
