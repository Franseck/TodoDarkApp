import TodoList from "./components/TodoList"
import Header from "./components/Header"
import "./index.css";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import React, { useState } from 'react';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
<div className={`${darkMode ? 'dark' : 'light'} mode-container`}>
<Toggle darkMode={darkMode} setDarkMode={setDarkMode}/>
     <Header />
<TodoList />
<Footer />
</div>


  )
}

export default App
