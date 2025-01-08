const ProgressSteps = ({ currentStep }) => (
  <div className="flex justify-between items-center mb-12 max-w-xl mx-auto relative">
    {/* Connector lines */}
    <div 
      className={`absolute left-[20%] right-[20%] top-6 border-t-2 border-dashed transition-colors duration-300 
        ${currentStep > 1 ? 'border-logoColor' : 'border-gray-300 dark:border-gray-700'}`}
    />
    <div 
      className={`absolute left-[55%] right-[20%] top-6 border-t-2 border-dashed transition-colors duration-300 
        ${currentStep > 2 ? 'border-logoColor' : 'border-gray-300 dark:border-gray-700'}`}
    />

    {[
      { num: 1, label: 'Project' },
      { num: 2, label: 'Business' },
      { num: 3, label: 'Contact' }
    ].map(({ num, label }) => (
      <div key={num} className="flex flex-col items-center w-1/3">
        <div 
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors duration-300
          relative z-10 
            ${currentStep === num 
              ? 'bg-white dark:bg-black border-logoColor text-logoColor' 
              : currentStep > num 
                ? 'bg-logoColor border-logoColor text-white' 
                : 'bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100'
            }`}
        >
          {currentStep > num ? '✓' : num}
        </div>
        <div 
          className={`text-sm transition-colors duration-300 
            ${currentStep === num 
              ? 'text-logoColor' 
              : currentStep > num 
                ? 'text-logoColor' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
        >
          {label}
        </div>
      </div>
    ))}
  </div>
);

export default ProgressSteps;