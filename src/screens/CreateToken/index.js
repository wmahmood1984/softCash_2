import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { tokenLauncherAbi, tokenlauncherAdd } from "../../config.js";
import { getContract } from "../../web3/helpers";

const CreateToken = () => {
  const {chainId,library,account} = useWeb3React()
  const [name,setName] = useState("abc ")
  const [symbol,setSymbol] = useState("abc")
  const [decimals,setDecimals] = useState(18)
  const [totalSupply,setTotalSupply] = useState(1000000)
  const [liquidity,setLiquidity] = useState(1)
  const [lWallet,setLWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [bback,setBback] = useState(1)
  const [bWallet,setBWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [reward,setReward] = useState(1)
  const [rToken,setRToken] = useState("0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee")
  const [marketing,setMarketing] = useState(1)
  const [mWallet,setMWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [staking,setStaking] = useState(1)
  const [sWallet,setsWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [dev,setDev] = useState(1)
  const [dWallet,setdWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [sliquidity,setSliquidity] = useState(1)
  const [sbback,setSBback] = useState(1)
  const [sReflection,setsReflection] = useState(1)
  const [sMarketing,setsMarketing] = useState(1)
  const [sSTaking,setsSTaking] = useState(1)
  const [sDev,setsDev] = useState(1)
  const [transfer,setTransfer] = useState(1)
  const [transferWallet,setTransferWallet] = useState("0xad1e5Db8BD24F732C39A3f32Cf16291ac3Bc2cC0")
  const [router,setRouter] = useState("0xD99D1c33F9fC3444f8101754aBC46c52416550D1")
  const contract = getContract(library,account,tokenLauncherAbi,tokenlauncherAdd[`${chainId}`])
  const [open,setOpen] = useState()
  const [buyTax,setBuyTax] = useState(0)
  const [saleTax,setSaleTax] = useState(0)

const _createToken = async ()=>{
  setOpen(true)
  console.log("data",[name,symbol],   //strings
  [router
    ,mWallet ? mWallet : "0x0000000000000000000000000000000000000000"
    ,bWallet ? bWallet : "0x0000000000000000000000000000000000000000"
    ,rToken? rToken : "0x0000000000000000000000000000000000000000"
    ,dWallet? dWallet : "0x0000000000000000000000000000000000000000"
    ,sWallet? sWallet : "0x0000000000000000000000000000000000000000"
    ,transferWallet? transferWallet : "0x0000000000000000000000000000000000000000"
    ,transferWallet? transferWallet : "0x0000000000000000000000000000000000000000"
  ],   // addresses
  [totalSupply,decimals,marketing,liquidity,bback,sbback,sMarketing,sliquidity,dev,sDev,staking,sSTaking,reward,sReflection,transfer

  ])
  try {
    const tx1 = await contract.launchToken(
      [name,symbol],   //strings
      [router,mWallet,bWallet,rToken,dWallet,sWallet,transferWallet,account],   // addresses
      [totalSupply,decimals,marketing,liquidity,bback,sbback,sMarketing,sliquidity,dev,sDev,staking,sSTaking,reward,sReflection,transfer

      ],   // integers
      {gasLimit:6000000}

    )

    const receipt = await tx1.wait()

    if(receipt){
      setOpen(false)
    }
  } catch (error) {
    console.log("error in create token",error)
    setOpen(false)
  }
}

if(buyTax>9){
  toast.error("Buy tax cannot be more than 9%")
}

if(saleTax>9){
  toast.error("Sale tax cannot be more than 9%")
}

const [buyOptions,setBuyOptions] = useState([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,])
const [saleOptions,setSaleOptions] = useState([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,])
const [transferOptions,setTransferOptions] = useState([0, 0.5, 1, 1.5, 2])


// console.log("buy",buyTax)
// console.log("sale",saleTax)
// console.log("liquidity",liquidity)

  return (
    <div className="text-[#B3B3B3]  pb-20">
      {/* <div className="lg:hidden my-10 text-center">
        <p>This page is only available for desktop view</p>
      </div> */}
      <div className="">
        <div className="mt-5 ">
          <p className="mb-2">(*) is required field.</p>
        </div>
        <div className="grid gap-4 grid-cols-1">
        <CustomInput placeholder="Example: BitCoin" value={name} setValue={setName} label={"Name"} />
          <CustomInput placeholder="Example: BTC"value={symbol} setValue={setSymbol} label={"Symbol"} />
          <CustomInput value={decimals} setValue={setDecimals} label={"Decimals"} />
          <CustomInput value={totalSupply} setValue={setTotalSupply} label={"Total supply"} />
          <CustomInput value={chainId == 97 ? "BNB" : "ETH"} label={"Network / Chain"} />
          <CustomInput value={router} setValue={setRouter} label={"Router	"} />
        </div>
        <p className="mt-10 mb-4 text-2xl font-bold text-center">Tax Option</p>
        <div className="grid grid-flow-col gap-2 justify-start items-center">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Select Your Required Buy Tax Options (Max 9% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Liquidity"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Liquidity Wallet Address	"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="ml-2 flex-1">
                <CustomSelect label={"Auto Buybac & Burn"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Buyback Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Token Reflection"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomRadio label={"Select Token Reflection Method"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Marketing"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Marketing Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Staking Reward"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Staking Reward Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Team / Dev"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Team / Dev Wallet Address"} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-flow-col gap-2 justify-start items-center">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Select Your Required Sell Tax Options (Max 9% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Liquidity"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Liquidity Wallet Address	"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className="flex-1 ml-2">
                <CustomSelect label={"Auto Buybac & Burn"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Auto Buyback Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <CustomCheckBox />
              <div className=" flex-1 ml-2">
                <CustomSelect label={"Token Reflection"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomRadio label={"Select Token Reflection Method"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className=" flex-1 ml-2">
                <CustomSelect label={"Marketing"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Marketing Wallet Address"} />
            </div>
          </div>{" "}
          <div className=" grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Staking Reward"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Staking Reward Wallet Address"} />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Team / Dev"} />{" "}
              </div>
            </div>
            <div className="flex-1 md:ml-2">
              <CustomInput label={"Team / Dev Wallet Address"} />
            </div>
          </div>
        </div>

        <br />
        <div className="grid grid-flow-col gap-2 justify-start items-center mt-4">
          <CustomCheckBox checked />
          <p className=" text-white font-semibold">
            Transfer TAX (Max 2% Total)
          </p>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div className=" grid grid-cols-1 gap-4 md:gap-0 md:flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomCheckBox />
              </div>
              <div className="flex-1 ml-2">
                <CustomSelect label={"Send & Recieve"} />{" "}
              </div>
            </div>
            <div className="flex-1  md:ml-2">
              <CustomInput label={"Transfer TAX Reciever Wallet "} />
            </div>
          </div>{" "}
        </div>
        <div className="max-w-max mx-auto">
          <button className="font-bold py-3 px-8 rounded-md text-lg btn_gradient text-white mt-14">
            Create New Token
          </button>
          <p className="text-white mx-auto mt-1">Fee: 1BNB</p>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;

const CustomInput = ({ label, ...props }) => {
  return (
    <div className="bg-[#303D4F] flex border rounded-lg overflow-hidden border-gray-400">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-r border-gray-400 rounded-l-lg font-semibold min-w-[120px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <input
        type="text"
        className="bg-[#303D4F] flex-1 border-none outline-none focus:ring-0 "
        {...props}
      />
    </div>
  );
};
const CustomRadio = ({ label, ...props }) => {
  const list = ["BNB", "ETH", "USDT", "SOFT", "CAKE", "DOGE"];
  return (
    <div className="bg-[#303D4F] flex flex-col md:flex-row border rounded-lg overflow-hidden border-gray-400 items-center">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-b md:border-b-0 md:border-r border-gray-400 md:rounded-l-lg font-semibold min-w-[120px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <div className="grid grid-cols-3 p-2 md:grid-cols-none md:grid-flow-col gap-2 ml-2">
        {list.map((item, index) => (
          <div key={index}>
            <input
              type="radio"
              id={item}
              name={label}
              value={item}
              // className="bg-[#303D4F] flex-1 border-none outline-none focus:ring-0 "
              {...props}
            />
            <label htmlFor={item} className="ml-1">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
const CustomSelect = ({ label, ...props }) => {
  const options = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
  ];
  return (
    <div className="bg-[#303D4F] flex border rounded-lg overflow-hidden border-gray-400">
      <div className="bg-[#303D4F] text-white px-2 py-2 border-r border-gray-400 rounded-l-lg font-semibold min-w-[80px] md:min-w-[280px] text-sm sm:text-base ">
        {label}
      </div>
      <select
        name=""
        id=""
        className="bg-[#303D4F] text-white flex-1 border-none outline-none focus:ring-0 "
      >
        <option value={null}>Select Tax(%)</option>
        {options.map((val, i) => (
          <option value={val} key={i}>
            {val}%
          </option>
        ))}
      </select>
    </div>
  );
};

const CustomCheckBox = ({ ...props }) => {
  return (
    <input
      type="checkbox"
      className="p-5 bg-[#303D4F] focus:ring-0 rounded-md"
      {...props}
    />
  );
};
