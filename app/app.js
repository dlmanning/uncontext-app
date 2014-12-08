import { dataService } from './services';
import { svgContainer, test } from './directives';
import { svgWindow } from './controllers';

export var app = angular.module('App', []);

app.service('dataService', dataService)
   // .directive('svgContainer', svgContainer)
   // .directive('test', test);
   .controller('svgWindow', svgWindow);

angular.bootstrap(document.getElementById('app'), ['App']);
