import { useState, useEffect } from "react";
import axios from "axios";

export function ChessGame() {
  const [game, setGame] = useState(0);
  const [gameIds, setGameIds] = useState([]);

  const jwt = localStorage.getItem("jwt");
  var jwtDelete = false;

  const handleGameRequest = () => {
    if (jwt) {
      delete axios.defaults.headers.common["Authorization"];
      jwtDelete = true;
    }
    axios
      .get(
        "https://explorer.lichess.ovh/lichess?variant=standard&speeds=rapid,classical&ratings=2600&fen=rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2&recentGames=5"
      )
      .then((response) => {
        var idArray = [];
        response.data.recentGames.map((game) => {
          idArray.push(game.id);
        });
        setGameIds(idArray);
      });
    if (jwtDelete) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    }
  };
  useEffect(handleGameRequest, []);

  return (
    <div>
      <select name="games" id="games" onChange={(event) => setGame(parseInt(event.target.value))}>
        <option value="0">Game 1</option>
        <option value="1">Game 2</option>
        <option value="2">Game 3</option>
        <option value="3">Game 4</option>
      </select>
      <iframe width="600" height="371" src={`https://lichess.org/embed/game/${gameIds[game]}`} frameBorder="0"></iframe>
    </div>
  );
}
