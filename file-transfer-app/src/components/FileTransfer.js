// src/components/FileTransfer.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const FileTransfer = ({ authToken }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000', {
      auth: {
        token: authToken,
      },
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [authToken]);

  const handleFileTransfer = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      socket.emit('fileTransfer', { file: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileTransfer(e.target.files[0])} />
    </div>
  );
};

export default FileTransfer;
