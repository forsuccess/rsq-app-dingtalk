import Vue from 'vue';
import VueResource from 'vue-resource';

import todo from './todo';
import system from './system';
import kanban from './kanban';
import plan from './plan';
import appAuth from './appAuth';
import doc from './doc';

Vue.use(VueResource);

// Vue.http设置的太恶心。。。不启用root配置
// 恶心链接：http://stackoverflow.com/questions/34945562/vue-resource-root-options-not-used
Vue.http.options.root = rsqConfig.apiServer;

export default {
	todo,
	system,
	kanban,
	plan,
	appAuth,
	doc
}
