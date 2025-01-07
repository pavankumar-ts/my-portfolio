// pages/pricing.js
import FormInput from '@/components/pricing/FormInput';
import FormTextArea from '@/components/pricing/FormTextArea';
import ProgressSteps from '@/components/pricing/ProgressSteps';
import SelectButton from '@/components/pricing/SelectButton';
import TrustIndicator from '@/components/pricing/TrustIndicator';
import emailjs from 'emailjs-com';
import { services } from '@/data/services';
import { useState } from 'react';

const PricingInquiry = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    projectType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    businessName: '',
    industry: '',
    companySize: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'my_portfolio', // Replace with your Service ID
        'template_pricing', // Replace with your Template ID
        {
          from_name: formData.name,
          project_type: formData.projectType,
          project_scope: formData.projectScope,
          timeline: formData.timeline,
          business_name: formData.businessName,
          industry: formData.industry,
          company_size: formData.companySize,
          budget: formData.budget,
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'envDnIzt4XmWq_8T9' // Replace with your Public Key
      );

      setStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });

      // Reset form after successful submission
      setFormData({
        projectType: '',
        projectScope: '',
        timeline: '',
        budget: '',
        businessName: '',
        industry: '',
        companySize: '',
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Reset to first step after a delay
      setTimeout(() => {
        setStep(1);
        setStatus({ type: '', message: '' });
      }, 3000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add this to your return JSX, where you show the success/error messages
  const StatusMessage = () => {
    if (!status.message) return null;

    return (
      <div className={`text-center p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
        {status.message}
      </div>
    );
  };

  const nextStep = () => {
    if (step === 1 && !formData.projectType) {
      setStatus({ type: 'error', message: 'Please select a project type.' });
      return;
    }
    if (step === 3 && (!formData.businessName || !formData.industry)) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    setStep(prev => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enables smooth scrolling
    });
    setStatus({ type: 'error', message: '' });
  };

  const prevStep = () => setStep(prev => prev - 1);
  const SubmitButton = () => (
    <button
      type="submit"
      disabled={isLoading}
      className={`ml-auto px-8 py-3  transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
        } bg-[var(--logo-color)] text-white`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-t-2 border-b-2 border-white  animate-spin" />
          <span>Sending...</span>
        </div>
      ) : (
        'Submit'
      )}
    </button>
  );

  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" >
            Get Your Project Estimate
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            Let's understand your vision and provide you with a tailored solution
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps currentStep={step} />

        {/* Main Form */}
        <div className="rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--border-color)] bg-[var(--bg-color)]">
          <form onSubmit={handleSubmit} className="space-y-8">
            <StatusMessage />

            {/* Step 1: Project Details */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <div className="text-3xl">🚀</div>
                  <h2 className="text-2xl font-semibold">Tell us about your project</h2>
                </div>

                <div>
                  <label className="block font-medium mb-2 opacity-80">
                    What type of project are you looking to build? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <SelectButton
                        key={service.id}
                        selected={formData.projectType === service.title}
                        onClick={() => setFormData((prev) => ({ ...prev, projectType: service.title }))}
                      >
                        {service.title}
                      </SelectButton>
                    ))}
                    <SelectButton
                      key="other"
                      selected={formData.projectType === "Other"}
                      onClick={() => setFormData((prev) => ({ ...prev, projectType: "Other" }))}
                    >
                      Other
                    </SelectButton>
                  </div>
                </div>

                <FormTextArea
                  label="Project Scope"
                  name="projectScope"
                  value={formData.projectScope}
                  onChange={handleChange}
                  placeholder="Describe your project vision and objectives..."
                />

                <div>
                  <label className="block font-medium mb-2 opacity-80">
                    Expected Timeline
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Within a Month', '1-3 months', '3-6 months', '6-12 months', '12+ months'].map((time) => (
                      <SelectButton
                        key={time}
                        selected={formData.timeline === time}
                        onClick={() => setFormData(prev => ({ ...prev, timeline: time }))}
                      >
                        {time}
                      </SelectButton>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <div className="text-3xl">💼</div>
                  <h2 className="text-2xl font-semibold">Business Information</h2>
                </div>

                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label={<>Business Name <span className='text-red-500'></span></>}
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label={<>Industry <span className='text-red-500'></span></>}
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label={<>Budget Range <span className="text-red-500"></span></>}
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['₹20k - 20k', '₹10k-$25k', '₹25k-₹50k', '₹50k+'].map((budget) => (
                        <SelectButton
                          key={budget}
                          selected={formData.budget === budget}
                          onClick={() => setFormData(prev => ({ ...prev, budget: budget }))}
                        >
                          {budget}
                        </SelectButton>
                      ))}
                    </div> */}
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-8">
                  <div className="text-3xl">📧</div>
                  <h2 className="text-2xl font-semibold">Contact Details</h2>
                </div>

                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label={<>Your Name <span className='text-red-500'>*</span></>}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      label={<>Email Address <span className='text-red-500'>*</span></>}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <FormInput
                    label={<>Phone Number <span className='text-red-500'>*</span></>}
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <FormTextArea
                    label="Additional Information"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any other details you'd like to share..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isLoading}
                  className={`px-8 py-3  transition-colors hover:opacity-90 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    } bg-[var(--border-color)] text-[var(--text-color)]`}
                >
                  <span className="ml-2 font-semibold" style={{ display: "inline-block", transform: "rotate(180deg)" }}>→</span> Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-8 py-3  transition-colors hover:opacity-90 bg-[var(--logo-color)] text-white"
                >
                  Continue <span className="ml-2 font-semibold">→</span>
                </button>
              ) : (
                <SubmitButton />
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤝",
              title: "Personal Approach",
              description: "Direct communication with me throughout your project"
            },
            {
              icon: "⚡",
              title: "Quick Response",
              description: "Get your quote and project updates within 12 hours"
            },
            {
              icon: "💡",
              title: "Creative Solutions",
              description: "Custom development tailored to your unique needs"
            }
          ].map((item, index) => (
            <TrustIndicator key={index} {...item} />
          ))}
        </div>
      </div >
    </div >
  );
};

export default PricingInquiry;