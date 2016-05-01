


var adminHelpers = {
  isSuperAdmin: function() {
    return Meteor.user() && Meteor.user().admin;
  },
  
    schools: function() {

      var all = Router.current().all();
console.log(all);
      return all;
  },
  ready: function() {
    return Router.current().subscriptionItems.ready();
  }
};

var adminEvents = {
 
  'submit form': function(event) {
    event.preventDefault();
 console.log(this);
    const target = event.target;
    //const text = target.text.value;

    //var text = $(event.target).find('[name=text]').val();
Router.current()._post = true;
if(this._id)
{
Router.current().update(this._id,target);  
}
else
{
Router.current().insert(target);
}
Router.current()._post = false;
},


    'click .edit': function() {
 
 //alert('selected: '+this._id);
    //Schools.update(this._id, {
      //$set: { Name: ! this.schoolName },
    //});
  },
  'click .delete': function() {
   Router.current().remove(this._id);

//alert('deleted: '+this._id);

 /*Template.appBody.addNotification({
          action: 'View',
          title: 'Your photo was shared.'});*/

  },
  
  'click .login': function() {
    Meteor.loginWithTwitter();
  },
};

//Schools
Template.schools.helpers(adminHelpers);
Template.schoolsInsert.helpers(adminHelpers);
Template.schoolsUpdate.helpers(adminHelpers);

Template.schools.events(adminEvents);
Template.schoolsInsert.events(adminEvents);
Template.schoolsUpdate.events(adminEvents);

//Parents
Template.parents.helpers(adminHelpers);
Template.parentsInsert.helpers(adminHelpers);
Template.parentsUpdate.helpers(adminHelpers);

Template.parents.events(adminEvents);
Template.parentsInsert.events(adminEvents);
Template.parentsUpdate.events(adminEvents);

//Students

Template.students.helpers(adminHelpers);
Template.studentsInsert.helpers(adminHelpers);
Template.studentsUpdate.helpers(adminHelpers);


Template.students.events(adminEvents);
Template.studentsInsert.events(adminEvents);
Template.studentsUpdate.events(adminEvents);

//News

Template.news.helpers(adminHelpers);
Template.newsInsert.helpers(adminHelpers);
Template.newsUpdate.helpers(adminHelpers);


Template.news.events(adminEvents);
Template.newsInsert.events(adminEvents);
Template.newsUpdate.events(adminEvents);

//Users

Template.users.helpers(adminHelpers);
Template.usersInsert.helpers(adminHelpers);
Template.usersUpdate.helpers(adminHelpers);


Template.users.events(adminEvents);
Template.usersInsert.events(adminEvents);
Template.usersUpdate.events(adminEvents);
