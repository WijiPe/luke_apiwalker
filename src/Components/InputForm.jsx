import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'


const InputForm =() =>{
    const [Input, setInput] = useState("")
    const [Id, setId] = useState("")
    const history = useHistory();

    const submitHandler=(e)=>{
        e.preventDefault()
        history.push(`/${Input}/${Id}`)
    }

    return(

        <form onSubmit={submitHandler}>
            <select name="Input" onChange = {e=>setInput(e.target.value)}>
                <option value="" >Search for:</option>
                <option value="people">people</option>
                <option value="planets">planet</option>
                <option value="starships">starships</option>
            </select>
            <label>ID</label>
            <input type="number" onChange={(e) => setId(e.target.value)}/>
            <button>Search</button>
        </form>

    )

} 


export default InputForm;