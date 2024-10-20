import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    try {
      // Solicita permissão para acessar o microfone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Configura o MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      // Inicia a gravação
      mediaRecorder.start();
      setIsRecording(true);

      // Coleta os dados de áudio
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      // Quando parar de gravar, cria um URL para o áudio
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunks.current = [];  // Limpa os chunks de áudio após salvar
      };
    } catch (err) {
      console.error('Erro ao acessar o microfone: ', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <h2>Gravador de Áudio</h2>
      {!isRecording ? (
        <button onClick={startRecording}>Iniciar Gravação</button>
      ) : (
        <button onClick={stopRecording}>Parar Gravação</button>
      )}
      {audioURL && (
        <div>
          <h3>Gravação:</h3>
          <audio src={audioURL} controls />
          <a href={audioURL} download="gravacao.wav">Baixar Áudio</a>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
