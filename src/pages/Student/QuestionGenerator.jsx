import { useState } from 'react';
import Sidebar from './Sidebar';
import { TextField, Button, Typography } from '@mui/material';
import '../../Styles/QuestionGenerator.css'; 

const QuestionGenerator = () => {
  const [subject, setSubject] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerate = async () => {
    const res = await fetch('http://localhost:5000/api/questions/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, classLevel, topic, numQuestions }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    setQuestions(data.questions);
  };

//   const ExamSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-generator-container">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="question-generator-card" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
        <Typography variant="h5" gutterBottom align="center">
          Question Generator
        </Typography>

        <div className="form-group">
          <TextField label="Subject" fullWidth value={subject} onChange={e => setSubject(e.target.value)} />
          <TextField label="Class" fullWidth value={classLevel} onChange={e => setClassLevel(e.target.value)} />
          <TextField label="Topic" fullWidth value={topic} onChange={e => setTopic(e.target.value)} />
          <TextField type="number" label="No. of Questions" fullWidth value={numQuestions} onChange={e => setNumQuestions(e.target.value)} />
          <Button variant="contained" color="primary" onClick={handleGenerate}>Generate</Button>
        </div>

        {questions.length > 0 && (
          <div className="generated-questions">
            <Typography variant="h6">Generated Questions:</Typography>
            <ul>
              {questions.map((q, i) => {
                const parts = q.split(/\n/);
                const questionText = parts[0];
                const options = parts.slice(1);

                return (
                    <li key={i} className="question-block">
                    <div className="question-text">{questionText}</div>
                    {options.map((opt, idx) => (
                        <div key={idx} className="option-text">{opt}</div>
                    ))}
                    </li>
                );
                })} 
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionGenerator;
