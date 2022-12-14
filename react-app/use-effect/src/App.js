import { useState } from 'react';
import Content from './Content';
import Count from './Count';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" style={{ padding: 50 }}>
      <button onClick={() => (setShow(!show))}>Show</button>
      {show && <><Count />
        <Content />
      </>
      }

    </div >
  );
}

export default App;
