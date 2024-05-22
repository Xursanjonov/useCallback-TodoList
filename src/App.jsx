import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layout from './layout'
// import Home from './pages/home/Home'
import TodoList from './pages/todo-list/TodoList'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<TodoList />} />
        {/* <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route> */}
      </Routes>
    </Fragment>
  )
}

export default memo(App)