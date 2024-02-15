import { useState } from "react";

function Square(){
  const [value,setValue]=useState("0");
function handleClick(){
  setValue("X");
}

  return <div>
  <button className="square" onClick={handleClick}>{value}</button></div>
}



export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square/>
      </div>
    </>
  );
}
