import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const url = 'http://localhost:3004/employees';

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        (async () => {
            setEmployees((await axios.get(url)).data);
        })();
    }, []);

    return (
        <div className="App">
            <h1>Site that reads SQLite</h1>
            <h2>There are {employees.length} employees.</h2>

            {employees.map((employee) => {
              return <div className="employee">{employee.FirstName} {employee.LastName}</div>;
            })}
        </div>
    );
}

export default App;
