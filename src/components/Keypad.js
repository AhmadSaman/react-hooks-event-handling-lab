// Code Keypad Component Here
import React from "react";
function Keypad() {
	function handleChange() {
		console.log("Entering password...");
	}
	return (
		<input
			type="password"
			name="password"
			id="password"
			onChange={handleChange}
		/>
	);
}

export default Keypad;
