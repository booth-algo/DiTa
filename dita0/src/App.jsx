import { BrowserRouter } from "react-router-dom";
import { About, Services, Booking, Hero, Navbar, StarsCanvas, Footer} from'./components';


const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className="bg-setbg bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <div className="relative z-0">
          <Booking />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
