import { useState, useEffect } from "react";
import axios from "axios";

export function ChessGame(props) {
  const [game, setGame] = useState(0);
  const [gameIds, setGameIds] = useState([]);

  const gameFenDict = {
    "Queen's Gambit": "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    "Italian Game": "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "Four Knights Game": "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
    "Sicilian Defense": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
  };

  const jwt = localStorage.getItem("jwt");
  var jwtDelete = false;

  const handleGameRequest = () => {
    if (jwt) {
      delete axios.defaults.headers.common["Authorization"];
      jwtDelete = true;
    }

    axios
      .get(
        `https://explorer.lichess.ovh/lichess?variant=standard&speeds=rapid,classical&ratings=2600&fen=${
          gameFenDict[props.openingName]
        }&recentGames=5`
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
