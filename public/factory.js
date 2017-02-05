app.factory('myFactory', function($http, $q) {
	return {
		whatsUp: "Charts",
		heyHey: function() {
			return this.whatsUp;
		},
		myObject: {
		 	ray: {
		 		k: "Kal-El",
		 		a: "Anjel",
		 		j: "Joel"
		 	}
		},
		numArr: [13,23,324,43,50,62,71,84,92,100,110,120],
		postInfo: function(info) {
			var tempArr = [];

			for(var i = 1; i <=12; i++) {
				tempArr.push(info['num' + i]);
			}
			return $http({
				method: "POST",
				url: "/api/info",
				data: tempArr
			}).then(function(res) {
				return res.data;
			})
		},
		getAllInfo: function() {
			var defer = $q.defer();
			$http({
				method: "GET",
				url: "/api/info"
			}).then(function(res) {//putting the object's property's values into an array
				var dataArr = res.data.data;
				defer.resolve(dataArr);
			})
			return defer.promise;
		},
		deleteInfo: function(infoId) {
			$http({
				method: "DELETE",
				url: "/api/info" + infoId
			}).then(function(res) {
				console.log(res);
			})
		}
	};
});