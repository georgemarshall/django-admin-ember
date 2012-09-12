var APPS = [{
	'app_url': '/admin/auth/',
	'has_module_perms': true,
	'models': [{
		'add_url': '/admin/auth/group/add/',
		'admin_url': '/admin/auth/group/',
		'name': 'Groups',
		'perms': {'add': true, 'change': true, 'delete': true}
	}, {
		'add_url': '/admin/auth/user/add/',
		'admin_url': '/admin/auth/user/',
		'name': 'Users',
		'perms': {'add': true, 'change': true, 'delete': true}
	}],
	'name': 'Auth'
}, {
	'app_url': '/admin/sites/',
	'has_module_perms': true,
	'models': [{
		'add_url': '/admin/sites/site/add/',
		'admin_url': '/admin/sites/site/',
		'name': 'Sites',
		'perms': {'add': true, 'change': true, 'delete': true}
	}],
 		'name': 'Sites'
}];

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
			logout: Ember.Route.extend({
				route: '/logout',
				connectOutlets: function(router, event) {
					console.log('Logout');
				}
			}),
			password_change: Ember.Route.extend({
				route: '/password_change',
				connectOutlets: function(router, event) {
					console.log('Password Change');
				}
			}),
			app_list: Ember.Route.extend({
				route: '/:app_label',

				index: Ember.Route.extend({
					route: '/',
					connectOutlets: function(router, event) {
						console.log('Application List');
					}
				}),
				app: Ember.Route.extend({
					route: '/:module_name',
					connectOutlets: function(router, event) {
						console.log('Application');
					}
				}),
			}),
			/*
			view_on_site: Ember.Route.extend({
				route: '/:content_type_id/:object_id/',
				connectOutlets: function(router, event) {
					console.log('View on Site');
				}
			}),
			*/

			// Sample model routes
			auth: Ember.Route.extend({
				route: '/auth/',
				connectOutlets: function(router, event) {
					console.log('Auth');
				}
			}),
			sites: Ember.Route.extend({
				route: '/sites/',
				connectOutlets: function(router, event) {
					console.log('Sites');
				}
			}),
		})
	}),
});
Django.initialize();
