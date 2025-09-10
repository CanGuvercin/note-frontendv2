import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "./noteSlice";

function NoteList() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => dispatch(deleteNote(note.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
