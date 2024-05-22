import React, { memo, useState, useCallback } from 'react'
import TodoListForm from '../../components/todo-lists/TodoListForm'
import TodoListCard from '../../components/todo-lists/TodoListCard'

let initialState = {
    id: null,
    title: "",
    text: "",
    status: "",
    day: "",
    time: ""
}

const TodoList = () => {
    const [formData, setFormData] = useState(initialState)
    const [data, setData] = useState([])
    const [show, setShow] = useState(0)
    const [selectedValue, setSelectedValue] = useState('')

    let createTodos = useCallback((todos) => {
        setData(prev => ([...prev, todos]))
        setFormData(initialState)
    }, [data])
    let deleteTodos = useCallback((id) => {
        let filterData = data?.filter(el => el.id !== id)
        setData(filterData)
    }, [data])
    let updateTodos = useCallback((payload) => {
        let index = data?.findIndex(el => el.id === payload.id)
        data?.splice(index, 1, payload)
        setData([...data])
        setFormData(initialState)
    }, [data])
    let getValue = useCallback((payload) => {
        setFormData(p => ({ ...p, ...payload }))
    }, [])
    let updateValus = useCallback((payload) => {
        setFormData(payload)
    }, [])

    return (
        <section className='w-[1534px] overflow-scroll h-[100vh] mx-auto bg-white'>
            <div className="flex flex-col items-center justify-center text-black bg-white">
                <h2 className='text-4xl my-5 font-black text-blue-800'>Todo List</h2>
                <TodoListForm setSelectedValue={setSelectedValue} selectedValue={selectedValue}
                    formData={formData} createTodos={createTodos} updateTodos={updateTodos} getValue={getValue} />
                <TodoListCard show={show} setShow={setShow} updateValus={updateValus} deleteTodos={deleteTodos} data={data} />
            </div>
        </section>
    )
}

export default memo(TodoList)