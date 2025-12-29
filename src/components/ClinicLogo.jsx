export default function ClinicLogo({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/logo/dr-priyankas-clinic-logo.png" 
        alt="Dr. Priyanka's Clinic Logo" 
        className="h-16 w-auto"
      />
    </div>
  );
}
