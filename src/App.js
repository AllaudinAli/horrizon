import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import InputBox from "./components/InputBox/InputBox";
import DropBox from "./components/DropBox/DropBox";
import TranscriptionBox from "./components/TranscriptionBox/TranscriptionBox";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import './App.css'

function App() {
  // Event handlers as described previously
  const handleAddLink = (link) => {
    console.log("Adding link:", link);
  };

  const handleFileDrop = (file) => {
    console.log("Dropping file:", file);
  };

  const handleTranscriptionSubmit = (transcription) => {
    console.log("Submitting transcription:", transcription);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container spacing={2} sx={{ p: 3}}>
        <Grid item xs={12} md={6}>
          <InputBox onAddLink={handleAddLink} />
          <DropBox onDrop={handleFileDrop} />
          <TranscriptionBox onTranscriptionSubmit={handleTranscriptionSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder for content, replace with your image or component */}
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "lightgrey",
            }}
          >
            <img
              src="/horrizon.png"
              alt="HorizonAI Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
