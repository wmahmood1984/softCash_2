const CustomCheckBox = ({ label, id, ...props }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="p-2 bg-[#303D4F] focus:ring-0 rounded mr-2"
        {...props}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomCheckBox;
