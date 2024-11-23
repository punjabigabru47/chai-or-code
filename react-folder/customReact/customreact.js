// method to render....

function customRender(reactElement, container) {
	/*// create domElement.
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	// setAttribute...
	domElement.setAttribute("href", reactElement.props.href);
	domElement.setAttribute("target", reactElement.props.target);

	container.appendChild(domElement);  */

	// better version...

	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	for (const prop in reactElement.props) {
		if (prop === "children") continue;
		domElement.setAttribute(prop, reactElement.props[prop]);
	}

	container.appendChild(domElement);
}

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},

	children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

// need a method to render reactElement into root.....
// needs to param which element to render and where to inject
customRender(reactElement, mainContainer);
