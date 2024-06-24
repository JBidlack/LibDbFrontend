import './App.css'

function App() {


  return (
        <div className="mainDiv">
          <div className="login">
            <h1 className="title">Login</h1>
            <h3 className="subTitle">Sign-In or join as a guest</h3>
            <div>
              <label htmlFor="un">Username: </label>
              <input type="text" className="un" placeholder="Username" />
            </div>
            <div>
              <label htmlFor="pw">Password: </label>
              <input type="password" className="pw" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
          </div>
        </div>
  )
}

export default App


{/* <div id="mainDiv">
<div className="login">
    <h1 className="title">Log in</h1>
    <h3 className="subTitle">Sign-In or join as a guest</h3>
  <div className="un">
    <label htmlFor="username" className="un">Username: </label>
    <input type="text" />
  </div>
  <div className="pw">
    <label htmlFor="password" className="pw">Password: </label>
    <input type="password" />
  </div>
</div>
</div> */}
