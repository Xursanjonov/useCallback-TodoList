import React, { memo } from 'react'
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

const TodoListCard = ({ data, deleteTodos, updateValus, setShow, show }) => {

    let todosItems = data?.map(el => (
        <li key={el.id} className='w-[1120px] mx-auto flex flex-col rounded-lg text-black bg-blue-400'>
            <div className="px-5 py-2 flex items-center justify-between ">
                <div className='text-xl font-semibold italic'><span className='text-gray-600'>Title:</span> {el.title}</div>
                <div className="flex items-center justify-center gap-4">
                    <button className='btn text-xl btn-warning' onClick={() => updateValus(el)}> <FaPenToSquare /> </button>
                    <button className='btn text-white text-xl bg-red-500 border-red-500' onClick={() => deleteTodos(el.id)}> <FaTrashCan /> </button>
                    <button className='w-[110px] font-bold btn text-black btn-outline'
                        onClick={() => setShow(el.id)}
                        onDoubleClick={() => setShow(0)}>{show === el.id ? '2 Click' : 'Click'} Me </button>
                </div>
            </div>
            {show === el.id ? (
                <div className='px-5 py-2 flex flex-col justify-between font-semibold text-md rounded-b-lg text-white bg-blue-600'>
                    <div className="flex items-cener justify-start gap-10">
                        <p> <span className='me-2 font-bold text-black'>Status:</span> {el.status}</p>
                        <p> <span className='me-2 font-bold italic text-black'>Day:</span> {el.day}</p>
                    </div>
                    <p className='flex items-center justify-between italic'>
                        <div className="flex items-center justify-center gap-3"> <span className='font-bold text-black'>Text:</span> {el.text} </div> <sub className='text-black'>{el.time}
                        </sub></p>
                </div>) : <></>
            }
        </li>
    ))
    return (
        <div className='w-[1120px] my-5 flex flex-col gap-3'>
            {todosItems}
        </div>
    )
}

export default memo(TodoListCard)








let initialState = {
    id: null,
    title: "uchrashuv",
    text: "laylo gul",
    status: "juda muhim", // ["muhim", "shart emas", ]
    time: ""
}