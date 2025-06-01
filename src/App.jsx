import React, { useState, useEffect } from 'react'; // Add useEffect here

function App() {
  const [message, setMessage] = useState('Welcome to my CI/CD Demo App!');

  const handleClick = () => {
    setMessage('You clicked the button! 🎉');
  };

  // ✅ Log when the app is rendered (i.e., after deploy)
  useEffect(() => {
    console.log("deployed");
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f2f2'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>My React CI/CD Demo</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>{message}</p>
        <button
          onClick={handleClick}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
