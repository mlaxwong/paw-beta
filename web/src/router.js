import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import routes from './containers/_route';

Vue.use(Router);

const router = new Router({
	// hashbang: false,
	base: process.env.PATH_VUE_PUBLIC,
	mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
	const pageTitle = to.meta.title;
	const metaRules = to.meta.rules;
	const rules = metaRules ? metaRules : 'authed';
	const domStore = store.state.dom;
	const authStore = store.state.auth;
	const loggedIn = authStore.user;

	domStore.title = pageTitle ? pageTitle : 'Title';

	const loginPath = '/login';
	const dashboardPath = '/dashboard';

	switch (rules)
	{
		case 'authed': {
			if (!loggedIn) {
				return next({
					path: loginPath,
					query: { redirect: to.fullPath }
				})
			} else {
				return next();
			}
		}
		case 'guest': {
			if (loggedIn) {
				return next({path: dashboardPath})
			} else {
				return next();
			}
		}
		case 'all': {
			return next();
		}
		default: {
			return;
		}
	}
	// next({
	// 	path: '/auth/login',
	// 	query: { redirect: to.fullPath }
	// })
});

export default router;