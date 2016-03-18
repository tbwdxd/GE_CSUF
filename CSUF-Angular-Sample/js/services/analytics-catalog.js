myApp.factory('catalogservice', ['$http',function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    return $http({
        method: 'GET',
        url: 'https://predix-analytics-catalog-release.run.aws-usw02-pr.ice.predix.io/api/v1/catalog/analytics',
        headers: {'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhOTcyMTRhZC1iYzQ3LTRmZDgtOGY4Ni01MWM5NmFjYWI2NjkiLCJzdWIiOiJhZG1pbiIsInNjb3BlIjpbImNsaWVudHMucmVhZCIsImFuYWx5dGljcy56b25lcy44MTAwNjI1OC0xOGI2LTQ1YWEtOTc1Yi05NTZhOTFlYWRiMmIudXNlciIsImFuYWx5dGljcy56b25lcy5iNTE3OGI3ZC1lODg1LTQ0ODAtYmRkOS03M2QxYTY2ZjdmOTQudXNlciIsImNsaWVudHMuc2VjcmV0IiwiaWRwcy53cml0ZSIsInVhYS5yZXNvdXJjZSIsImFuYWx5dGljcy56b25lcy4xMmY2MDQ0OS1lOWM5LTQ2MTEtODk2ZS05ZjdlN2Y0ZTM2MGYudXNlciIsImNsaWVudHMuYWRtaW4iLCJhbmFseXRpY3Muem9uZXMuYjQ4ZWVmYzEtZDE4Yi00YTM1LWJjNmEtYTFlZTc4ODczZWI3LnVzZXIiLCJzY2ltLnJlYWQiLCJhbmFseXRpY3Muem9uZXMuOTUxZmRjMjItOGI5OC00NzRhLThhYWEtMjQ0Y2ExM2QwODY3LnVzZXIiLCJjbGllbnRzLndyaXRlIiwiem9uZXMuYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwLmFkbWluIiwiaWRwcy5yZWFkIiwic2NpbS53cml0ZSJdLCJjbGllbnRfaWQiOiJhZG1pbiIsImNpZCI6ImFkbWluIiwiYXpwIjoiYWRtaW4iLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjhjNmM0M2RiIiwiaWF0IjoxNDU4MzM3MTA5LCJleHAiOjE0NTgzODAzMDksImlzcyI6Imh0dHBzOi8vYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwLnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiYmMwMjY1NTEtNzZhZC00OWM5LWEyYjUtNjY0ZTVjYzZlMWMwIiwiYXVkIjpbImFkbWluIiwiY2xpZW50cyIsImFuYWx5dGljcy56b25lcy44MTAwNjI1OC0xOGI2LTQ1YWEtOTc1Yi05NTZhOTFlYWRiMmIiLCJhbmFseXRpY3Muem9uZXMuYjUxNzhiN2QtZTg4NS00NDgwLWJkZDktNzNkMWE2NmY3Zjk0IiwiaWRwcyIsInVhYSIsImFuYWx5dGljcy56b25lcy4xMmY2MDQ0OS1lOWM5LTQ2MTEtODk2ZS05ZjdlN2Y0ZTM2MGYiLCJhbmFseXRpY3Muem9uZXMuYjQ4ZWVmYzEtZDE4Yi00YTM1LWJjNmEtYTFlZTc4ODczZWI3Iiwic2NpbSIsImFuYWx5dGljcy56b25lcy45NTFmZGMyMi04Yjk4LTQ3NGEtOGFhYS0yNDRjYTEzZDA4NjciLCJ6b25lcy5iYzAyNjU1MS03NmFkLTQ5YzktYTJiNS02NjRlNWNjNmUxYzAiXX0.i4Ax11Q-JFYT123Fm_9aKAyOk7SmSF2rnTlLDVV1pLTd0SgoUEPtOrJIlk9-U3C_BObbPbDb75Pr-KDsOijTguiHgU5Zg6UZwzqFPYYgKjnG1SbCE4AKXTRNX8_onHzUVfn66eQyzxZAZS8_sJSu3GQsVbPe-DjTJhUMiOHyAGi_8I9DdVlVacQgMo6IsFi0IxTQCkK2twYudBM2_2q6N-wcggTzJW3Piokw307872hYzzG4XzYFLlfq6-YiJ1P5W0CI7htuSKR4E6xoAUdE-ihZ09oCt07VY_J1CSksl72QXHAUIYLaNQWWx18u4PTZfdbQMk0BlOg_EZUYohwnRA',
                  'Content-Type': 'application/json',
                  'Predix-Zone-Id': 'b5178b7d-e885-4480-bdd9-73d1a66f7f94'
                 }})
    .success(function(data) {
        return data;
    })
    .error(function(err) {
        return err;
    })
        
    }]);