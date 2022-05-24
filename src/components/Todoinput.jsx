import React from "react"
import styles from "./todo.module.css"

const TodoInput = ({addTodo})=>{

    const [value,setValue] = React.useState("")
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const addData = ()=>{
        addTodo(value)
        setValue("")
    }
    return(
        <div>
            <input className={styles.inputSet} value={value} type="text" placeholder="Enter Task" onChange={handleChange} />
            <button className= {styles.buttonSet} onClick={addData}>+</button>
        </div>
    )

}

export  {TodoInput}