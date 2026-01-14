import { useState } from 'react'; // Import the useState hook from React for updating {num}.
import './App.css'; // Import the CSS styling.

function App() {
  // Declare a state variable, 'num', and its set function 'setNum' with a default state of '0'.
  const [num, setNum] = useState(0);

  return (
    // The main container for the app using the default CSS styling.
    <div className='app-container'>
      {/* Display current value of 'num'. */}
      <h1 className='counter-heading'>Current number: {num}</h1>

      {/* Container to allow adding/subtracting buttons. */}
      <div className='button-container'>
        {/* Increment Button */}
        <button
          className='counter-button'
          onClick={() => setNum(num + 1)}
          >
            Add 1
          </button>

        {/* Decrement Button */}
        <button
          className='counter-button'
          onClick={() => setNum(num - 1)}
          >
            Sutract 1
          </button>
      </div>
      
    </div>
  );
}

export default App;
