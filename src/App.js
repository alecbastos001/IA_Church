import React, { useState } from 'react';

function App() {
  const [transcript, setTranscript] = useState(''); // Para armazenar a transcrição
  const [isRecording, setIsRecording] = useState(false); // Para controlar o estado de gravação

  // Função para iniciar a gravação e reconhecimento de voz
  const handleStartRecording = () => {
    // Verifica se o navegador suporta a API de reconhecimento de voz
    if (!('webkitSpeechRecognition' in window)) {
      alert('API de reconhecimento de voz não suportada no navegador.');
      return;
    }

    // Instancia o reconhecimento de voz
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true; // Continuar ouvindo até o stop
    recognition.interimResults = true; // Mostrar resultados parciais (opcional)
    recognition.lang = 'pt-BR'; // Definir o idioma (português Brasil)

    // Iniciar o reconhecimento de voz
    recognition.start();
    setIsRecording(true);

    // Manipula os resultados da gravação (transcrição)
    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript; // Pega o texto transcrito
      }
      setTranscript(finalTranscript); // Atualiza o estado com a transcrição
    };

    // Se ocorrer erro no reconhecimento de voz
    recognition.onerror = (event) => {
      console.error('Erro de reconhecimento de voz:', event.error);
      setIsRecording(false); // Parar gravação em caso de erro
    };

    // Quando o reconhecimento de voz para automaticamente
    recognition.onend = () => {
      setIsRecording(false); // Atualiza o estado para parar a gravação
    };
  };

  // Função para parar a gravação
  const handleStopRecording = () => {
    if (window.webkitSpeechRecognition) {
      window.webkitSpeechRecognition.stop(); // Para a gravação
      setIsRecording(false); // Atualiza o estado
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
      <p>Transcrição: {transcript}</p> {/* Exibe a transcrição em tempo real */}
    </div>
  );
}

export default App;
