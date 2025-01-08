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
        className="w-full p-4 transition-all focus:ring-2 focus:ring-[var(--logo-color)] outline-none bg-transparent border border-[var(--border-color)] text-[var(--text-color)]"
        {...props}
      />
    </div>
  );
  
  export default FormTextArea;