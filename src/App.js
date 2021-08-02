import "./App.css";
import GlobalStyle from "./globalStyles";
import { containerLand } from "./globalStyles";
import { Navbar, Landing,Aboutme ,PortF} from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
            <Landing />
            <Navbar />
            <PortF />
            <Aboutme />
         
    </div>
  );
}

export default App;
