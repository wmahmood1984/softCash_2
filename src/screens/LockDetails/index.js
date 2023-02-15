import React from "react";
import { Link } from "react-router-dom";
import { shortAddress } from "../../web3/helpers";

const LockDetails = () => {
  const tableHead = [
    "Wallet",
    "Amount",
    "Cycle(d)",
    "Cycle Release(%)",
    "TGE(%)",
    "Unlock time(UTC)",
    "",
  ];
  const lockList = [
    {
      wallet: "0xaAa3699D2ac1551DA0030f8286E30cA7002fB5C9",
      amount: "100",
      cycle: "_",
      cycleRealese: "_",
      tge: "_",
      unlock: "2023.02.16 10:25",
    },
  ];
  return (
    <div className="my-6">
      <div className="mb-6 md:px-10">
        <p className=" text-lg font-semibold mb-6">Lock Info</p>
        <div className="grid grid-cols-1 gap-2">
          <div className="list-item">
            <p>Current Locked Amount</p>
            <p>100,000 1BN</p>
          </div>{" "}
          <div className="list-item">
            <p>Current Values Locked</p>
            <p>$2,981</p>
          </div>{" "}
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
      <div className="mb-6 md:px-10">
        <p className=" text-lg font-semibold mb-6">Lock records</p>
        <div className=" overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                {tableHead.map((val, i) => (
                  <th key={i} className={`${"text-left"} text-sm`}>
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lockList.map((token, index) => (
                <tr key={index} className=" border-b dark:border-lightDark ">
                  <td className="py-4">
                    <p>{shortAddress(token.wallet)}</p>
                  </td>{" "}
                  <td className="py-4 ">{token.amount}</td>
                  <td className="py-4 ">{token.cycle}</td>
                  <td className="py-4 ">{token.cycleRealese}</td>
                  <td className="py-4 ">{token.tge}</td>
                  <td className="py-4 ">{token.unlock}</td>
                  <td className="py-4 text-right">
                    <Link to="/lock_record" className="text-primary-text">
                      View
                    </Link>
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LockDetails;
