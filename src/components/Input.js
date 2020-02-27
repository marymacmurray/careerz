import React from 'react'

function Input(props) {
  // console.log(props)


  //email form handleSubmit
  // handleSubmit = async (event) => {
  //   console.log('inside Email handleSubmit')
  //   event.preventDefault()
  // }

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
export default Input