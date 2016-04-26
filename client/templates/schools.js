var selectedSchool;

Template.schools.helpers({
  isSuperAdmin: function() {
    return Meteor.user() && Meteor.user().admin;
  },
  
  currentSchool: function() {
    return selectedSchool;
  },
    schools: function() {
    var scls = Schools.find({}, {sort: {date: -1}});
    console.log(scls);
    return scls;
  },
  //ready: function() {
    //return Router.current().schoolsSubscription.ready();
  //}
});

Template.schools.events({
  'submit form': function(event) {
    event.preventDefault();

    const target = event.target;
    //const text = target.text.value;

    //var text = $(event.target).find('[name=text]').val();
    alert(this);
if(this._id)
{
    Schools.update(this._id, {
      $set: { Name: target.Name.value },
  });
    
}
else
{
Schools.insert({ 
    Name: target.Name.value,
    PhoneNumber: target.PhoneNumber.value,
    Address: target.Address.value,
    //Moto: target.moto.value, 
    date: new Date 
    });
}


    alert('Saved latest news');
  },


    'click .edit': function() {
 selectedSchool = this;

 alert('selected: '+this._id);
 alert('selected: '+selectedSchool._id);
    //Schools.update(this._id, {
      //$set: { Name: ! this.schoolName },
    //});
  },
  'click .delete': function() {
    Schools.remove(this._id);

alert('deleted: '+this._id);

 /*Template.appBody.addNotification({
          action: 'View',
          title: 'Your photo was shared.'});*/

  },
  
  'click .login': function() {
    Meteor.loginWithTwitter();
  },
})
