import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootElementForApp from "./RootElementForApp";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Experience from "./pages/Experience";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElementForApp />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        
        

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
