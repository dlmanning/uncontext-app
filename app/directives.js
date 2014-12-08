export function svgContainer () {
  return {
  	restrict: 'E',
  	templateUrl: 'app/templates/svg-container.html',
  	transclude: true
  }
}

test.$inject = ['dataService'];

export function test (ds) {

	class testCtrl {
		constructor ($scope, $element, $attrs) {
			ds.on('data', function (data) {
				$scope.x = data.a[0];
				$scope.y = data.a[1];
				$scope.$apply();
			});
		}
	}

	return {
		restrict: 'E',
		template: '<h1>{{x}}, {{y}}</h1>',
		controller: testCtrl
	}

}