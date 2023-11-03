import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";
import Navbar from "./component/Navbar";

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App