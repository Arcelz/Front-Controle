angular
    .module('app.core')
    .factory('DataService', DataService);

/* @ngInject */
function DataService($http) {
    var service = {
        realizarGet: realizarGet,
        realizarPost: realizarPost,
        realizarDelete: realizarDelete,
        realizarPut: realizarPut
    };
    const link = 'http://localhost:8888/API/api/';
    return service;

    function realizarGet(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.get(link + caminho, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPost(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.post(link + caminho, data, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarDelete(caminho) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        return $http.delete(link + caminho, config)
            .then(function successCallback(response) {
                    return response;
                }
                , function errorCallback(response) {
                    return response;
                });
    }

    function realizarPut(caminho, data) {
        var config = {
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        };
        if (data !== undefined) {
            return $http.put(link + caminho, data, config)
                .then(function successCallback(response) {
                        return response;
                    }
                    , function errorCallback(response) {
                        return response;
                    });
        }
        else {
            return $http.put(link + caminho, data, config)
                .then(function successCallback(response) {
                        return response;
                    }
                    , function errorCallback(response) {
                        return response;
                    });
        }
    }
}