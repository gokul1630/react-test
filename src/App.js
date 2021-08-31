import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>test</h1>
			<h2 data-testid='counter' >{count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment Counter</button>
		</div>
	)
}

export default App
