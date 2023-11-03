import './navbar.scss'
import { Link } from "react-router-dom";

export default function Navbar() {


  return (
    <>
      <div className="sidebar">
        <ul>
          <Link to={`/`}>
            <li><a href="#">Home</a></li>
          </Link>
          <Link to={`/add`}>
            <li><a href="#">Create Akun</a></li>
          </Link>
          <Link to={`/category`}>
            <li><a href="#">About Us</a></li>
          </Link>
        </ul>
      </div>
    </>
  )
}