import React from 'react'
import PropTypes from 'prop-types'
import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!text){
            alert("Please add a task");
            return;
        }

        onAdd({text, day, reminder});

        setText('');
        setDay("");
        setReminder("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="relative z-0 mb-6 w-full group">
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text" name="task" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="task" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Task</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input value={day} onChange={(e)=> setDay(e.target.value)}  type="text" name="datetime" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="datetime" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Day & Time</label>
            </div>
            <div className="form-check form-switch">
                <input value={reminder} checked={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}  className="form-check-input appearance-none w-9  rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-green-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckChecked">set reminder</label>
            </div>
            <input type="submit" value="Save task" className='w-full px-2 py-3 bg-green-400 text-white text-2xl cursor-pointer font-bold' />
        </form>
    )
}

AddTask.propTypes = {}

export default AddTask