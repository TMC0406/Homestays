import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slides/couterSlides";
const HomePage = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counterSlice.counter);
  return (
    <div>
      <h1>HomePage</h1>
      {/* <h1>counter:{counter} </h1> */}
      <div>
        <button onClick={() => dispatch(decrement(1000))}>Decrement</button>
        <button onClick={() => dispatch(increment(1000))}>Increment</button>
      </div>
    </div>
  )
}

export default HomePage