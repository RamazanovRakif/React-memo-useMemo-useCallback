import React from "react";

const List = ({ userList }) => {
	console.log("Render: List");

	return (
		<ul style={{ display: "flex", listStyle: "none" }}>
			{userList.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

const ListItem = React.memo((props) => {
	console.log("Render: ListItem");
	return (
		<li style={{ border: "1px solid black", padding: 20 }}>
			{props.item.name}
		</li>
	);
});

export default React.memo(List);


