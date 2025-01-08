const FormInput = ({ label, name, type = "text", value, onChange, placeholder, ...props }) => (
    <div>
      <label className="block font-medium mb-2 opacity-80">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 transition-all focus:ring-1 focus:ring-logoColor outline-none bg-transparent border border-[var(--border-color)] text-[var(--text-color)]"
        {...props}
      />
    </div>
  );
  
  export default FormInput;