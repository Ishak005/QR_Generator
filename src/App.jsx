import "./App.css";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ishak");
  const [age, setAge] = useState(20);
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");

  const today = Date();

  return (
    <>
      <div className="container">
        <h1>Qr code Generator</h1>
        <div className="input-box">
          <label htmlFor="input">Enter a Name :</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="input">Enter a Age : </label>
          <input
            type="number"
            id="age"
            min={0}
            onChange={(e) => setAge(e.target.value)}
          />
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
          />
        </div>
        <QRCodeSVG
          value={`My name is ${name} and am ${age}years. Am here registering on date ${date} and am saying ${discription}`}
          size="125"
          bgColor="gray"
          level="H"
          marginSize={3}
          values="Home is the best"
          fgColor="black"
        />
        <p>{today}</p>
      </div>
    </>
  );
}

export default App;
