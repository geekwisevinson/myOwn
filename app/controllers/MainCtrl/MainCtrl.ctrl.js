angular.module('app').controller('MainCtrl',MainCtrl);




function MainCtrl ($scope,$window,WinDim,$timeout,Grid){
    $window.mainScope = $scope;
    $scope.WinDim =WinDim;
    $scope.Grid=Grid;

    $scope.updateDim = function(){

        WinDim.getWindowWidth();
        WinDim.getWindowHeight();
        WinDim.getRatio();
        $scope.$digest();
    };
    $timeout(function(){
     $scope.updateDim();
    },20)





}