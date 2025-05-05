import React, { useState } from 'react';

function ImageGenerator({url}) {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImgUrls] = useState([]);
  const generateUrls = async () => {
      try {
        const response = await fetch(`${url}/generate-img-urls?prompt=${prompt}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const urls = await response.json();

        console.log('Generated URLs:', urls);
        setImgUrls(urls);
       
      } catch (e) {
        console.error('Error fetching image URLs:', e);
      }

  };
  return (
    <div className='tab-content'>
      <h2>Image Generator</h2>
      <input type='text' value={prompt} onChange={(e)=> setPrompt(e.target.value)} placeholder='Enter prompt for image'></input>
      <button onClick={generateUrls}>Generate</button>

      <div className='image-grid'>
        {imageUrls.map((url, index) => ( 
          <img key={index} src={url} alt={`Generated ${index}`} />
        ))}

        {[...Array(4-imageUrls.length)].map((_, index) => (
          <div key={index+imageUrls.length} className='empty-image-slot'>
          </div>
        ))}
        
      </div>

      <p>Note: This component is not working because I could not find a free image generating model. Although it will show cute cat pictures when you try to generate. </p>
      </div>
  );
}

export default ImageGenerator;