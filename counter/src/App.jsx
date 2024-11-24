/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(10);

	const addValue = () => {
		console.log("clicked:", counter);
		//counter = counter + 1;
		// setCounter(counter) or below...
		setCounter(counter + 1);
	};

	const removeValue = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<h1>coffee aur code</h1>
			<h2>counter value: {counter}</h2>

			<button onClick={addValue}>Add value</button>
			<br />
			<button onClick={removeValue}>Remove value</button>
		</>
	);
}

export default App;
