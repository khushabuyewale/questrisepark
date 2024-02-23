

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
import UpdateDetails from "./components/UpdateDetails";
import Meal from "./components/Meal";
import Pay from "./components/Pay";
import Rides from "./components/Rides";
import Regular from "./components/Regular";
import Group from "./components/Group";
import Student from "./components/Student";



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
      {
        path: "/meal",
        element: <Meal />
      },
      
      {
        path: "/pay",
        element: <Pay/>
      }
      ,
      {
        path: "/regular",
        element: <Regular/>
      },
      {
        path: "/group",
        element: <Group/>
      },
      {
        path: "/student",
        element: <Student/>
      },
      {
        path: "/rides",
        element: <Rides/>
      }

    ]

  },
  {
    path: "/show",
    element: <ShowDetails />
  },
  {
    path: "/add",
    element: <AddDetails />
  },

  {
    path: "/delete",
    element: <DeleteDetails />
  },
  {
    path: "/update",
    element: <UpdateDetails />
  },
]); export default customeRouter;
