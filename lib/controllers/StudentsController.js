StudentsController = RouteController.extend({
  onBeforeAction: function () {
    this.subscriptionItems = Meteor.subscribe('students');
  },
  all: function () {
     return Students.find({}, {sort: {date: -1}});
    },
  insert: function (t) {

//debugger;
if(this._post)
{
  


Students.insert({ 
    FirstName: t.FirstName.value,
    LastName: t.LastName.value,
    PhoneNumber: t.PhoneNumber.value,
     EmailAddress: t.EmailAddress.value,
    HomeAddress: t.HomeAddress.value,
     StudentId: t.StudentId.value,
    SchoolId: t.SchoolId.value,
    ImageUrl: t.ImageUrl.value,
    CreatedBy: Meteor.user()._id,
    CreatedDate: new Date 
    },function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Schools");
  //Router.go('schoolsView', {_id: _id});
  Router.go('students');
    });

}


return this.render('studentsInsert', {});

  },
  
  update: function (id,t) {



if(this._post)
{
Students.update(id, {
      $set: {  
    FirstName: t.FirstName.value,
    LastName: t.LastName.value,
    PhoneNumber: t.PhoneNumber.value,
     EmailAddress: t.EmailAddress.value,
    HomeAddress: t.HomeAddress.value,
     StudentId: t.StudentId.value,
    SchoolId: t.SchoolId.value,
    ImageUrl: t.ImageUrl.value,
    UpdatedBy: Meteor.user()._id,
    UpdatedDate: new Date  }},function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Schools");
  //Router.go('schoolsView', {_id: _id});
  Router.go('students');
    });
}

   var model = this.getModel(this.params._id );
   
    return this.render('studentsUpdate',  model);


  },

  remove: function (id) {

 Students.remove(id);
  },
      view: function() {
        return this.render('studentsView', {
            data: {
                model: this.getModel(this.params._id ),
            }
        });
    },

  getModel: function (id) {
    return Students.findOne({_id: id });
  },
   data: function () {
    return Students.findOne({_id: this.params._id  });
  }

});