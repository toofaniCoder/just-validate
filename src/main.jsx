import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const res = await axios.post(
        'http://localhost:3000/students',
        Object.fromEntries(formData)
      );
      return res;
    },
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
