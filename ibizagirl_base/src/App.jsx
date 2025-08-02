import React from 'react'
import content from './data/content.json'

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>IbizaGirl.pics</h1>
      <p>Galería de imágenes AI. Haz clic para ver más.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {content.map((item, idx) => (
          <div key={idx}>
            <img
              src={`/censored/${item.censored}`}
              alt="preview"
              style={{ width: 200, borderRadius: 8 }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
