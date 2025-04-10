import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout"
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
