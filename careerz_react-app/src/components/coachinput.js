import React from 'react'

function Coachinput(props) {
  // console.log(props)
  return (
    <div>
      <form>
        <input className="input"
          type="text"
          placeholder="keyword search"
          value={props.value}
          onChange={props.handleChange}
        />
        <button
          type="submit"
          onClick={props.handleSubmit}>git</button>
      </form>

    </div>

  )
}
export default Coachinput