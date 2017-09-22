app.controller('FazendaListar', function ($scope, DataService) {
    $scope.fazendas=[];
    DataService.realizarGet('fazenda').then(function (data) {
        console.log(data);
        $scope.fazendas=data.data.mensagem;

    });
});
