import { forwardRef, useState } from 'react'
import '../../styles/listItem.css'

export const ListItem = forwardRef(({ text, onDelete, id, ...rest }, ref) => {
	const [delHover, setDelHover] = useState(false)

	return (
		<li
			className={`list-item${delHover ? ' delHover' : ''}`}
			ref={ref}
			{...rest}
		>
			<p>{text}</p>
			<button
				onClick={() => onDelete(id)}
				onMouseEnter={() => setDelHover(true)}
				onMouseLeave={() => setDelHover(false)}
			>
				<img src='./assets/icons/delete.png' alt='удалить' />
			</button>
		</li>
	)
})
