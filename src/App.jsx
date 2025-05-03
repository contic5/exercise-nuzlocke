import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccordionElement from './AccordionElement'

import { questions,answers } from './questions.jsx';


function App() 
{
  function handleVisible(index)
  {
    let visible_arr_copy=[...visible_arr];
    visible_arr_copy[index]=!visible_arr_copy[index];
    setVisibleArr(visible_arr_copy);
  }
  const [accordion_elements,setAccordionElements]=useState();
  const [visible_arr,setVisibleArr]=useState(new Array(answers.length).fill(false));
  
  useEffect(()=>
  {
    let accordion_elements_temp=[];
    for(let i=0;i<questions.length;i++)
    {
      let accordion_element=<AccordionElement key={i} question={questions[i]} answer={answers[i]} visible={visible_arr[i]} handleVisible={handleVisible} index={i}> </AccordionElement>
      accordion_elements_temp.push(accordion_element);
    }
    setAccordionElements(accordion_elements_temp);
  },[visible_arr]);

  return (
    <>
      <h1>Exercise Nuzlocke</h1>
      {accordion_elements}
    </>
  )
}

export default App
