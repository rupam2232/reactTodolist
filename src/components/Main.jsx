import React, { useState, useRef, useEffect } from 'react'

const main = () => {

  const [tasks, setTasks] = useState([])

  const [inputval, setInputval] = useState("")
  const [showFinished, setshowFinished] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const input = useRef()
  const addButton = useRef()
  const editButton = useRef()

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTasks(todos)
    }
    setIsInitialLoad(false);
  }, [])


  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("todos", JSON.stringify(tasks));
    }
  }, [tasks, isInitialLoad]);

  const inputvaluechange = (e) => {
    setInputval(e.target.value)
  }

  const onEnterKey = (e) => {
    if (e.key === "Enter") {
      let buttons = e.target.parentElement.children
      let addButton = buttons[1]
      let editButton = buttons[2]
      if(addButton.classList.contains("block")){
        addButton.click()
      }else if(editButton.classList.contains("block")){
        editButton.click()
      }
    }
  }

  const addtask = () => {
    if (inputval.trim() !== "") {
      setTasks([...tasks, { completed: false, name: inputval }])
      setInputval("")
    }
  }

  const deleteTodo = (index) => {
    let newTodos = tasks.filter((_, i) => {
      return i !== index
    });
    setTasks(newTodos)
  }

  const editTodo = (index) => {
    addButton.current.classList.add("hidden")
    addButton.current.classList.remove("block")

    editButton.current.classList.remove("hidden")
    editButton.current.classList.add("block")
    setInputval(tasks[index].name)
    input.current.focus()
    editButton.current.setAttribute("id", index + "-button")
  }

  const editTask = (e) => {
    if (inputval.trim() !== "") {
      let index = e.target.id
      tasks.map((_, i) => {
        if (i === parseInt(index.slice(0, 1))) {
          let newtask = [...tasks]
          newtask[i].name = inputval
          setTasks(newtask)
        }
      })
    }
      setInputval("")
      editButton.current.classList.remove("block")
      editButton.current.classList.add("hidden")

      addButton.current.classList.add("block")
      addButton.current.classList.remove("hidden")
  }

  const completedTask = (e) => {
    let i = parseInt(e.target.id)
    let newtasks = [...tasks]
    newtasks[i].completed = !newtasks[i].completed
    setTasks(newtasks)
  }

  const showall = () => {
    setshowFinished(!showFinished)
  }
  const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);

  return (
    <main className='min-h-screen overflow-y-hidden bg-violet-50 flex '>
      <div className="container lg:w-[50vw] lg:h-[87vh] mx-auto h-[84vh] bg-violet-100 p-4 my-3 rounded-lg pb-9">
        <h1 className='text-center text-3xl font-bold mb-4'>TodoList - Manage your tasks at one place</h1>
        <h3 className='text-xl font-bold'>Add a Todo</h3>
        <div className="input flex flex-col sm:flex-row my-4 gap-3">
          <input type="text" ref={input} value={inputval} onKeyDown={onEnterKey} onChange={inputvaluechange} className='flex-1 px-5 py-1 rounded-xl outline-none' placeholder="Enter your task" />
          <button onClick={addtask} ref={addButton} className='block px-3 py-2 bg-violet-700 text-white font-bold rounded-2xl'>Save</button>
          <button onClick={editTask} ref={editButton} className='hidden px-3 py-2 bg-violet-700 text-white font-bold rounded-2xl'>Edit</button>
        </div>
        <label htmlFor="finish-tasks" className='flex gap-3 w-max'>
          <input type="checkbox" id='finish-tasks' checked={showFinished} onChange={showall} />
          <span>Show Finished</span>
        </label>
        <hr className='border border-violet-200 mx-4 my-4' />
        <h1 className='text-xl font-bold mb-4'>Your todos</h1>
        <div className="tasks h-[45%] flex flex-col gap-4 pb-4 overflow-y-auto">
          {tasks.length === 0 && <div>No Todos to display</div>}
          {allTasksCompleted && <div className='text-center text-green-600 font-bold'>You've completed all tasks!</div>}
          {tasks.map((task, index) => {
            return (showFinished || !task.completed) && <div key={index} className="task flex flex-col sm:flex-row gap-3">
              <label htmlFor={index} className='flex items-center gap-7 flex-1 overflow-x-hidden w-max'>
                <input type="checkbox" checked={task.completed} onChange={completedTask} id={index} />
                <p className={task.completed ? "line-through text-wrap" : "text-wrap"}>{task.name}</p>
              </label>
              <div className="functionality flex gap-2">
                <button onClick={() => deleteTodo(index)} className='bg-violet-600 font-bold text-white px-2 py-1 rounded-lg h-max w-max'>Delete</button>
                <button onClick={() => editTodo(index)} className='bg-violet-600 font-bold text-white px-2 py-1 rounded-lg h-max w-max'>Edit</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </main>
  )
}

export default main
