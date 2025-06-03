import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../Styles/TaskScheduler.css';
import Sidebar from './Sidebar';

const TaskScheduler = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [view, setView] = useState('todo');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const addTask = (event) => {
        event.preventDefault();
        if (title && deadline) {
            setTasks([...tasks, { title, deadline, id: uuidv4() }]);
            setTitle('');
            setDeadline('');
        }
    };

    const completeTask = (taskId) => {
        const taskToComplete = tasks.find(task => task.id === taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
        setCompletedTasks([...completedTasks, taskToComplete]);
    };

    const deleteTask = (taskId, isCompleted) => {
        if (isCompleted) {
            setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
        } else {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    return (
        <div className="taskContainer">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
                <h1>My Tasks</h1>

                <div className="todo-wrapper">
                    <form onSubmit={addTask}>
                        <div className="todo-input">
                            <div className='todo-input-item'>
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter the task title' 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)} 
                                />
                            </div>
                            <div className='todo-input-item'>
                                <label>Deadline</label>
                                <input 
                                    type="datetime-local" 
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)} 
                                />
                            </div>
                            <div className='todo-input-item'>
                                <button type='submit' className='primaryBtn'>Add</button>
                            </div>
                        </div>
                    </form>

                    <div className="btn-area">
                        <button onClick={() => setView('todo')}>Todo</button>
                        <button onClick={() => setView('completed')}>Completed</button>
                    </div>

                    {view === 'todo' && (
                        <div className="todo-list">
                            <h2>Todo</h2>
                            {tasks.length > 0 ? (
                                tasks.map((task, index) => (
                                    <div className="todo-list-item" key={index}>
                                        <h3>{task.title}</h3>
                                        <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                                        <button onClick={() => completeTask(task.id)}>Completed</button>
                                        <button onClick={() => deleteTask(task.id, false)}>Delete</button>
                                    </div>
                                ))
                            ) : (
                                <p>No tasks to display</p>
                            )}
                        </div>
                    )}

                    {view === 'completed' && (
                        <div className="todo-list">
                            <h2>Completed</h2>
                            {completedTasks.length > 0 ? (
                                completedTasks.map((task, index) => (
                                    <div className="todo-list-item" key={index}>
                                        <h3>{task.title}</h3>
                                        <p>Deadline: {new Date(task.deadline).toLocaleString()}</p>
                                        <button onClick={() => deleteTask(task.id, true)}>Delete</button>
                                    </div>
                                ))
                            ) : (
                                <p>No completed tasks to display</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskScheduler;
