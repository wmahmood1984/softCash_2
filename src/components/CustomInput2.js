const CustomInput2 = ({ label, type = "text", required, ...props }) => {
  return (
    <div className="">
      {label && (
        <label>
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        {...props}
        required={required}
        type={type}
        className="bg-[#303D4F] border flex-1 outline-none focus:ring-0 block w-full rounded-md "
      />
    </div>
  );
};

export default CustomInput2;
