import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import Location from "./pages/Location";
import NewBeliever from "./pages/NewBeliever";
import PastorsInfo from "./pages/PastorsInfo";
import Testimony from "./pages/Testimony";
import Events from "./pages/Events";
import Giving from "./pages/Giving";
import Faq from "./pages/Faq";
import Thanksgiving from "./pages/Thanksgiving";
import Programs from "./pages/Programs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        index: true,
        element: <Landing />,
      },
      // {
      //   path: "location",
      //   element: <Location />,
      // },
      {
        path: "newbeliever",
        element: <NewBeliever />,
      },
      { path: "pastors/:id", element: <PastorsInfo /> },
      { path: "testimony", element: <Testimony /> },
      {
        path: "program",
        element: <Programs />,
      },
      { path: "program/:id", element: <Events /> },
      { path: "giving", element: <Giving /> },
      { path: "faq", element: <Faq /> },
      { path: "testimony", element: <Testimony /> },
      { path: "thanksgiving", element: <Thanksgiving /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
