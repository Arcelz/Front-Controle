app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('common', {
            templateUrl: 'app/menu/menu.html',
            abstract: true,
        })
        .state('animalNovo', {
            url: '/animal/novo',
            templateUrl: 'app/animal/Animal.html',
            parent: 'common',
            controller: 'AnimalNovo',
            controllerAs: 'vm'
        })
        .state('animalEditar', {
            url:'/animal/:id',
            templateUrl: 'app/animal/Animal.html',
            parent: 'common',
            controller: 'AnimalEditar',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/animal/novo');


});
