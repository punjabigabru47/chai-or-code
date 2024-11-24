/* eslint-disable react/no-unknown-property */
import "./App.css";
import Card from "./components/Card";

function App() {
	let myObj = {
		username: "sunny",
		age: 22,
	};
	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl">
				Tailwind test
			</h1>
			<Card channel="chai" obj={myObj} />
		</>
	);
}

export default App;
