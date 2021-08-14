import React, { useState } from 'react'

function App() {
	const [visible, setVisible] = useState(true)

	return (
		<div className="App">
			{/* Render this component conditionally */}
			<div id="contents">
				codedamn helps me to learn interactively by building these apps
				inside browser. Fun, isn't it?
			</div>

			{/* the label of this button should be dynamic */}
			<button>hide</button>
		</div>
	)
}

export default App
