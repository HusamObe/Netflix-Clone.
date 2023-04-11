import "./App.css";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList/FavList";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/favRecipes' element={<FavRecipes />} />
            </Routes>
        </>
    );
}

export default App;