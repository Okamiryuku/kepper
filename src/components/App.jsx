import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [toDo, setToDo] = useState([]);

    function addNote(note) {
        setToDo(prevToDo => {
            return [...prevToDo, note];
        });
    }

    function deleteNote(id) {
        setToDo(prevToDo => {
        return prevToDo.filter((toDo, index) => {
        return index !== id;
        });
    });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {toDo.map((task, index) => (
                <Note 
                key={index} 
                id={index} 
                title={task.title} 
                content={task.content} 
                onDelete={deleteNote}
                />))}
            <Footer />
        </div>
    );
}

export default App;
