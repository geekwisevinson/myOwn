angular.module('app',['ui.router']);
angular.module('app')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'states/home/home.html'
            })
            .state('home.child',{
                url:'/child',
                templateUrl: "states/home/child/child.html"
            })
    }
);

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
function grid50($scope,WinDim){


$scope.sizeo=Math.floor(WinDim.ww*.49) +'px';



}
angular.module('app')
    .directive('grid',function(WinDim,$timeout){
        return {
            restrict:'A',
            link: {post:function(scope, element, attributes){
                var getww = function(){
                    return (WinDim.ww/attributes.grid)+ 'px';
                };
                console.log(element[0]);
                console.log(WinDim.ww);

                element[0].style.border = '1px solid black';
                element[0].style.display = 'inline-block';
                element[0].setAttribute("ng-style",{width:(WinDim.ww+'px')});

            }}
        }
    });

angular.module("app")
    .directive('square', function() {
    return {
        link: function(scope, element, attributes){
            element.addClass(attributes.myPass);

        }
    }
});
angular.module('app')
    .service('Grid',function(WinDim){



        return{
            one:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'100%'
                }
            },
            two:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'50%'
                }
            },
            three:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:'50%'
                }
            },
            four:function(){
                return{
                    display:'inline-block',
                    border:'1px solid black',
                    width:(WinDim.ww/4) + 'px'
                }
            }
        }
    });
angular.module('app').service('WinDim',function($window) {
        return {
            ww: Math.max($window.document.body.clientWidth, $window.innerWidth || 0),
            hh: Math.max($window.document.body.clientHeight, $window.innerHeight || 0),
            oo: 0,
            getWindowWidth: function () {
                this.ww = Math.max($window.document.body.clientWidth || 0);
                return Math.max($window.document.body.clientWidth || 0);
            },
            getWindowHeight: function () {
                this.hh = Math.max($window.document.body.offsetHeight, $window.innerHeight || 0);
                return Math.max($window.document.body.offsetHeight, $window.innerHeight || 0);
            },
            getRatio: function () {
                if (this.ww > this.hh) {
                    this.oo = 0;
                    return 0;
                } else {
                    this.oo = 1;
                    return 1;
                }

            }
        }
}
);