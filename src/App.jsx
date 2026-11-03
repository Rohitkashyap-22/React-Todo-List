import "./App.css";
import {useState} from 'react';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleData = (e) => {
    setItem(e.target.value)
  }
  
  function adder() {
    setList((data) => {
      const updatedList = [...data, item];
      return updatedList;
    });
    setItem("");
  }
  
  function remover(i){
    const updatedList = list.filter((elem, id) => {
      return (i != id);
    });
    setList(updatedList)
  }

  function removeAll(i) {
    setList([]);
  }

  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <input type="text" placeholder=" Add Item" value={item} onChange={handleData} />
        <button onClick={adder}> Add </button>
        <h1> Here is your List</h1>

        {list != [] && list.map((data, i) => {
          return (
            <>
              <div key={i} className="item_section">
                <div className="item"> {data} </div>
                <button onClick={() => remover(i)}>Remove</button>
              </div>
            </>
          );
        })}

        {list.length > 0 && <button onClick={()=>removeAll()}>Remove All</button>}
      </div>
    </>
  );
}

export default App;
