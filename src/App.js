import logo from './logo.svg';
import './App.css';

const addPosts = async (title, body) => {
  await fetch('http://127.0.0.1:5000/image_generation', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: Math.random().toString(36).slice(2),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

addPosts("", "")

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
