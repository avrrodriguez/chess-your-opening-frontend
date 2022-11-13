import { useState, useEffect } from "react";
import axios from "axios";
import { OpeningIndex } from "./OpeningIndex";
import { Modal } from "./Modal";
import { OpeningShow } from "./OpeningShow";
import { OpeningAdmin } from "./OpeningAdmin";

export function Home() {
  const [openings, setOpenings] = useState([]);
  const [isOpeningVisible, setIsOpeningVisible] = useState(false);
  const [isOpeningAdminVisible, setIsOpeningAdminVisible] = useState(false);
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

  const handleShowOpeningAdmin = () => {
    setIsOpeningAdminVisible(true);
  };

  const handleHideOpeningAdmin = () => {
    setIsOpeningAdminVisible(false);
  };

  useEffect(handleOpeningIndex, []);

  return (
    <div className="container">
      <OpeningIndex
        Openings={openings}
        onSelectOpening={handleShowOpening}
        onSelectOpeningAdmin={handleShowOpeningAdmin}
      />
      <Modal show={isOpeningVisible} onClose={handleHideOpening}>
        <OpeningShow opening={opening} />
      </Modal>
      <Modal show={isOpeningAdminVisible} onClose={handleHideOpeningAdmin}>
        <OpeningAdmin />
      </Modal>
    </div>
  );
}
