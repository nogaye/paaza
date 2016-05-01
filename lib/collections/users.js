Users = Meteor.users;

Users.allow({
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

//Super admin
Users.allUsers = function() {
  return Users.find({}, {sort: {CreatedDate: -1}, limit: 200});
}

//School Adim. Only manage users from a given school
Users.schoolUsers = function() {
  return Users.find({}, {sort: {UpdatedDate: -1}, limit: 200});
}

