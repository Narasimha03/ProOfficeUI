
angular.module('office_erp', ['ui.router', '720kb.datepicker', 'ngDialog'])
  .run(function ($rootScope, $state) {
    $rootScope.loginPage = false;
    // $rootScope.role = 'teacher';
    // $rootScope.role = 'parent';
    // if($rootScope.role){

    // }

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

      var requireLogin = toState.data.requireLogin;
      if (requireLogin != null) {

        return $state.go("main.client");
      }

    });
  });


