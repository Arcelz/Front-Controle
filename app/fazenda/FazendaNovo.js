app.controller('FazendaNovo', function ($scope, $state,$sce, $rootScope, DataService) {
    $scope.salvar = function () {
        if ($scope.formulario.$valid) {
            DataService.realizarPost('fazenda', $scope.form).then(function (data) {
                console.log(data);
            });
        }
    }
});