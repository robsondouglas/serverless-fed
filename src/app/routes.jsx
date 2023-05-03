import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound      = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin      = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister     = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword  = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));

// task page
const Task = Loadable(lazy(() => import('app/views/schedule/tasks')));
const Photo = Loadable(lazy(() => import('app/views/gallery/photo')));


const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: 'task',
        element: <Task />,
        auth: authRoles.admin
      },
      {
        path: 'album',
        element: <Photo />,
        auth: authRoles.admin
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="task" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
