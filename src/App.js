import "./App.css";
import PictureContainer from "./components/PicturesContainer/index";
import Navbar from "./components/Navbar/index";
import Sidebar from "./components/Sidebar/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <PictureContainer />
    </div>
  );
}

export default App;
