import logo from './logo.svg';
import './App.css';
import {students} from './data/StudentsDb';
function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <hr></hr>
      <table>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
