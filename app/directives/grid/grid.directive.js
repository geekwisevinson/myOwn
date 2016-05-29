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
