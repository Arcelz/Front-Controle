app.controller('AnimalListar', function ($scope, DataService) {
    $scope.animais=[];
    DataService.realizarGet('animal').then(function (data) {
        console.log(data);
        $scope.animais=data.data.mensagem;

    });
});
