import React from "react";
import { shortAddress } from "../../web3/helpers";

const LockRecord = () => {
  // const []
  const time = ["00", "23", "20", "40"];
  return (
    <div className="my-6">
      {" "}
      <p className=" text-lg font-semibold mt-10 mb-5 text-center">Unlock In</p>
      <div className="grid grid-flow-col gap-2 justify-center">
        {time.map((val, i) => (
          <div
            key={i}
            className="h-10 w-10 bg-gray-700 grid place-content-center"
          >
            {val}
          </div>
        ))}
      </div>
      <div className="mb-6 md:px-10 mt-6">
        <p className=" text-lg font-semibold mb-6">Token Info</p>
        <div className="grid grid-cols-1 gap-2">
          <div className="list-item">
            <p>Token Address</p>
            <p>{shortAddress("0xed67d371121d9a17fd5a19f52ee7255b89639d12")}</p>
          </div>{" "}
          <div className="list-item">
            <p>Token Name</p>
            <p>1bn</p>
          </div>{" "}
          <div className="list-item">
            <p>Token Symbol</p>
            <p>1BN</p>
          </div>{" "}
          <div className="list-item">
            <p>Token Decimals</p>
            <p>18</p>
          </div>
        </div>
      </div>
      <div className="mb-6 md:px-10 mt-10">
        <p className=" text-lg font-semibold mb-6">Lock info</p>
        <div className="grid grid-cols-1 gap-2">
          <div className="list-item">
            <p>Total Amount Locked</p>
            <p>100,000 1bn</p>
          </div>{" "}
          <div className="list-item">
            <p>Total Values Locked</p>
            <p>$2,981</p>
          </div>{" "}
          <div className="list-item">
            <p>Owner</p>
            <p>{shortAddress("0xed67d371121d9a17fd5a19f52ee7255b89639d12")}</p>
          </div>{" "}
          <div className="list-item">
            <p>Lock Date</p>
            <p>2023.02.15 09:25 UTC</p>
          </div>{" "}
          <div className="list-item">
            <p>Unlock Date</p>
            <p>2023.02.16 10:25 UTC (in a day)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockRecord;
