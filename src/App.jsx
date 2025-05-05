import './App.css'
import { useState } from 'react';
import ImageGenerator from './components/ImageGenerator.jsx';
import RecipeGenerator from './components/RecipeGenerator.jsx';
import ChatComponent from './components/ChatComponent.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');
  const [apiUrl, setApiUrl] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <>
     <div className='navbar'>
     <button onClick={() => handleTabChange('image-generator')}>Image Generator</button>
     <button onClick={() => handleTabChange('chat')}>Ask AI</button>
     <button onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>
     </div>

    
      {activeTab === 'image-generator' && <ImageGenerator url={apiUrl}/>}
      {activeTab === 'chat' && <ChatComponent url={apiUrl}/>}
      {activeTab === 'recipe-generator' && <RecipeGenerator url={apiUrl}/>}

      <div className='api-url'> 
        <input type='text' value={apiUrl} onChange={(e) => setApiUrl(e.target.value)} placeholder='Enter API URL'></input>
      </div>
   
    </>
  )
}

export default App
