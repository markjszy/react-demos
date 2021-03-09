import Greeting from './components/greeting.js';
import EmployeeWidget from './components/employee-widget';

function App() {
  return (
    <div>
      <div>
        <Greeting name="Mark" />
      </div>
      <div>
        <EmployeeWidget />
      </div>
    </div>
    
  );
}

export default App;
