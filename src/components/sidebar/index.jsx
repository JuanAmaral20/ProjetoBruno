import "./style.css";

import { sidebarItems } from "../../_contants/sidebar-items";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const location = window.location.pathname;
  const navigate = useNavigate();

  function handleLogOutCLick() {
    navigate("/");
  }

  return (
    <nav className="sidebar">
      <div className="navs">
        {sidebarItems.map(({ icon: MyIcon, title, link }) => (
          <button
            key={link}
            onClick={() => navigate(link)}
            className={`sidebarNav ${location === link && "sidebarSelected"}`}
          >
            <MyIcon />
            {title}
          </button>
        ))}
      </div>

      <button onClick={handleLogOutCLick}>Sair</button>
    </nav>
  );
};
