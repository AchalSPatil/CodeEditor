import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [savedCodeBlocks, setSavedCodeBlocks] = useState([]);

  const handleCopyClick = () => {
    const codeTextArea = document.getElementById('codeTextArea');
    codeTextArea.select();
    document.execCommand('copy');
  };

  const handleSaveClick = () => {
    if (code.trim() !== '') {
      setSavedCodeBlocks([...savedCodeBlocks, code]);
      setCode(''); // Clear the current code editor content after saving
    }
  };

  const handleLockClick = () => {
    setIsLocked(!isLocked);
  };


  return (
    <div className={`code-editor ${isLocked ? 'code-editor--locked' : ''}`}>
      <textarea
        id="codeTextArea"
        className="code-editor__textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        readOnly={isLocked}
      />
      <div className="code-editor__buttons">
        <button onClick={handleCopyClick} className="code-editor__copy-button">
          Copy
        </button>
        <button onClick={handleSaveClick} className="code-editor__save-button">
          Save
        </button>
        <button onClick={handleLockClick} className="code-editor__lock-button">
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
      </div>

      {savedCodeBlocks.length > 0 && (
        <div className="code-editor__saved-code">
          <h2>Saved Code Blocks</h2>
          {savedCodeBlocks.map((savedCode, index) => (
            <pre key={index}>{savedCode}</pre>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
