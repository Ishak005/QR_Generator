import "./App.css";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");

  const data = {
    name,
    age,
    date,
    discription,
  };
  return (
    <>
      <div className="container">
        <h1>Qr code Generator</h1>
        <label htmlFor="input">Enter a Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="input">Enter a Age</label>
        <input
          type="text"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="date">Date : </label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <label htmlFor="dis">About me : </label>
        <input
          type="text"
          id="dis"
          onChange={(e) => setDiscription(e.target.value)}
        />{" "}
        <br />
        <p>{`My name is ${name} and am ${age}years. Am here registering on date ${date} and am saying ${discription}`}</p>
        <QRCodeSVG
          value={data}
          size="125"
          bgColor="gray"
          level="H"
          marginSize={3}
          values="Home is the best"
          fgColor="black"
        />
        
      </div>
    </>
  );
}

export default App;
