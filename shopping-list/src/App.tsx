import { useState } from 'react';
import './App.css';

function App() {
   const [items, setItems] = useState<string[]>(['Apples', 'Milk', 'Oreos', 'Orange Juice']);
   const [inputValue, setInputValue] = useState('');
   const [filter, setFilter] = useState('');

   function addItem(e: React.FormEvent) {
  e.preventDefault();

  if (inputValue === '') {
    alert('Please add an item');
    return;
  }

  setItems([...items, inputValue]);
  setInputValue('');
}
  function removeItem(indexToRemove: number) {
  setItems(items.filter((_, index) => index !== indexToRemove));
}
  function clearItems() {
  setItems([]);
}
  const filteredItems = items.filter(item =>
  item.toLowerCase().includes(filter.toLowerCase())
);
  return (
    <div className="container">
      <header>
        <h1>Shopping List</h1>
      </header>

      <form onSubmit={addItem}>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="Enter Item"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">Add Item</button>
        </div>
      </form>

      <div className="filter">
        <input
          type="text"
          className="form-input-filter"
          placeholder="Filter Items"
          value={filter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
        />
      </div>

      <ul className="items">
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remove-item btn-link text-red" onClick={() => removeItem(index)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </ul>

      <button className="btn-clear" onClick={clearItems}>Clear All</button>
    </div>
  );
}

export default App;