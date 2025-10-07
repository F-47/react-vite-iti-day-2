import { useState, useEffect } from "react";

function Dashboard() {
    const [count, setCount] = useState<number>(0);

    const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

    const [notes, setNotes] = useState<
    { id: number; text: string; done: boolean }[]
  >([
    { id: 1, text: "Finish Dashboard UI", done: false },
    { id: 2, text: "Review project structure", done: false },
    { id: 3, text: "Commit and push code", done: false },
  ]);

    useEffect(() => {
    let interval: number | undefined;
    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

    const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

    const toggleNoteDone = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Counter</h2>
          <p className="value">{count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
        <div className="card">
          <h2>Timer</h2>
          <p className="value">{seconds}s</p>
          <div className="buttons">
            {!isRunning ? (
              <button onClick={handleStart}>Start</button>
            ) : (
              <button onClick={handlePause}>Pause</button>
            )}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
        <div className="card">
          <h2>Notes</h2>
          <ul className="notes-list">
            {notes.map((note) => (
              <li
                key={note.id}
                className={`note-item ${note.done ? "done" : ""}`}
                onClick={() => toggleNoteDone(note.id)}
              >
                {note.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
