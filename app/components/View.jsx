"use client";

export default function View() {
  

  return (
    <img src="/images/profile.jpg"
      style={{
        
      }}
      onMouseEnter={(e) => {
        e.target.style.filter ="none";
        e.target.style.transition ="0.5s ease";
      }}
      onMouseLeave={(e) => {
        e.target.style.filter ="grayscale(100%)";
        e.target.style.transition ="0.5s ease";
      }}
      title="view"
    >
    </img>
  );
}
