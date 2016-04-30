ParentsController = RouteController.extend({
  onBeforeAction: function () {
    this.subscriptionItems = Meteor.subscribe('parents');
  },
  all: function () {
     return Parents.find({}, {sort: {CreatedDate: -1}});
    },
  insert: function (t) {

if(this._post)
{
  
//debugger;


Parents.insert({ 
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
  Router.go('parents');
    });

}


return this.render('parentsInsert', {});

  },
  
  update: function (id,t) {



if(this._post)
{
Parents.update(id, {
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
  Router.go('parents');
    });
}

   var model = this.getModel(this.params._id );
   
    return this.render('parentsUpdate',  model);


  },

  remove: function (id) {

 Parents.remove(id);
  },
      view: function() {
        return this.render('parentsView', {
            data: {
                model: this.getModel(this.params._id ),
            }
        });
    },

  getModel: function (id) {
    return Parents.findOne({_id: id });
  },
   data: function () {
    return Parents.findOne({_id: this.params._id  });
  }

});