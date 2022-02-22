import React from "react";
import { TickerTape } from "react-tradingview-embed";

const Ticker = () => {
  // symbols to display in the Ticker Tap
  const symbol = [
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "Rune",
      proName: "BINANCE:RUNEUSDT",
    },
    {
      description: "Shiba",
      proName: "BINANCE:SHIBUSDT",
    },
    {
      description: "Doge",
      proName: "BINGX:DOGEUSDT",
    },
  ];

  return (
    <div className="mx-2">
      <TickerTape
        widgetProps={{
          symbols: symbol,
          colorTheme: "light",
        }}
      />
    </div>
  );
};

export default Ticker;
