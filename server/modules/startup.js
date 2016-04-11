let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();

  var trusted = [
        '*.googleapis.com',
        '*.gstatic.com',
        '*.google.com'
    ];
    
    _.each(trusted, function(origin) {
        origin = "https://" + origin;
        BrowserPolicy.content.allowOriginForAll(origin);
    });
};

var _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
