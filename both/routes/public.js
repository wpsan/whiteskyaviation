const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

publicRoutes.route( '/about', {
  name: 'about',
  action() {
    BlazeLayout.render( 'default', { yield: 'about' } );
  }
});

publicRoutes.route( '/vipTransport', {
  name: 'vipTransport',
  action() {
    BlazeLayout.render( 'default', { yield: 'vipTransport' } );
  }
});

publicRoutes.route( '/aircraftManagement', {
  name: 'aircraftManagement',
  action() {
    BlazeLayout.render( 'default', { yield: 'aircraftManagement' } );
  }
});

publicRoutes.route( '/aerialSurvey', {
  name: 'aerialSurvey',
  action() {
    BlazeLayout.render( 'default', { yield: 'aerialSurvey' } );
  }
});

publicRoutes.route( '/medevac', {
  name: 'medevac',
  action() {
    BlazeLayout.render( 'default', { yield: 'medevac' } );
  }
});

publicRoutes.route( '/luxuryLeisure', {
  name: 'luxuryLeisure',
  action() {
    BlazeLayout.render( 'default', { yield: 'luxuryLeisure' } );
  }
});

publicRoutes.route( '/specialEvents', {
  name: 'specialEvents',
  action() {
    BlazeLayout.render( 'default', { yield: 'specialEvents' } );
  }
});

publicRoutes.route( '/groundSupport', {
  name: 'groundSupport',
  action() {
    BlazeLayout.render( 'default', { yield: 'groundSupport' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});
