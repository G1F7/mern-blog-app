import React from "react";

// Import images
import pic2 from "../pic-2.jpeg";
import pic from "../pic-1.jpeg";

// Import custom stylesheet
import "../App.css";

// Function to display rightpanel with decorative images
function RightPanel(props) {
  return (
    <div className="rightPanel">
      <img src={pic2} alt="Beach scene" className="notepadImg" />
      <img src={pic} alt="Lady's hands at computer" className="workstationImg" />
    </div>
  );
}

// Export component to be used in other files
export default RightPanel;
