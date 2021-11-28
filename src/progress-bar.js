import React from "react";
export const ProgressIndicator = ({ progress = 80 }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-track" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
