import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('API de reconhecimento de voz não suportada no navegador.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'pt-BR';  // Defina o idioma como português (Brasil)

    recognition.start();
    setIsRecording(true);

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.onerror = (event) => {
      console.error('Erro de reconhecimento de voz:', event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };
  };

  const handleStopRecording = () => {
    if (window.webkitSpeechRecognition) {
      window.webkitSpeechRecognition.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="transcription-container">
      <div className="transcription-text">
        {transcript || 'Aguardando transcrição...'}
      </div>
      <button onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Parar Gravação' : 'Iniciar Gravação'}
      </button>
    </div>
  );
}

export default App;
