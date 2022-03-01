import ConceptosBasicos from "./component/ConceptosBasicos";
import CrudApi from "./component/CrudApi";
import SongSearch from "./component/songSearch";


function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a href="https://reactrouter.com/web/guides/quick-start" target="_back"
      rel="noreferrer"
      >
        Documentacion
      </a>
      <SongSearch/>
      <hr/>
     {/*  <CrudApi/> */}
      <hr/>
     {/*  <ConceptosBasicos/> */}
    </div>
     
  );
}

export default App;
