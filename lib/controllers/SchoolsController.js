SchoolsController = RouteController.extend({
  onBeforeAction: function () {
    this.subscriptionItems = Meteor.subscribe('schools');
  },
    all: function () {
     return Schools.find({}, {sort: {date: -1}});
    },
  insert: function (t) {

if(this._post)
{
  
//debugger;


Schools.insert({ 
    Name: t.Name.value,
    PhoneNumber: t.PhoneNumber.value,
    Address: t.Address.value,
    ImageUrl: t.ImageUrl.value,
    //SchoolId: t.SchoolId.value,
    //StudentId: t.StudentId.value,
    CreatedBy: Meteor.user()._id,
    CreatedDate: new Date 
    },function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Schools");
  //Router.go('schoolsView', {_id: _id});
  Router.go('schools');
    });

}


return this.render('schoolsInsert', {});

  },
  
  update: function (id,t) {



if(this._post)
{
Schools.update(id, {
      $set: {  
    Name: t.Name.value,
    PhoneNumber: t.PhoneNumber.value,
    Address: t.Address.value,
    //ImageUrl: t.ImageUrl,
    //SchoolId: t.SchoolId,
    //StudentId: t.ImageUrl,
    UpdatedBy: Meteor.user()._id,
    UpdatedDate: new Date  }},function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Schools");
  //Router.go('schoolsView', {_id: _id});
  Router.go('schools');
    });
}

   var model = this.getModel(this.params._id );
   
    return this.render('schoolsUpdate',  model);


  },

  remove: function (id) {

 Schools.remove(id);
  },
      view: function() {
        return this.render('schoolsView', {
            data: {
                model: this.getModel(this.params._id ),
            }
        });
    },

  getModel: function (id) {
    return Schools.findOne({_id: id });
  },
   data: function () {
    return Schools.findOne({_id: this.params._id  });
  }

});