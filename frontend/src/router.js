import { createRouter,createWebHistory } from 'vue-router'
import Post from '@/components/Post'
import Author from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'


const routes = [
  { path: '/author/:username', component: Author },
  { path: '/post/:slug', component: Post },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: AllPosts },
]


const router = createRouter({
  routes: routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router