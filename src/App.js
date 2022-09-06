import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero';
import Homepage from './pages/Homepage';

function App() {
  const [count, setCount] = useState(0);
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div className='app'>
      {/* <h4>{count}</h4>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Up</button>
      <Hero name='Acer Nitro 5' /> */}
      <Homepage />
    </div>
  )
}
export default App;