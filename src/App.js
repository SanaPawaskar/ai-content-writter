import {BrowserRouter,Route,Routes} from "react-router-dom"
import Blog from "./components/pages/Blog"
import Content_Calendar from "./components/pages/Content_Calendar"
import ADsContent from "./components/pages/ADscontent"
import Startpage from "./components/Startpage/Startpage";
import Homepage from "./components/Startpage/Homepage"
import Productdis from "./components/pages/Productdis"
import Emailadd from "./components/pages/Emailadd"
import SEOdis from "./components/pages/SEOdis"
import Vidoscript from "./components/pages/Shortdescription"
import SEOmeta from "./components/pages/SEOmeta"
import Look from "./components/pages/Look";
import Imagecreation from "./components/pages/Imagecreation"

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={<Startpage/>}/>
      <Route path="/home" element={<Homepage/>}/>
                <Route path="/blogs" element={<Blog/>}/>
               
                <Route path="/contentcalendar" element={<Content_Calendar/>}/>
                <Route path="/adscontent" element={<ADsContent/>}/>
                <Route path="/searchcontent" element={<Look/>}/>
                <Route path="/productdescription" element={<Productdis/>}/>
                <Route path="/email" element={<Emailadd/>}/>
                <Route path="/seodescription" element={<SEOdis/>}/>
                <Route path="/seometatitle" element={<SEOmeta/>}/>
                <Route path="/shortdescription" element={<Vidoscript/>}/>
                <Route path="/imagecreation" element={<Imagecreation/>}/>
               
      </Route>
    </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
