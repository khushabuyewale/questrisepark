import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function App(){
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}



// const App = () => {
//   return (
//     <Router>
//       <Route path="/" exact component={Home} />
//       {/* Add routes for individual package pages */}
//       <Route path="/packages/children" component={() => <div>Children Package</div>} />
//       <Route path="/packages/adult" component={() => <div>Adult Package</div>} />
//       <Route path="/packages/family" component={() => <div>Family Package</div>} />
//       <Route path="/packages/friends" component={() => <div>Friends Package</div>} />
//     </Router>
//   );
// };

// export default App;