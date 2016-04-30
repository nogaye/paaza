Students = new Mongo.Collection('students');

Students.allow({
  insert: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  },
    remove: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  },  update: function(userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  }
});

Students.myStudents = function() {
  return Students.find({}, {sort: {UpdatedDate: -1}, limit: 2});
}

