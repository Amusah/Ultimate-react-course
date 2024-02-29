import tick from './assets/tick.svg';
import trash from './assets/trash.svg'



function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Task />
    </div>
  );
}

function Header(){
  return (
    <h1 className="header">Just do it.</h1>
  )
}

function Form(){
  return (
    <form className="form">
      <input type="text" placeholder="Add a task"/>
      <button>I Got This!</button>
    </form>
  )
}

function Task(){
  return (
    <>
      <ul>
        <li className="task">
          <p>21 days of code</p>
          <div>
            <span className='icon'>
              <img src={tick} alt="Check-icon" />
            </span>
            <span className='icon'>
              <img src={trash} alt="trash-icon" />
            </span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default App;
