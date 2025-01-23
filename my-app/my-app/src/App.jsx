
import "./App.css";
import { useEffect, useState } from "react";

import { ThemeContext } from "./contexts/theme";
import Body from "./components/Body";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Products from "./components/Products";



function App() {
  const [theme, setTheme] = useState('Light')
  const [count,setCount] = useState(0);

  useEffect(() => { document.body.className = theme }, [theme])
  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
    setCount(count+1)
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
        count: count,
        setCount: setCount,
      }}
    >
      <Header />

      {/* <div> App Component</div>
      <Counter /> */}
      <Products />
    </ThemeContext.Provider>
  );
}

      export default App;