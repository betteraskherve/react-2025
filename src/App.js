"use client";

import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

function Forex({ value }) {
  return (
    <>
      <h2> EUR_USD forex </h2>
      <input type="text" value={value.toFixed(2)} disabled={true} />
    </>
  );
}

function Eur({ eur, handleOnChange }) {
  return (
    <>
      <h3> EUR ? </h3>
      <input type="text" value={eur} onChange={handleOnChange} />
    </>
  );
}

function Usd({ value }) {
  return (
    <>
      <h3> USD ! </h3>
      <input type="text" value={value.toFixed(2)} disabled={true} />
    </>
  );
}

export default function Cacib() {
  const [forex, setForex] = useState(1.1);
  const [eur, setEur] = useState(1.0);
  const [usd, setUsd] = useState(1.1);

  const handleEurChange = (e) => {
    setEur(e.target.value);
    setUsd(e.target.value * forex);
  };

  const handleForexChange = useCallback(() => {
    setForex(forex + (Math.random() * 0.1 - 0.05));
  }, [forex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleForexChange();
    }, 3000);
    return () => clearInterval(interval);
  }, [handleForexChange]);

  useEffect(() => {
    setUsd(eur * forex);
  }, [eur, forex]);

  return (
    <>
      <h1 className="font-bold text-4x1 mr-4">EUR to USD converter</h1>
      <Forex value={forex} />
      <Eur eur={eur} handleOnChange={handleEurChange} />
      <Usd value={usd} />
    </>
  );
}
