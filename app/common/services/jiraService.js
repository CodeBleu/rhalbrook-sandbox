var services;
(function (services) {
    var JiraDataAccessService = (function () {
        function JiraDataAccessService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.$httpService = $http;
        }
        JiraDataAccessService.prototype.getEpics = function () {
            //console.log("Inside getEpics");
            var deferred = this.$q.defer();
            this.$httpService.get("http://localhost:3000/cors_proxy?url=https://consolo.atlassian.net/rest/agile/latest/board/11/epic?done=false")
                .then(function (response) {
                deferred.resolve(response.data['values']);
            }).catch(function (reason) {
                deferred.reject(reason);
            });
            //console.log("Leaving getEpics");
            return deferred.promise;
        };
        JiraDataAccessService.prototype.getIssues = function (epicId) {
            //console.log("Inside getIssues");
            var deferred = this.$q.defer();
            this.$httpService.get("http://localhost:3000/cors_proxy?url=https://consolo.atlassian.net/rest/agile/latest/board/11/epic/" + epicId + "/issue?maxResults=10000")
                .then(function (response) {
                deferred.resolve(response.data['issues']);
            }).catch(function (reason) {
                deferred.reject(reason);
            });
            //console.log("Leaving getIssues");
            return deferred.promise;
        };
        JiraDataAccessService.prototype.getSprints = function () {
            //console.log("Inside getSprints");
            var deferred = this.$q.defer();
            this.$httpService.get("http://localhost:3000/cors_proxy?url=https://consolo.atlassian.net/rest/agile/latest/board/11/sprint")
                .then(function (response) {
                deferred.resolve(response.data['values']);
            }).catch(function (reason) {
                deferred.reject(reason);
            });
            //console.log("Leaving getSprints");
            return deferred.promise;
        };
        return JiraDataAccessService;
    })();
    services.JiraDataAccessService = JiraDataAccessService;
})(services || (services = {}));
