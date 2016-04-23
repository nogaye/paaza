Template.studentItem.helpers({
  path: function () {
    return Router.path('student', this.recipe);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({studentName: this.name});
    return count && count.count;
  }
});