angular.module('myApp').controller('myCtrl', function($scope,$rootScope,$http, $q, myFactory) {

	$scope.heyThere = myFactory.heyHey();
	$scope.names = myFactory.myObject;
    ////////
    $scope.data = {};
    $scope.addData = function() {
        var temporary = [];
        for(var i = 1; i <= 12; i++) {
            var temp = $scope.data['num' + i];
            if(!temp) {
                alert("missing data!");
                return;
            } else {
                temporary.push(temp);
            }     
        }
        var promise = myFactory.postInfo(temporary);
        
        promise.then(function(data) {
            $scope.storedData = data;
            $rootScope.$broadcast("updateData");    
            $scope.data = {};    
        })
    };
    /////////
    $scope.chartOptions = {
        chart: {
            events: {
                load: function() {
                    var series = this.series[0],
                        chart = this;
                    $rootScope.$on("updateData", function() {//this is constantly listening
                        series.setData($scope.storedData.data, true); 
                    })
                }
            }
        },
        title: {
            text: 'Data Type'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: []
        }]
    };

})