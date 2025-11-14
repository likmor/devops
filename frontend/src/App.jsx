import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router";
import Lab01 from "./pages/Lab01";
import Lab02 from "./pages/Lab02";
import Lab03 from "./pages/Lab03";
import Lab04 from "./pages/Lab04";
import Lab05 from "./pages/Lab05";
import Lab05Details from "./pages/Lab05Details";
import Lab05Comments from "./pages/Lab05Comments";
import Lab04Add from "./pages/Lab04Add";
import Lab04Edit from "./pages/Lab04Edit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppProvider from "./components/AppProvider";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="lab01" element={<Lab01></Lab01>}></Route>
          <Route path="lab02" element={<Lab02 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab03" element={<Lab03 />} />
          <Route path="lab04" element={<Lab04 />} />
          <Route path="lab04/add" element={<Lab04Add />} />
          <Route path="lab04/edit/:id" element={<Lab04Edit />} />
          <Route path="lab05" element={<Lab05 />} />
          <Route path="lab05/users/:id" element={<Lab05Details />} />
          <Route path="lab05/posts/:id/comments" element={<Lab05Comments />} />
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
