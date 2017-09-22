app.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('common', {
            templateUrl: 'app/menu/menu.html',
            abstract: true,
        })

        //Pagina Inicial
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            parent: 'common',
            controller: 'Home',
            controllerAs: 'vm'
        })

        //Animal
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
        .state('animalListar', {
            url: '/animal',
            templateUrl: 'app/animal/AnimalPesquisa.html',
            parent: 'common',
            controller: 'AnimalListar',
            controllerAs: 'vm'
        })

        //Fazenda
        .state('fazendaNovo', {
            url: '/fazenda/novo',
            templateUrl: 'app/fazenda/fazenda.html',
            parent: 'common',
            controller: 'FazendaNovo.js',
            controllerAs: 'vm'
        })
        .state('fazendaEditar', {
            url: '/fazenda/:id',
            templateUrl: 'app/fazenda/fazenda.html',
            parent: 'common',
            controller: 'AnimalEditar',
            controllerAs: 'vm'
        })
        .state('fazendaListar', {
            url: '/fazenda',
            templateUrl: 'app/fazenda/fazendaPesquisa.html',
            parent: 'common',
            controller: 'fazendaListar',
            controllerAs: 'vm'
        })

        //Ciclos de Vida
        .state('cicloVidaNovo', {
            url: '/cicloVida/novo',
            templateUrl: 'app/cicloVida/cicloVida.html',
            parent: 'common',
            controller: 'cicloVidaNovo',
            controllerAs: 'vm'
        })

    $urlRouterProvider.otherwise('/home');


});
