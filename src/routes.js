import Home from './Components/HomePage.vue';
import PostPage from './Components/Posts.vue';
import PostCreationPage from './Components/PostCreationPage/PostCreation.vue';

export const routes = [
	{path: '/', component: Home},
	{path: '/postpage/:postId', component: PostPage},
	{path: '/postcreationpage', component: PostCreationPage}
];