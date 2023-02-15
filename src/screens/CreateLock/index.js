import React, { useState } from "react";
import Button from "../../components/Button";
import CustomCheckBox from "../../components/CustomCheck";
import CustomInput2 from "../../components/CustomInput2";

const CreateLock = () => {
  const [useAnotherOwner, setUseAnotherOwner] = useState(false);
  return (
    <div className="mt-6 mb-10">
      <div className="mb-6">
        <p className=" text-lg font-semibold"> Create your lock</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <CustomInput2
            required
            label="Token or LP Token address"

            //   value={hardCap}
            //   onChange={(e) => setHardCap(e.target.value)}
          />
          <div className="mt-2" />
          <CustomCheckBox
            checked={useAnotherOwner}
            onChange={(e) => setUseAnotherOwner(e.target.checked)}
            id={"another_owner"}
            label={"Use another owner?"}
          />
        </div>
        {useAnotherOwner && (
          <CustomInput2
            required
            label="Owner"
            //   value={hardCap}
            //   onChange={(e) => setHardCap(e.target.value)}
          />
        )}
        <CustomInput2
          required
          label="Title"
          //   value={hardCap}
          //   onChange={(e) => setHardCap(e.target.value)}
        />
        <CustomInput2
          required
          label="Amount"
          //   value={hardCap}
          //   onChange={(e) => setHardCap(e.target.value)}
        />
        <CustomInput2
          required
          type="date"
          label="Lock until"
          //   value={hardCap}
          //   onChange={(e) => setHardCap(e.target.value)}
        />
        <div className="bg-gray-500  bg-opacity-20 mt-6 p-4 rounded-md text-sm break-words">
          Please exclude Softlock's lockup address
          0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE from fees, rewards, max tx
          amount to start locking tokens. We don't support rebase tokens.
        </div>
        <Button center>Create Token</Button>
      </div>
    </div>
  );
};

export default CreateLock;
