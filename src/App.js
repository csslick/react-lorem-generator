import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setText([]); // 배열 초기화
    let _text = []; // 배열 버퍼
    _text = data.slice(0, count); // 문단수 만큼 생성 
    setText(_text);
  }

  return (
    <section>
      <h1>LOREM IPSUM Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">문단수:</label>
        <input 
          type="number" 
          name="amount" 
          id="amount" 
          value={count} 
          onChange={(e)=>{setCount(e.target.value)}}
          min="1"
          max={data.length}
        />
        <button type="submit">생성하기</button>
      </form>
      <article>
        {
          text.map((item, key) => {
            return (
              <p key={key}>{item}</p>
            )
          })
        }
      </article>
    </section>
  )

}

export default App;
