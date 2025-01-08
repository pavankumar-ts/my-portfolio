const SelectButton = ({ selected, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 text-center border transition-all duration-300 
        ${selected ? 'border-[var(--logo-color)] bg-[var(--logo-color)] text-white' : 
        'border-[var(--border-color)] bg-transparent text-[var(--text-color)] hover:border-[var(--logo-color)]'}`}
    >
      {children}
    </button>
  );
  
  export default SelectButton;