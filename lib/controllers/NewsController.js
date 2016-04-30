NewsController = RouteController.extend({
  onBeforeAction: function () {
    this.subscriptionItems = Meteor.subscribe('schoolNews');
  },
    all: function () {
     return News.find({}, {sort: {CreatedDate: -1}});
    },
  insert: function (t) {

if(this._post)
{
  
//debugger;

 //console.log(t.Text.value);


News.insert({ 

Title: t.Title.value,
    Content: t.Content.value,
    SchoolId: t.SchoolId.value,
    CreatedBy: Meteor.user()._id,
    CreatedDate: new Date 
    },function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting News");
  //Router.go('NewsView', {_id: _id});
  Router.go('news');
    });

}


return this.render('newsInsert', {});

  },
  
  update: function (id,t) {



if(this._post)
{
News.update(id, {
      $set: {  
  Title: t.Title.value,
    Content: t.Content.value,
    SchoolId: t.SchoolId.value,
    UpdatedBy: Meteor.user()._id,
    UpdatedDate: new Date  }},function(err,_id){
      //MeteorisFlash.set('success', "Success Inserting News");
  //Router.go('NewsView', {_id: _id});
  Router.go('news');
    });
}

   var model = this.getModel(this.params._id );
   
    return this.render('newsUpdate',  model);


  },

  remove: function (id) {

 News.remove(id);
  },
      view: function() {
        return this.render('newsView', {
            data: {
                model: this.getModel(this.params._id ),
            }
        });
    },

  getModel: function (id) {
    return News.findOne({_id: id });
  },
   data: function () {
    return News.findOne({_id: this.params._id  });
  }

});