import { useEffect, useReducer, useRef, useState } from "react";
import "./Otp.css";

const Otp = ({ size }) => {
  const [otp, setOtp] = useState(Array(size).fill(""));

  console.log("otp", otp);

  const inputRef = useRef([]);

  console.log("input ref", inputRef.current);

  const eventHandler = (e, index) => {
    console.log("event", e, "- index", index);
    const key = e.key;
    if (isNaN(key)) {
      return;
    }
    const clone = [...otp];
    clone[index] = key;
    if (index + 1 < otp.length) {
      inputRef.current[index + 1].focus();
    }

    setOtp(clone);
  };

  useEffect(() => {
    console.log("aa", inputRef.current[0]);
    inputRef.current[0].focus();
  }, []);
  return (
    <div className="container">
      {otp.map((item, index) => {
        return (
          <input
            key={index}
            className="box"
            type="text"
            onKeyDown={(e) => eventHandler(e, index)}
            value={item}
            ref={(input) => (inputRef.current[index] = input)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
