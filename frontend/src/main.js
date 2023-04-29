import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import apolloClient from './apolloClient';

const app = createApp(App);
apolloClient(app);
// app.use(router);
// app.provide(DefaultApolloClient, apolloClient);
app.mount('#app');
