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
			return $http({
				method: "POST",
				url: "/api/info",
				data: {
					num1: info.num1,
					num2: info.num2,
					num3: info.num3,
					num4: info.num4,
					num5: info.num5,
					num6: info.num6,
					num7: info.num7,
					num8: info.num8,
					num9: info.num9,
					num10: info.num10,
					num11: info.num11,
					num12: info.num12
				}
			})
		},
		getAllInfo: function() {
			var defer = $q.defer();
			$http({
				method: "GET",
				url: "/api/info"
			}).then(function(res) {//putting the object's property's values into an array
				var dataArr = [];
				var lastObject = res.data.pop();
				for(var prop in lastObject) {
					dataArr.push(lastObject[prop]);
				}
				console.log("factory res", dataArr);
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