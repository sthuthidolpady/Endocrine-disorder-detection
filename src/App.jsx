import React, { useState } from "react";
import "./App.css";

function App() {
  const [csvFile, setCsvFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Endometrial Cancer Detection</h1>
        <p>Upload clinical data (CSV) or medical images to analyze</p>
      </header>

      {/* Upload Section */}
      <div className="upload-section">
        {/* CSV Upload */}
        <div className="upload-card">
          <h2>Upload CSV File</h2>
          <label className="file-upload">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setCsvFile(e.target.files[0])}
            />
            <span>📂 Choose CSV</span>
          </label>
          {csvFile && <p className="file-name">{csvFile.name}</p>}

          {/* Results Box - Empty (for future dynamic output) */}
          <div className="results-box">
            <p>No results yet. Upload file to analyze.</p>
          </div>
        </div>

        {/* Image Upload */}
        <div className="upload-card">
          <h2>Upload Image File</h2>
          <label className="file-upload">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <span>🖼️ Choose Image</span>
          </label>
          {imageFile && <p className="file-name">{imageFile.name}</p>}

          {/* Results Box - Empty (for future dynamic output) */}
          <div className="results-box">
            <p>No results yet. Upload file to analyze.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
