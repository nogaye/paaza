Template.topicItem.helpers({
  path: function () {
    return Router.path('post', this.topic);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({recipeName: this.name});
    return count && count.count;
  }
});