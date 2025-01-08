const FormTextArea = ({ label, name, value, onChange, placeholder, rows = 4, ...props }) => (
    <div>
      <label className="block font-medium mb-2 opacity-80">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-4 transition-all focus:ring-1 focus:ring-logoColor outline-none bg-transparent border border-[var(--border-color)] text-textColor]"
        {...props}
      />
    </div>
  );
  
  export default FormTextArea;