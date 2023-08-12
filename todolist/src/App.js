import Todolist from "./component/todolist/Todolist";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Seachdate from "./component/searchData/Seachdata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/state" element={<Todolist />}></Route>
          <Route path="/data" element={<Seachdate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
