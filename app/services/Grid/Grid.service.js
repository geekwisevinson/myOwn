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