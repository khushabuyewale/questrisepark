

import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Booking from "./components/Booking";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import SelectPack from "./components/SelectPack";
import Meal from "./components/Meal";
import Pay from "./components/Pay";
import Rides from "./components/Rides";
import Regular from "./components/Regular";
import Group from "./components/Group";
import Student from "./components/Student";

import Admin from "./adminCRUD/Admin";

import AddRides from "./adminCRUD/AddRides";
import DeleteRides from "./adminCRUD/DeleteRides";

import ShowBooking from "./adminCRUD/ShowBooking";
import ShowMeals from "./adminCRUD/ShowMeals";
import ShowRides from "./adminCRUD/ShowRides";
import ShowTickets from "./adminCRUD/ShowTickets";

import UpdateMeals from "./adminCRUD/UpdateMeals";
import UpdateRides from "./adminCRUD/UpdateRides";
import UpdateTickets from "./adminCRUD/UpdateTickets";


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
    path: "/showBooking",
    element: <ShowBooking />,
  },
  {
    path: "/showMeals",
    element: <ShowMeals />,
  },
  {
    path: "/showRides",
    element: <ShowRides />,
  },
  {
    path: "/showTickets",
    element: <ShowTickets />,
  },
  {
    path: "/addRides",
    element: <AddRides />,
  },
  {
    path: "/updateMeals",
    element: <UpdateMeals />,
  },
  {
    path: "/updateRides",
    element: <UpdateRides />,
  },
  {
    path: "/updateTickets",
    element: <UpdateTickets />,
  },
  {
    path: "/deleteRides",
    element: <DeleteRides />,
  },
  
]); export default customeRouter;
