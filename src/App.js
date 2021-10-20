import NavBar from "./components/NavBar";
import "./sass/main.scss"
import Image from "./components/Image";
import Services from "./components/Services";
import Lorem from "./components/Lorem";
import Saroy from "./components/Saroy";
import Sanatkorlar from "./components/Sanatkorlar";
import Liboslar from "./components/Liboslar";
import Taklifnomalar from "./components/Taklifnomalar";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavBar/>
      <Image/>
      <Services/>
      <Lorem/>
      <Saroy/>
      <Sanatkorlar/>
      <Liboslar/>
      <Taklifnomalar/>
      <Instagram/>
      <Footer/>
    </>
  );
}

export default App;
