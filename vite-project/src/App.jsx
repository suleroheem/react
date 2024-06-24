
import  Home from "./home";
import Contact from "./contacts";
import Service from "./service";
import About from "./about";
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
// ?import Img from "./shared-component/img";
import Header from "./shared-component/header";



function App() {
  return(
  
   <BrowserRouter>
   <Header />
      <Routes>
     {/* <Route path="/" element= {<Img />} /> */}
      {/* <Route path="/" element= {} /> */}
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>

      </Routes>
   </BrowserRouter>
  
  );
}



export default App;