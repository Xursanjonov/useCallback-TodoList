import React, { memo } from "react";

const TodoListForm = ({ updateTodos, formData, getValue, createTodos, selectedValue, setSelectedValue }) => {
  const handleCreateTodos = e => {
    e.preventDefault()
    if (formData.id) {
      updateTodos(formData);
    } else {
      let date = new Date()
      formData.id = date.getTime()
      formData.time = `${date.getHours()}:${date.getMinutes()}`
      formData.status = selectedValue;
      createTodos(formData);
    }
  }

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  return (
    <form onSubmit={handleCreateTodos} className="mt-3 flex items-center justify-center gap-4">
      <input required
        className="input input-info border-2 font-semibold text-black bg-white"
        value={formData.title} onChange={(e) => getValue({ title: e.target.value })} type="text" placeholder="Title" />
      <input required
        className="input input-info border-2 font-semibold text-black bg-white"
        value={formData.text} onChange={(e) => getValue({ text: e.target.value })} type="text" placeholder="Text" />
      <input required
        className="input input-info border-2 font-semibold text-black bg-white"
        value={formData.day} onChange={(e) => getValue({ day: e.target.value })} type="text" placeholder="Day: 15.01.2004" />
      <div className='flex items-center justify-center gap-4 text-black'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <input type="radio" id="juda-muhim" name="options" value="juda muhim" checked={selectedValue === 'juda muhim'} onChange={handleChange} />
          <label htmlFor="juda-muhim">Juda Muhim</label>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <input type="radio" id="muhim" name="options" value="muhim" checked={selectedValue === 'muhim'} onChange={handleChange} />
          <label htmlFor="muhim">Muhim</label>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
          <input type="radio" id="shart-emas" name="options" value="shart emas" checked={selectedValue === 'shart emas'} onChange={handleChange} />
          <label htmlFor="shart-emas">Shart emas</label>
        </div>
      </div>
      <button className={`w-[120px] btn py-2 font-semibold btn-${formData.id ? 'warning' : 'success'}`}>{formData.id ? "save" : "create"}</button>
    </form>
  );
};

export default memo(TodoListForm);
