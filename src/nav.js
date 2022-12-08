import slideImg1 from "./img/_01s.png";
import {
    Link,
    Outlet
  } from "react-router-dom";

function Navigation() {
    return (
      <div>
        <img src={slideImg1} className="site-logo" alt="logo" />
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/weather">WEATHER</Link></li>
            <li><Link to="/dashboard">DASHBOARD</Link></li>
            <li><Link to="/notmatch">NOTMACTH</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }

export default Navigation;