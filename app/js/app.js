angular.module('TravelApp', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
  
  $scope.opened = function (group, i) {
    console.log("Opened group with offset: "+ i);
  };
  $scope.$watch('groups', function(groups){
    angular.forEach(groups, function(group, idx){
      if (group.open) {
        console.log("Opened group with idx: "+idx);
      }
    })   
  }, true);
}