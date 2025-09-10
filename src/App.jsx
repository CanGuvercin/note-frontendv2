import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Redux Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
