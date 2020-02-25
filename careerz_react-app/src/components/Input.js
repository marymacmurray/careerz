import React from 'react'

function Input(props) {
  // console.log(props)
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="keyword search"
          value={props.value}
          onChange={props.handleChange}
        />
        <button
          type="submit"
          onClick={props.handleSubmit}>Submit</button>
      </form>

    </div>

  )
}
export default Input