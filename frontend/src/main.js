import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createApollo} from './vue-apollo'

const app = createApp(App);

app.config.productionTip = false;

app.use(router);
app.provide('apollo', createApollo({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEndpoint: null,
  }));
app.mount('#app');