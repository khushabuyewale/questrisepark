

import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Booking from "./components/Booking";
import Admin from "./components/Admin";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import SelectPack from "./components/SelectPack";
import ShowDetails from "./components/ShowDetails";
import AddDetails from "./components/AddDetails";
import DeleteDetails from "./components/DeleteDetails";

const customeRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/booking",
        element: <Booking />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/selectPack",
        element: <SelectPack />
      },

    ]

  },
  {
    path: "/showDetails",
    element: <ShowDetails />
  },
  {
    path: "/addDetails",
    element: <AddDetails />
  },

  {
    path: "/deleteDetails",
    element: <DeleteDetails />
  },
]); export default customeRouter;
