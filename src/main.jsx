import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Root/Home/Home.jsx';
import Mobiles from './components/Root/Mobiles/Mobiles.jsx';
import Laptops from './components/Root/Laptops/Laptops.jsx';
import Users from './components/Root/Users/Users.jsx';
import Users2 from './components/Root/Users2/Users2.jsx';
import UserDetails from './components/Root/UserDetails/UserDetails.jsx';
import Posts from './components/Root/Posts/Posts.jsx';
import PostDetails from './components/Root/PostDetails/PostDetails.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
    {index: true, Component: Home},
    {path: 'mobiles', Component: Mobiles},
    {path: 'laptops', Component: Laptops},
    {
      path: 'users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
       Component: Users
    },
    {path: 'users2', 
      element: <Suspense fallback={<div>Loading...</div>}>
        <Users2 usersPromise={usersPromise} />
      </Suspense>,
    },
    {
      path: 'users/:userId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      Component: UserDetails 
     
    },
    {
      path: 'posts',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      Component: Posts
    },
    {
      path: 'posts/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component: PostDetails
    }
    ]
  },
  {
    path: '/home',
    Component: App 
  },
  {
    path: '/about',
    element: <div>
      <h1>I am the about page</h1>
      <Link to="/">Go to home</Link>
    </div>,
  },
  {
    path: '*',
    element: <h3>not found (status : 404)</h3>

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  
  </StrictMode>,
)
