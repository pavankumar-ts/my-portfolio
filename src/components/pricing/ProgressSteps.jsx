const ProgressSteps = ({ currentStep }) => (
  <div className="flex justify-between items-center mb-12 max-w-xl mx-auto relative">
    {[
      { num: 1, label: 'Project' },
      { num: 2, label: 'Business' },
      { num: 3, label: 'Contact' }
    ].map(({ num, label }) => (
      <div key={num} className="flex flex-col items-center w-1/3">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors duration-300
            ${currentStep === num ? 'border-[var(--logo-color)] text-[var(--logo-color)]' :
            currentStep > num ? 'border-green-500 bg-green-500 text-white' :
              'border-[var(--border-color)] text-[var(--text-color)] opacity-50'}`}
        >
          {currentStep > num ? '✓' : num}
        </div>
        <div className={`text-sm transition-colors duration-300 ${currentStep === num ? 'text-[var(--logo-color)]' :
            currentStep > num ? 'text-green-500' :
              'opacity-50'
          }`}>
          {label}
        </div>
      </div>
    ))}
  </div>
);

export default ProgressSteps;