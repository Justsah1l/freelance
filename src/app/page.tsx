import Image from "next/image";
import Navbar from "./components/Navbar";
import styles from '../app/styles/Home.module.css'
import Homepage from "./pages/Homepage";
import Subpage from "./pages/Subpage";
import Peoplepage from "./pages/Peoplepage";
import Millionpage from "./pages/Millionpage";
import Involve from "./pages/Involve";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div>
    <Navbar />
    <div id="homepage">
        <Homepage />
      </div>
      <div id="subpage">
        <Subpage />
      </div>
      <div id="peoplepage">
        <Peoplepage/>
      </div>
      <div id="millionpage">
        <Millionpage />
      </div>
      <div id="involve">
        <Involve/>
        </div>
        <div id="footer">
    <Footer/>
    </div>
  </div>
  );
}
