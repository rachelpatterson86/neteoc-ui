import {hawtioPluginLoader } from 'adminjs-core';


let openLoginForm = function() {
  //$location.path('/Flares/login/login');
  $('#myModal').modal({backdrop: 'static',
  keyboard: false});
  $('#myModal').modal('show');
  $('#myModal').on('hide.bs.modal', function(e) {
      e.preventDefault();
    });

  //poptastic('/auth/google');
  return false;
};


var Flare;
(function (Flare) {
  Flare.pluginName = 'Flare-plugin';
  Flare.templatePath = '';

  Flare._module = angular.module(Flare.pluginName, ['UserPlugin', 'Org', require('angular-resource'), require('angular-route')]);

  Flare.tab = undefined;
  require('./flare.services')(Flare);
  require('./flare.routes')(Flare);
  require('./flare.controllers')(Flare);

  Flare._module.run(['HawtioNav', '$rootScope', '$location', 'Session', function(HawtioNav, $rootScope, $location, Session) {

    $rootScope.$on('event:auth-loginRequired', function() {
      openLoginForm();
      return false;
    });
    Session.get().$promise.then(function(session){

      if (session.status == "approved"){


          HawtioNav.add(Flare.tab);

      }
    });

  }]);


  hawtioPluginLoader.addModule(Flare.pluginName);
})(Flare || (Flare = {}));


module.exports = Flare;
