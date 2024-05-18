import "./App.css";
import Dropdown from "./Dropdown";
import Interval from "./Interval";
import NewCounter from "./NewCounter";
import ThemeContext from "./ThemeProvider";
function App() {
  return (
    <ThemeContext.Provider>
      <div className="App">
        <Dropdown />
        <Interval /> 
        <NewCounter />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
