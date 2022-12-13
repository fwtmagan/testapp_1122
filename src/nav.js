import {
    Link,
    Outlet
  } from "react-router-dom";

function Navigation() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/weather">WEATHER</Link></li>
            <li><Link to="/dashboard">DASHBOARD</Link></li>
            <li><Link to="/alert">ALERT</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }

export default Navigation;