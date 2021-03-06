import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="conatiner">
     <h1>Online Dictionary</h1>
     <main>
      <Dictionary defaultKeyword="wine"/>
      </main>
     <hr/>
     <footer>
      <a href="https://github.com/elinkjellsson/react-dictionary" target="_blank" rel="noreferrer" id="open-source-link">Open-source code</a> 
      {" "}by Elin Kjellsson 
      </footer>
      </div> 
     </div>
  );
}


