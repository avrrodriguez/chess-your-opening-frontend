import { useState, useEffect } from "react";
import axios from "axios";
import { OpeningIndex } from "./OpeningIndex";
import { Modal } from "./Modal";
import { OpeningShow } from "./OpeningShow";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [openings, setOpenings] = useState([]);
  const [isOpeningVisible, setIsOpeningVisible] = useState(false);
  const [opening, setOpening] = useState({});

  const handleOpeningIndex = () => {
    axios.get("http://localhost:3000/openings.json").then((response) => {
      console.log(response.data);
      setOpenings(response.data);
    });
  };

  const handleShowOpening = (opening) => {
    setOpening(opening);
    setIsOpeningVisible(true);
  };

  const handleHideOpening = () => {
    setIsOpeningVisible(false);
  };

  useEffect(handleOpeningIndex, []);

  return (
    <div className="container">
      <LogoutLink />
      <OpeningIndex Openings={openings} onSelectOpening={handleShowOpening} />
      <Modal show={isOpeningVisible} onClose={handleHideOpening}>
        <OpeningShow opening={opening} />
      </Modal>
    </div>
  );
}
