// import React, { useState } from "react";
// import Header from "./components/Header";
// import img from "./assets/images/1.jpg";

// function App() {
// 	const [count, setCount] = useState(0);

// 	const increase = () => {
// 		setCount((count) => count + 1);
// 	};

// 	return (
// 		<div>
// 			<Header imgPath={img} />
// 			<div
// 				style={{
// 					display: "flex",
// 					alignItems: "center",
// 					flexDirection: "column",
// 					marginTop: 20,
// 				}}>
// 				<button onClick={increase} style={{padding:'15px 25px',}}>Clikle gelsin</button>
// 				<p style={{fontSize:'24px', color:"red"}}>Count: {count}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default App;


import React, { useState, useEffect, useMemo,useCallback } from "react";
import List from "./components/List";
import ClearButton from "./components/ClearButton";

function App() {
	const [userList, setUserList] = useState([]);
	const [text, setText] = useState("");
	const [search, setSearch] = useState("");


	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUserList(data));
	}, []);

	const handleText = (event) => {
		setText(event.target.value);
	};

	const handleSearch = () => {
		setSearch(text);
	};

	const filteredUsers = useMemo(
		() =>
			userList.filter((user) => {
				return user.name.toLowerCase().includes(search.toLowerCase());
			}),
		[search, userList]
	);

	const clearSearch = useCallback(() => {
		setSearch("");
		setText("");
	}, []);
	
	return (
		<div>
			<hr />
			<div>
				<div
					style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
					<input type='text' value={text} onChange={handleText} />
					<button type='button' onClick={handleSearch}>
						Search
					</button>
				</div>
				<List userList={filteredUsers} />
			</div>

			<ClearButton handleClear={clearSearch} />
		</div>
	);
}

export default App;