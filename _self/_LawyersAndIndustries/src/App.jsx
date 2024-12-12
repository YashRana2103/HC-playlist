import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home/Home";
import Industries from "./Industries/Industries";
import Lawyers from "./Lawyers/Lawyers";
import Lawyer_details from "./Lawyers/Lawyer_details";
import Blogs from "./Blogs/Blogs";
import NotFound from "./NotFound/NotFound";
import AddIndustries from "./forms/AddIndustries";
import AddLawyers from "./forms/AddLawyers";
import AddBlogs from "./forms/AddBlogs";
import Forms from "./forms/Forms";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="industries" element={<Industries />} />
      <Route path="lawyers/">
        <Route path="" element={<Lawyers />} />
        <Route path="lawyer_details" element={<Lawyer_details />} />
      </Route>
      <Route path="lawyers/lawyer_details" element={<Lawyer_details />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="forms/">
        <Route path="" element={<Forms />} />
        <Route path="add_industries" element={<AddIndustries />} />
        <Route path="add_lawyers" element={<AddLawyers />} />
        <Route path="add_blogs" element={<AddBlogs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
