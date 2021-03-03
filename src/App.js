import Carousel from "./components/Carousel"
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { VIDEOS } from "./data/CarouselData";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' render={(props)=><Content {...props}/>}/>
        {/* <Content/> */}
      </div>
   </BrowserRouter>
  );
}

export default App;
