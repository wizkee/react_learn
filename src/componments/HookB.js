import React, { useState,useEffect,useRef,useContext,useReducer,forwardRef,useImperativeHandle  } from "react";

console.log('React', React)


function ChildInputComponent(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () =>inputRef.current);
    return <input type="text" name="child input" ref={inputRef} />;
  }
  const ChildInput = forwardRef(ChildInputComponent);

  console.log('ChildInput', ChildInput)
  function InputBox() {
    const inputRef = useRef(null);
    useEffect(() =>{
      inputRef.current.focus();
    }, []);
    return (
      <div className='container'>
        <h3 className='sass-a'>sass-a</h3>
        <h4 className='less-a'>less-a</h4>
        <ChildInput ref={inputRef} />
      </div>
    );
  }

function TempA() {
    return (<InputBox  />)
}

export default TempA