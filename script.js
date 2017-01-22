// App
(function() {
  'use strict';

  angular
    .module('testModule', []);
})();

//Controller
(function() {
  'use strict';

  angular
    .module('testModule')
    .controller('testController', testController);

  function testController() {
    var testModel = this;
    testModel.name = 'Hira';
    testModel.profession = 'Software Engineer';
    testModel.company = 'Mobil Bangladesh';

    testModel.inputs = [];
    testModel.addfield = function() {
      testModel.inputs.push({});
    }
  }

})();
