var FEATURED_COUNT = 2;

Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function() {
    var students = _.values(StudentsData);
    var selection = [];
    
    for (var i = 0;i < FEATURED_COUNT;i++)
      selection.push(students.splice(_.random(students.length - 1), 1)[0]);

    return selection;
  },
  
  activities: function() {
    return Activities.latest();
  },
  
  latestNews: function() {
    return News.latest();
  },
   multipleStudents: function() {
    return FEATURED_COUNT > 1;
  },
   currentSchool: function() {
    console.log(Schools.mySchools().fetch()[0]);
    return Schools.mySchools().fetch()[0];
  },
     myStudents: function() {
    console.log(Students.myStudents().fetch());
    return Students.myStudents().fetch();
  },
});