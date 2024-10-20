import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    // Verifica se o navegador suporta a API de reconhecimento de voz
    if (!('webkitSpeechRecognition' in window)) {
      alert('API de reconhecimento de voz não suportada no navegador.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true; // Grava continuamente
    recognition.interimResults = false; // Não mostrar resultados intermediários
    recognition.lang = 'pt-BR'; // Defina a língua, aqui para português (Brasil)

    // Inicia a gravação
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
    <div>
      <h1>Legendas Automáticas para Igreja</h1>
      {!isRecording ? (
        <button onClick={handleStartRecording}>Iniciar Gravação</button>
      ) : (
        <button onClick={handleStopRecording}>Parar Gravação</button>
      )}
      <p>Transcrição: {transcript}</p>
    </div>
  );
}

export default App;
