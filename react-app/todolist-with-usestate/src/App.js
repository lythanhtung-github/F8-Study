import { useState } from "react";

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    if (storageJobs != null) {
      return storageJobs;
    }
    return [];
  });

  const handleCLick = () => {
    if (job.trim()) {
      setJobs(prev => {
        const newJobs = [...prev, job];

        // Lưu trên local storage
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);
        return newJobs;
      });
      setJob('');
    } else {
      alert("Vui lòng nhập công việc");
    }
  }

  return (
    <div className="App" style={{ padding: 50 }}>
      <h2>Nhập công việc</h2>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleCLick}>Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
