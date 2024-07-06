import { Flowbite } from "flowbite-react";
import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import lightTheme from "./themes";
import Home from "./screens/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <Flowbite theme={{theme: lightTheme}}>
      <div className="font-mrgvlovani">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    </Flowbite>
  );
}

export default App;
