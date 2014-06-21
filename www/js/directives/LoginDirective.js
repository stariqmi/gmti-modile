app.directive('login', function($http) {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: '../../templates/directives/login.html',
		link: function(scope, element, attrs) {
			scope.authenticate = function() {
				$http.get('http://localhost:3000/driver/all')
				.then(function(result) {
					alert(result.data);
				})
			}
		}
	}	
})