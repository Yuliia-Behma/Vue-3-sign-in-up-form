import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SignIn },
        { path: '/signup', component: SignUp}
    ]
})
const app = createApp(App)

app.use(router)
app.mount('#app')
