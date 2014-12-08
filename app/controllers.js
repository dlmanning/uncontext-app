export class svgWindow {
	constructor (ds, $scope) {

		ds.on('data', (data) => {
			this.x = 300 * data.a[0];
			this.y = 150 * data.a[1];
			$scope.$apply();
		});

	}
}

svgWindow.$inject = ['dataService', '$scope'];