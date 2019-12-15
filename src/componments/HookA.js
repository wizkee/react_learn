import React, { useState,useEffect,useRef  } from "react";


let timer = null;
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() =>{
    document.title = "componentDidMount" + count;
  },[count]);

  useEffect(() =>{
    timer = setInterval(() =>{
      setCount(new Date().getTime());
    }, 1000);
    return () =>{
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() =>clearInterval(timer)}>clear</button>
    </div>
  );
}
  function TempA() {
    const  [val,setVal] = useState('aa')
    let nameRef = useRef(null);

    useEffect((e)=>{
        console.log('nameRef', nameRef,val)
    },[val])

    return (
    <>
        <input ref={ nameRef } value={val} onChange={ e=>setVal(e.target.value) } />
        <Example  />
    </>)
  }

export default TempA