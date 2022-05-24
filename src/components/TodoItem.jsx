import React from "react"
import style from "./todoitem.module.css"

const TodoItem = ({todoitem})=>{

    return(
        <div className={style.divStyle}>
            {todoitem}
            <input className={style.setInputRadio} type="radio" />
        </div>
    )
}

export {TodoItem}

