
import React, {useState } from 'react'
import { useRef} from 'react'
import Language from '../../models/Language'
import Card from "../ui/Card";
import classes from './Dropdown.module.css'
import Button from '@material-ui/core/Button';


const DropdownList:React.FC<{languages:Language[],onClose:()=>void,onAddLang:(enteredLang:string)=>void}>=props=>{
const [currValue,setCurrValue]=React.useState(props.languages[0].text)

const storageHandler=(language:string)=>{
    console.log('setting lang')
   props.onAddLang(language)
   props.onClose();
}
const changeHandler=(e:React.ChangeEvent<HTMLSelectElement>)=>{
e.preventDefault();
setCurrValue(e.target.value)
} 
const closeButtonHandler=()=>{
    props.onClose();
} 
return(
        
        <Card>
         <div>
        

     <select
    value={currValue}
     onChange={changeHandler}>
     {props.languages.map(lang=>{
         return <option value={lang.text} key={lang.id}>{lang.text}</option>
     })}
     </select>
     <div><Button variant="outlined" color="primary" onClick={closeButtonHandler}>Close</Button>
     <Button variant="contained" color="primary"className={classes.btn} onClick={()=>storageHandler(currValue)}>Add</Button>
    </div>
      </div>
     </Card>

    )
}

export default DropdownList;
