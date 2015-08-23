function TodoCtrl($scope) {
	var vm = this;

	$scope.newItem = "";
	$scope.todoList = [];

	$scope.addItem = function () {
		var vm = this;		
		if ( vm.newItem ) {
			vm.todoList.push({ label: vm.newItem,
												 isFinish: false });
			vm.newItem = "";
		}
	}

	$scope.removeItem = function (item) {
		item.isFinish = true;
	}

	$scope.edit = function (item) {
		item.editing = true;
	}

	$scope.save = function (item) {
		delete item.editing;
	}
}