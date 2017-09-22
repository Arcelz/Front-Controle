app.controller('AnimalListar', function ($scope, $rootScope, DataService) {
    $scope.animais = [];
    $scope.paginas = [{}];
    for (var i = 0; i < 5; i++) {
        $scope.paginas[i] = {
            numero: i
        };
    }
    var inc = 0;
    var tamanho = 4;
    var indexRemover;
    var pesquisa = "";
    var certa = false;
    $scope.salvar = function () {
        if ($scope.form.nome !== undefined) {
            pesquisa += "nomeAnimal/" + $scope.form.nome;
            DataService.realizarGet('animal/' + pesquisa).then(function (data) {
                if (data.data.codigo === 400) {
                    console.log(data.data.mensagem);
                } else {
                    certa = true;
                    $scope.animais = data.data.mensagem;
                }
            });
        }
    }
    $scope.paginar = function (id) {
        var string = "animal"
        if (pesquisa !== "" && certa === true) {
            string += pesquisa;
        }
        if (id !== 0) {
            string += "/limite/" + id * 10;
        }
        DataService.realizarGet(string).then(function (data) {
            if (tamanho + inc === id) {
                inc++;
                for (var i = 0; i < 5; i++) {
                    $scope.paginas[i] = {
                        numero: i + inc
                    };
                }
            }
            else if (inc === id) {
                if (inc !== 0) {
                    inc--;
                    for (var i = 0; i < 5; i++) {
                        $scope.paginas[i] = {
                            numero: inc + i
                        };
                    }
                }
            }
            $scope.animais = data.data.mensagem;
        });
    }

    DataService.realizarGet('animal').then(function (data) {
        $scope.animais = data.data.mensagem;
    });
    $scope.exibirModal = function (id, index) {
        indexRemover = index;
        $scope.modulo = 'ANIMAL'
        $scope.modulo_nome = id.nomeAnimal;
        $rootScope.idModalExclusao = id.idAnimal;
        angular.element('#modal_excluir').modal();
    };
    $scope.modalExcluir = function () {
        DataService.realizarDelete('animal/idAnimal/' + $rootScope.idModalExclusao).then(function (data) {
            $scope.animais.splice(indexRemover, 1);
            angular.element('#modal_excluir').modal('toggle');
        });

    };
});
