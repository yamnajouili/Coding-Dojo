import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = () => {
    const [players, setPlayers] = useState([]);


    // ================useffect==============
    useEffect(() => {
        axios
          .get("http://localhost:8000/api/players")
          .then((allplayers) => setPlayers(allplayers.data))
          .catch((err) => console.log(err));
      }, []);
    //  ============Delete=============
          // delete =========================
  const onDeletePlayer = (id) => {
    axios
      .delete(`http://localhost:8000/api/players/${id}`)
      .then((res) => {
        console.log(res);
        const filteredPlayers = players.filter((player) => {
          return player._id !== id;
        });
        setPlayers(filteredPlayers);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="border mt-4 w-75 m-auto">
        <Link className="text-info">List</Link>|<Link className="text-info">Add Player</Link>
<table className="table table-hover w-75 m-auto mt-3 mb-3">
  <thead>
    <tr>
      <th scope="col">Team Name</th>
      <th scope="col">Prefered Position</th>
      <th scope="col">Actions </th>
      
    </tr>
  </thead>
  <tbody>
  {players.map((onep)=>{
        return (
            <tr className="table-active">
      
      <td>{onep.name}</td>
      <td>{onep.position}</td>
      <td>
      <button type="button" className="btn btn-danger  " onClick={()=>{onDeletePlayer(onep._id)}} >Delete</button>
 </td>
      
    </tr>
        )
      })}
    
  </tbody>
</table>
    </div>
  )
}

export default DisplayAll