// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  // your page initialization code here
  // the DOM will be available here
  app.init();
})();
