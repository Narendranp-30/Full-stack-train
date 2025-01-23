import { useState } from 'react';
import '../styles/topbar.css';

const Topbar = (props) => {
  const [val, setVal] = useState('');

  const handleCategorySelection = (e) => {
    props.setSelectedCategory(e.target.value);
  };

  const changeItems = () => {
      props.setSearchItem(val);
  };

  return (
    <>
      <div className="topbar">
        <input 
          type="text" 
          placeholder='Search....' 
          onChange={(e) => setVal(e.target.value)} 
        />
        <button onClick={changeItems}>Search</button>
        <select onChange={handleCategorySelection}>
          <option value="">Select ...</option>
          {props.category.map((c) => (
            <option value={c} key={c}>{c}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Topbar;
