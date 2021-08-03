import React, { memo } from "react";

const ClearButton = (props) => {
	console.log("Render: Clear Button");
	return (
		<div style={{ textAlign: "center", marginBottom: 10 }}>
			<button onClick={props.handleClear}>Clear list</button>
		</div>
	);
};

export default memo(ClearButton);
