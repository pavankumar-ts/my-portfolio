const TrustIndicator = ({ icon, title, description }) => (
    <div className="text-center p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-color)] transition-all hover:border-[var(--logo-color)]">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="opacity-70">{description}</p>
    </div>
  );
  
  export default TrustIndicator;