var Django = Ember.Application.create({
	ApplicationController: Ember.Controller.extend(),
	ApplicationView: Ember.View.extend({
		classNames: ['dashboard'],
		templateName: 'application'
	}),

	Router: Ember.Router.extend({
		root: Ember.Route.extend({
			index: Ember.Route.extend({
				route: '/',
				connectOutlets: function(router, event) {
					// router.get('applicationController').connectOutlet('home');
					console.log('Dashboard');
				}
			}),
			auth: Ember.Route.extend({
				route: '/auth/',
				connectOutlets: function(router, event) {
					// router.get('applicationController').connectOutlet('home');
					console.log('Auth');
				}
			}),
			sites: Ember.Route.extend({
				route: '/sites/',
				connectOutlets: function(router, event) {
					// router.get('applicationController').connectOutlet('home');
					console.log('Sites');
				}
			}),
		})
	}),
});
Django.initialize();
