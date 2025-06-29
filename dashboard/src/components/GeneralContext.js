import React, { useState, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  isBuyWindowOpen: false,
  selectedStockUID: "",
  isMobile: false,
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Detect screen size change to update `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Open/Close functions
  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid); // Always update the current stock UID
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        isBuyWindowOpen,
        selectedStockUID,
        isMobile,
      }}
    >
      {props.children}

      {/* ✅ Desktop only: Global BuyActionWindow rendering */}
      {!isMobile && isBuyWindowOpen && selectedStockUID && (
        <div style={{ position: "absolute", top: "80px", right: "40px", zIndex: 1000 }}>
          <BuyActionWindow uid={selectedStockUID} />
        </div>
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
