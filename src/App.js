import './App.css';
import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "success")
      // document.title = "Dark Mode" -> can be used to dynamically adjust title of the webpage
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
