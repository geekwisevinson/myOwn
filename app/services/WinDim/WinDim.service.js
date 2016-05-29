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