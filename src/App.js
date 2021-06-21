import Header from "./components/Header/index.jsx";
import "./App.css";
import CategoryPC from "./components/Category-PC/index.jsx";
import CategoryMobile from './components/Category-Mobile/index.jsx'
import Member from "./components/Member/index.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryPC />
      <CategoryMobile />
      <Member />
    </div>
  );
}

export default App;
