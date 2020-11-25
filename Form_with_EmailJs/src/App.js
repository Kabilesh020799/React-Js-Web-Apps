import React from "react";
import "./App.css";
import emailjs from "emailjs-com";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6evpp5h",
        "template_mtmc2d8",
        e.target,
        "user_mwBwu7UjglI9ydLfin6Wf"
      )
      .then((res) => console.log(res));
    e.target.reset();
  };
  return (
    <div className="App">
      <form className="app__form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="app__formInput"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="app__formInput"
        />
        <input
          type="password"
          placeholder="Password"
          className="app__formInput"
          name="password"
        />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          className="app__formInput"
        />
        <input
          type="text"
          name="query"
          placeholder="Query"
          className="app__formInput"
        />
        <button type="submit" className="app__formSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
