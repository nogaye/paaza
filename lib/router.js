var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

//AccountsTemplates.configure({
  //  defaultLayout: 'accounts',
//});

//AccountsTemplates.configure({
  //defaultLayout: 'accounts'
//});



// Options
AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});




//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');






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

    this.next();
  }
});

FeedController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;

    this.next();
  }
});


ForumsController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
    this.next();
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
    this.next();
  },
  data: function () {
    return RecipesData[this.params.name];
  }
});

PostController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('post', this.params.name);
    this.next();
  },
  data: function () {
    return TopicsData[this.params.name];
  }
});


StudentController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('student', this.params.name);
    this.next();
  },
  data: function () {
    return StudentsData[this.params.name];
  }
});


AdminController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('news');
    this.next();
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

//Router.route('signIn');
//AccountsTemplates.configureRoute('signIn');

//AccountsTemplates.configureRoute('signIn');

//AccountsTemplates.configureRoute('signUp');

//AccountsTemplates.configureRoute('forgotPwd');

//AccountsTemplates.configureRoute('resetPwd');

//AccountsTemplates.configureRoute('signIn');

Router.route('accounts');


Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('accounts');
  } else {
    this.next();
  }
});



//Router.onBeforeAction('dataNotFound', {
 // only: 'recipe'
//});
