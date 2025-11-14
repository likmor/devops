import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%", alignContent: "center" }}>
      <NavBarMenuApp />
      <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
        <Outlet />
      </div>
      <FooterApp />
    </div>
  );
}

export default RootLayout;
