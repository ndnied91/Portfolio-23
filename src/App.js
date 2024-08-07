import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Resume, Contact, Projects, Error } from './pages';
import { loader as getJobsLoader } from './pages/Resume';
import { loader as getProjectsLoader } from './pages/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //main page bc we set it as index: true
        loader: getProjectsLoader,
        element: <Landing />,
      },

      {
        path: 'resume',
        loader: getJobsLoader,
        element: (
          <div className="min-h-[calc(100vh-25vh)]">
            <Resume />
          </div>
        ),
      },
      {
        path: 'projects',
        loader: getProjectsLoader,
        element: <Projects />,
      },
      {
        path: 'contact',
        element: (
          <div className="min-h-[calc(100vh-16vh)]">
            {' '}
            <Contact />{' '}
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  // useEffect(() => {
  //   ReactGA.initialize(process.env.MEASUREMENT_ID, { debug: true });
  // }, []);

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
