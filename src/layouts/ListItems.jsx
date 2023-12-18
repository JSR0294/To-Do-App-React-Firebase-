import React from 'react'
import Flex from './Flex'
import { IoTrashBinSharp } from "react-icons/io5";

const style = {
  li:`bg-slate-200 p-4 my-2 capitalize`,
  liComplete:` bg-slate-400 p-4 my-2 capitalize `,
  p:` font-normal text-base tracking-wide ml-3 cursor-pointer `,
  pCross:` line-through font-normal text-base tracking-wide ml-3 cursor-pointer `
}

const ListItems = ({toDo, toggleComplete, deleteTodo}) => {
  return (
    <li className={toDo.completed ? style.liComplete : style.li}>
        <Flex className={' justify-between items-center'}>
            <Flex className={'items-center'}>
            <input onChange={() => toggleComplete(toDo)} type="checkbox" checked={toDo.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(toDo)} className={toDo.completed ? style.pCross : style.p}>{toDo.text}</p>
            </Flex>
            <button onClick={() => deleteTodo(toDo.id)}><IoTrashBinSharp className=' text-base '/></button>
        </Flex>
    </li>
  )
}

export default ListItems