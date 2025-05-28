import { useRef, useState } from 'react'
import '../../styles/header.css'

export function Header({ onTaskAdded }) {
	const input = useRef(null)
	const searchField = useRef(null)
	const [loading, setLoading] = useState(false)

	const addTask = async () => {
		if (!input.current.value.trim()) return

		setLoading(true)
		await onTaskAdded({ text: input.current.value.trim() })
		input.current.value = ''
		setLoading(false)
	}

	return (
		<header>
			<div className='logo'>
				<img src='./assets/content/logo.png' alt='logo' />
				<h1>
					ToDo Supabase <span>by malikovdev</span>
				</h1>
			</div>
			<div ref={searchField} className='search-field'>
				<input
					ref={input}
					type='text'
					onFocus={() => searchField.current.classList.add('focused')}
					onBlur={() => searchField.current.classList.remove('focused')}
					placeholder='new task...'
					onKeyDown={e => {
						if (e.key === 'Enter') addTask()
					}}
					disabled={loading}
				/>
				<button onClick={addTask} disabled={loading}>
					<img src='./assets/icons/add.png' alt='add' />
				</button>
			</div>
		</header>
	)
}
