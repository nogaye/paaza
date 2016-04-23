
Template.fees.helpers({
  // selects FEATURED_COUNT number of recipes at random
  currentFees: function() {
    var fees = FeesData.fees;
    return fees;
  },
  feeImage: function() {
    return 'summer-apricots-honey-panna-cotta';
  }

});