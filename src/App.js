import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState('');

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      mediaRecorder.ondataavailable = function (e) {
        const audioBlob = e.data;
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.wav');

        fetch('http://localhost:3001/upload-audio', {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            setTranscript(data.transcript);
          });
      };

      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000); // 5 segundos de gravação
    });
  };

  return (
    <div>
      <h1>Legendas Automáticas para Igreja</h1>
      <button onClick={handleStartRecording}>Iniciar Gravação</button>
      <p>Transcrição: {transcript}</p>
    </div>
  );
}

export default App;
