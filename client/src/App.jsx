import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Users />} />
				<Route path="/create" element={<CreateUser />} />
				<Route path="/update" element={<UpdateUser />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
