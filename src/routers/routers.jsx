import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import AddAcount from "../pages/AddAcount"
import Category from "../pages/Category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/password/:id",
    element: <Detail />,
  },
  {
    path: "/add",
    element: <AddAcount />,
  },
  {
    path: "/work",
    element: <Category category="work"/>,
  },
  {
    path: "/family",
    element: <Category category="family"/>,
  },
  {
    path: "/personal",
    element: <Category category="personal"/>,
  },
]);

export default router;