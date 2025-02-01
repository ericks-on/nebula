"use client"; // Mark this as a Client Component

const ScheduleMeetingButton = () => {
  const handleClick = () => {
    const subject = encodeURIComponent("Request for Consultation Meeting");
    const body = encodeURIComponent(
      "Hello,\n\nI would like to schedule a consultation meeting to discuss my data science needs. Please let me know your availability.\n\nBest regards,\n[Your Name]"
    );
    window.location.href = `mailto:info@nebulaanalytics.org?subject=${subject}&body=${body}`;
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-transparent text-orange-500 font-semibold py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-orange-500/10 transition-colors"
    >
      Schedule Meeting
    </button>
  );
};

export default ScheduleMeetingButton;