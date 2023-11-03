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
          <Link to={`/addForm`}>
            <li><a href="#">Create Akun</a></li>
          </Link>
          <Link to={`/work`}>
            <li><a href="/">Work</a></li>
          </Link>
          <Link to={`/family`}>
            <li><a href="/">Family</a></li>
          </Link>
          <Link to={`/personal`}>
            <li><a href="/">Personal</a></li>
          </Link>
        </ul>
      </div>
    </>
  )
}