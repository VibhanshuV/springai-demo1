import React, { useState } from 'react';

function ChatComponent({url}) {
  const [prompt, setPrompt] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const askAI = async (e) => {
    e.preventDefault();
    console.log('Prompt:', prompt);
    try {
      const response = await fetch(`${url}/ask-ai-options?prompt=${prompt}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log('AI Response:', data);
      setChatResponse(data);
    } catch (e) {
      console.error('Error fetching AI response:', e);
    }
  } 
  return (
    <div>
      <h2>Talk to AI</h2>
      <form action="">
      <input type="text" value={prompt}  placeholder='Enter a prompt for AI' onChange={(e)=> setPrompt(e.target.value)}/>
      <button onClick={askAI}>Ask AI</button>
      </form>

      <div className='output'>
        <pre className='recipe-text'>{chatResponse}</pre>
      </div>


    </div>
  );
}

export default ChatComponent;