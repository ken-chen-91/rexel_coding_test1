import Header from "./components/Header/index.jsx";
import "./App.css";
import CategoryPC from "./components/Category-PC/index.jsx";
import CategoryMobile from "./components/Category-Mobile/index.jsx";
import Member from "./components/Member/index.jsx";
import Deal from "./components/Deal/index.jsx";
import Recent from "./components/Recent/index.jsx";
import OtherInfo from './components/OtherInfo/index.jsx'
import Download from './components/DownloadApp/index.jsx'
import Contact from './components/Contact/index.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryPC />
      <CategoryMobile />
      <div className="bottom">
        <div className="rearrange">
          <Deal />
          <Member />
          <Recent />
        </div>
        <OtherInfo />
        <Download />
      </div>
      <Contact />
    </div>
  );
}

export default App;
