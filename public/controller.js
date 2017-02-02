angular.module('myApp').controller('myCtrl', function($scope, $window, $timeout, myFactory) {

	$scope.heyThere = myFactory.heyHey();
    // console.log("response", myFactory.myObject)
	$scope.names = myFactory.myObject;
    ////////
    $scope.addData = function() {
        console.log("adding data, object", $scope.data);
        myFactory.postInfo($scope.data);
        $scope.getData();
        $scope.data = "";
        // $scope.save();    
    };
    /////////
    $scope.save = function(){
        $timeout(function(){
            window.alert("hi!");
        });

    };
    // $scope.addSeries = function () {
    //     var rnd = []
    //     for (var i = 0; i < 10; i++) {
    //         rnd.push(Math.floor(Math.random() * 20) + 1)
    //     }
    //     $scope.chartConfig.series.push({
    //         data: rnd
    //     })
    // }
    $scope.getData = function() {
        myFactory.getAllInfo().then(function(res) {
            $scope.chartOptions = {
                title: {
                    text: 'Data Type'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                series: [{
                    data: [res[1], res[2],  res[3], res[4], res[5], res[6], res[7], res[8], res[9], res[10], res[11], res[12]]
                }]
            };
        });
    };
    $scope.getData();
    //////////////////////////////////////////
    // not working below:
    // $scope.chartConfig = chart;
    // $scope.update = function () {
    //  $scope.chartConfig.title.text = "Setting new title"; //Works    
    // $scope.chartConfig.series = [{ //Works
    //     "name": "Updated data",
    //         "data": [1, 2, 4, 7, 3]
    // }];
    // $scope.chartConfig.xAxis = { 
    //     categories: ['new bar title', 'new bar title2']
    // }
    // console.log($scope.chartConfig);
    // }
    // var theNewData = $scope.getData();
    ///////////////////////////////////////////
    // highcharts:

})