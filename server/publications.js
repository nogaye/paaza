
//Only publish tasks that are public or belong to the current user

Meteor.publish('bookmarkCounts', function() {
  return BookmarkCounts.find();
});

Meteor.publish('news', function() {
  return News.find({}, {sort: {date: -1}, limit: 1});
});

Meteor.publish('schools', function() {
  return Schools.find({}, {sort: {date: -1}, limit: 100});
});

Meteor.publish('mySchools', function() {
  return Schools.mySchools();
});
Meteor.publish('myStudents', function() {
  return Students.myStudents();
});


Meteor.publish('parents', function() {
  return Parents.find({}, {sort: {date: -1}, limit: 100});
});

Meteor.publish('students', function() {
  return Students.find({}, {sort: {date: -1}, limit: 100});
});

 // Only return schools that has be asigned to school admin
  //Meteor.publish('mySchools', function () {
  //  return Schools.find({_id: this.schoolId });
      
   // });

Meteor.publish('latestActivity', function () {
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('recipe', function(name) {
  check(name, String);
  return [
    BookmarkCounts.find({recipeName: name}),
    Activities.find({recipeName: name})
  ];
});

// autopublish the user's bookmarks and admin status
Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {
    fields: {
      admin: 1,
      bookmarkedRecipeNames: 1,
      'services.twitter.profile_image_url_https': 1
    }
  });
})