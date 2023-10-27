import { useState } from 'react';
import './App.css';

function App() {

  const [backGroundColor,setBackGroundColor] = useState('')

  const backGroundColorChange = (color) => {
    setBackGroundColor(color)
  }
  

  return (
    <>
      <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:backGroundColor}}>
        <h1>Background Color Change</h1>
        <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:"4rem",gap:'2rem'}}>
          <button onClick={() => backGroundColorChange('red')} style={{border:'1px solid red',backgroundColor:'red',color:"white",padding:'0.6rem 1rem',borderRadius:"8px"}}>Red</button>
          <button onClick={() => backGroundColorChange('blue')} style={{border:'1px solid blue',backgroundColor:'blue',color:"white",padding:'0.6rem 1rem',borderRadius:"8px"}}>Blue</button>
          <button onClick={() => backGroundColorChange('green')} style={{border:'1px solid green',backgroundColor:'green',color:"white",padding:'0.6rem 1rem',borderRadius:"8px"}}>Green</button>
          <button onClick={() => backGroundColorChange('yellow')} style={{border:'1px solid yellow',backgroundColor:'yellow',color:"white",padding:'0.6rem 1rem',borderRadius:"8px"}}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
