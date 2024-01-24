import {Routes,Route ,Navigate,Link} from "react-router-dom"
import './App.css';
import DisplayAll from "./components/DisplayAll";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center mt-5 gap-4"><Link className="text-decoration-none"> <h5 className="text-primary ">Manage Players</h5></Link>|<Link className="text-decoration-none"><h5 className="text-primary text-decoration-none">Manage Player Status</h5></Link></div>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" />}/>
        <Route path="/players/list" element={<DisplayAll/>}/>
      </Routes>
    </div>
  );
}

export default App;
