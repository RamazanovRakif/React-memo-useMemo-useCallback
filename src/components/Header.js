import React from "react";

const Header = (props) => {
	console.log("Rendering:Header component:))))");
	return (
		<div style={{ background: "#040404" }}>
			<img
				src={props.imgPath}
				alt='logo'
				style={{ width: "100%", height: 300 }}></img>
		</div>
	);
};

export default React.memo(Header);
