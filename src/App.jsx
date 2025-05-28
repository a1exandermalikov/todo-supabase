import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { ListItem } from './components/ListItem/ListItem'
import { supabase } from '../lib/supabaseClient'

function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		document.title = 'ToDo Supabase'
		fetchTasks()
	}, [])

	const fetchTasks = async () => {
		const { data, error } = await supabase
			.from('todos')
			.select('*')
			.order('id', { ascending: false })

		if (error) {
			console.error('Ошибка загрузки задач:', error)
		} else {
			setTasks(data)
		}
	}

	const handleNewTask = async newTask => {
		const { error } = await supabase.from('todos').insert([newTask])
		if (error) {
			console.error('Ошибка при добавлении задачи:', error)
		} else {
			fetchTasks()
		}
	}

	const handleDelete = async id => {
		const { error } = await supabase.from('todos').delete().eq('id', id)
		if (error) {
			console.error('Ошибка при удалении:', error)
		} else {
			setTasks(prev => prev.filter(task => task.id !== id))
		}
	}

	return (
		<>
			<Header onTaskAdded={handleNewTask} />
			<main>
				<ul>
					{tasks.map(task => (
						<ListItem
							key={task.id}
							id={task.id}
							text={task.text}
							onDelete={handleDelete}
						/>
					))}
				</ul>
			</main>
		</>
	)
}

export default App
