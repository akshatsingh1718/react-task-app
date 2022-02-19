import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div onDoubleClick={()=>onToggle(task.id)} className={`${task.reminder ? 'bg-gray-200':'bg-green-200'} px-4 py-2 text-center m-1 container mx-auto`}>
        <h3>
            {task.text} <FaTimes onClick={()=>onDelete(task.id)} />
        </h3>
    </div>
  )
}

Task.propTypes = {}

export default Task