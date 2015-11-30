angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope,$state){
	$scope.lesen = function(){
		$state.go('menu.eLesen');
	}

	$scope.kompaun = function(){
		$state.go('menu.eKompaun');
	}

	$scope.bayar = function(){
		$state.go('menu.eBayar');
	}

	$scope.aduan = function(){
		$state.go('menu.eAduan');
	}
})