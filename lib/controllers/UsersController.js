UsersController = RouteController.extend({
  onBeforeAction: function () {
    this.subscriptionItems = Meteor.subscribe('schoolUsers');
  },
    all: function () {
     return Users.find({}, {sort: {CreatedDate: -1}});
    },

  insert: function (t) {

if(this._post)
{
  
//debugger;

 //console.log(t.Text.value);


Users.insert({ 

Title: t.Title.value,
    Content: t.Content.value,
    SchoolId: t.SchoolId.value,
    CreatedBy: Meteor.user()._id,
    CreatedDate: new Date ,
    UpdatedBy: Meteor.user()._id,
    UpdatedDate: new Date 
    },function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Users");
  //Router.go('UsersView', {_id: _id});
  Router.go('users');
    });

}


return this.render('usersInsert', {});

  },
  
  update: function (id,t) {



if(this._post)
{
Users.update(id, {
      $set: {  
  Title: t.Title.value,
    Content: t.Content.value,
    SchoolId: t.SchoolId.value,
    UpdatedBy: Meteor.user()._id,
    UpdatedDate: new Date 
     }},function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting Users");
  //Router.go('UsersView', {_id: _id});
  Router.go('users');
    });
}

   var model = this.getModel(this.params._id );
   
    return this.render('usersUpdate',  model);


  },

  remove: function (id) {

 Users.remove(id);
  },
      view: function() {
        return this.render('usersView', {
            data: {
                model: this.getModel(this.params._id ),
            }
        });
    },

  getModel: function (id) {
    return Users.findOne({_id: id });
  },
   data: function () {
    return Users.findOne({_id: this.params._id  });
  }

});