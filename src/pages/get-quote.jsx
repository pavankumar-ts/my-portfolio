import FormInput from '@/components/pricing/FormInput';
import FormTextArea from '@/components/pricing/FormTextArea';
import ProgressSteps from '@/components/pricing/ProgressSteps';
import SelectButton from '@/components/pricing/SelectButton';
import TrustIndicator from '@/components/pricing/TrustIndicator';
import emailjs from 'emailjs-com';
import { services } from '@/data/services';
import { useState } from 'react';
import Head from "next/head";

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
        'my_portfolio',
        'template_pricing',
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
        'envDnIzt4XmWq_8T9'
      );

      setStatus({
        type: 'success',
        message: 'Thank you! We will get back to you soon.'
      });

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

  const StatusMessage = () => {
    if (!status.message) return null;

    return (
      <div className={`text-center p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-logoColor text-logoColor dark:bg-logoColor/50 dark:text-logoColor'
        : 'bg-red-50 text-red-600 dark:bg-red-900/50 dark:text-red-400'
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
    if (step === 2 && (!formData.businessName )) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    if (step === 3 && (!formData.name || !formData.email || !formData.phone)) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    setStep(prev => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setStatus({ type: 'error', message: '' });
  };

  const prevStep = () => setStep(prev => prev - 1);

  const SubmitButton = () => (
    <button
      type="submit"
      disabled={isLoading}
      className={`ml-auto px-8 py-3 bg-logoColor text-white transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
        }`}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border-t-2 border-b-2 border-white animate-spin" />
          <span>Sending...</span>
        </div>
      ) : (
        'Submit'
      )}
    </button>
  );

  return (
    <>
      <Head>
        <title>Get a Quote | Pavan Kumar - Software Developer & Digital Solutions Expert</title>
        <meta name="description" content="Get a personalized project estimate from Pavan Kumar, an expert in software development, specializing in React, Next.js, mobile apps, and no-code solutions." />
      </Head>
      <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Project Estimate
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Let's understand your vision and provide you with a tailored solution
            </p>
          </div>

          <ProgressSteps currentStep={step} />

          <div className="rounded-2xl shadow-lg p-4 md:p-12 border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
            <form onSubmit={handleSubmit} className="space-y-8">


              {step === 1 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="text-3xl">🚀</div>
                    <h2 className="text-2xl font-semibold">Tell us about your project</h2>
                  </div>

                  <div>
                    <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
                      What type of project are you looking to build? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                    <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
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

              {step === 2 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="text-3xl">💼</div>
                    <h2 className="text-2xl font-semibold">Business Information</h2>
                  </div>

                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label={<>Business Name <span className="text-red-500">*</span></>}
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        label={<>Industry <span className="text-red-500"></span></>}
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
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="text-3xl">📧</div>
                    <h2 className="text-2xl font-semibold">Contact Details</h2>
                  </div>

                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label={<>Your Name <span className="text-red-500">*</span></>}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        label={<>Email Address <span className="text-red-500">*</span></>}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <FormInput
                      label={<>Phone Number <span className="text-red-500">*</span></>}
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
              <div className="flex justify-between mt-12">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={isLoading}
                    className={`px-8 py-3 transition-colors bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                  >
                    <span className="ml-2 font-semibold hidden md:inline-block " style={{ transform: "rotate(180deg)" }}>→</span> Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto  px-8 py-3 bg-logoColor text-white transition-colors hover:opacity-90"
                  >
                    Continue <span className="ml-2 font-semibold hidden md:inline-block">→</span>
                  </button>
                ) : (
                  <SubmitButton />
                )}
              </div>
              <StatusMessage />
            </form>
          </div>

          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PricingInquiry;