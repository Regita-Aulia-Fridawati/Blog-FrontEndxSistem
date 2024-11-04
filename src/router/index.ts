import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PrivaciPolicyView from '../views/PrivacyPolicyView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import AuthorView from '@/views/AuthorView.vue'
import ContactView from '@/views/ContactView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AboutUsView from '@/views/AboutUsView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog', 
      name: 'Blog',
      component: BlogView,
    },
    {
      path: '/privacipolicy', 
      name: 'PrivaciPolicy',
      component: PrivaciPolicyView,
    },
    {
      path: '/blogpost', 
      name: 'BlogPost',
      component: BlogPostView,
    },
    {
      path: '/abotus', 
      name: 'AboutUs',
      component: AboutUsView,
    },
    {
      path: '/author', 
      name: 'Author',
      component: AuthorView,
    },
    {
      path: '/category', 
      name: 'Category',
      component: CategoryView,
    },
    {
      path: '/contact', 
      name: 'Contact',
      component: ContactView,
    },
  ],
})

export default router
