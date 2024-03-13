import React, { useState } from 'react'

const initalValue = {
  username: '',
  password: '',
  language: 'vn',
  going: false,
}

function App() {
  const [first, setfirst] = useState(initalValue)
  const [error, seterror] = useState('')

  const handleClick = (data) => {
    data.preventDefault()
    console.log(first)
    seterror(first.username === '' ? 'Please enter a username and password' : '')
  }

  const handleChangeCheck = (data) => {
    setfirst({ ...first, going: data.target.checked })
  }

  const handleChange = (data) => {
    let name = data.target.name
    let value = data.target.value
    setfirst({ ...first, [name]: value });
  }
  return (
    <div >
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label style={{ color: "red" }}>{error}</label>
        <input type="text" name='username' value={first.username} onChange={handleChange} placeholder='username' autoComplete='off' />
        <input type="text" name='password' value={first.password} onChange={handleChange} placeholder='password' autoComplete='off' />
        <label>
          <select name='language' value={first.language} onChange={handleChange}>
            <option value='vn'>VN</option>
            <option value='dn'>DN</option>
            <option value='qq'>QQ</option>
          </select>
        </label>
        <label>
          <input name='checkbox' type='checkbox' checked={first.going} onChange={handleChangeCheck} /> {/* checkbox get checked not value */}
          Where?
        </label>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div >
  );
}

export default App;
