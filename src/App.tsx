import React , { useState } from 'react'
import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import Button from '@material-ui/core/Button';


const LANGUAGES=[
  {id:'1',text:'English'},
  {id:'2',text:'Swedish'},
  {id:'3',text:'German'},
  {id:'4',text:'French'},
  {id:'5',text:'Spanish'}

]

function App() {
  const [add,isAdd]=useState(false)
  const [lang,setLang]=useState('')
  const addHandler=()=>{
    isAdd(true)
  }
  const addLangHandler=(selectedLang:string)=>{
    setLang(selectedLang)
    localStorage.setItem('lang',selectedLang)
  }
  const closePopupHandler=()=>{
    isAdd(false)
  }
  return (
    <div className='App'>
      {add && <Dropdown languages={LANGUAGES} onClose={closePopupHandler} onAddLang={addLangHandler}/> }
     {!add && <Button variant="outlined" color="primary" onClick={addHandler}>ADD Language</Button> }
      {`${localStorage.getItem('lang')} ${lang} stored in localstorage`}
    </div>
  );
}

export default App;
