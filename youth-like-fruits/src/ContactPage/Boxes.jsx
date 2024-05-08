import React from "react";

function ThreeColoredBoxes() {
  // Define styles for main text and description
  const mainTextStyle = {
    fontSize: "30px", // Example font size for main text
    fontWeight: "bold", // Example font weight for main text
    marginBottom: "0px", // Example margin bottom for main text
  };

  const descriptionStyle = {
    fontSize: "18px", // Example font size for description
    marginTop: "-60px", // Adjust margin-top to create space between main text and description
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start", // Align items vertically at the top
        justifyContent: "center", // Align items horizontally centered
        height: "100vh", // Make the container full height of the viewport
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          width: "450px",
          height: "160px",
          margin: "0px",
          textAlign: "center",
          lineHeight: "100px",
        }}
        className="box"
      >
        <div>
          {/* Apply styles to main text and description */}
          <p style={mainTextStyle}>Hotline</p>
          <p style={descriptionStyle}>66666</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "green",
          width: "450px",
          height: "160px",
          margin: "0px",
          textAlign: "center",
          lineHeight: "100px",
          position: "relative", // Add position relative for the hover effect
          transition: "transform 0.3s", // Add transition effect
        }}
        className="box"
      >
        <div>
          {/* Apply styles to main text and description */}
          <p style={mainTextStyle}>Main Branch</p>
          <p style={descriptionStyle}>
            1st Settlement, Banafsag 3, Tarek Shawky Street
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "grey",
          width: "450px",
          height: "160px",
          margin: "0px",
          textAlign: "center",
          lineHeight: "100px",
          position: "relative", // Add position relative for the hover effect
          transition: "transform 0.3s", // Add transition effect
        }}
        className="box"
      >
        <div>
          {/* Apply styles to main text and description */}
          <p style={mainTextStyle}>Working Hours</p>
          <p style={descriptionStyle}>24 hours all week</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeColoredBoxes;
