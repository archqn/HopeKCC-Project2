import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function App() {
  const [code, setCode] = useState('<h1>Hello, World!</h1>');

  return (
    <div className="h-screen">
      <Editor
        height="90vh"
        defaultLanguage="html"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || '')}
      />
    </div>
  );
}

export default App;
