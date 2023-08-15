import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");


  return (
    <div>
      <h1>
        Mensaje desde backend: <span></span>
      </h1>
    </div>
    
  )
}

export default App
