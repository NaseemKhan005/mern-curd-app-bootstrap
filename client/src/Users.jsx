import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import editIcon from "../src/assets/edit.svg";
import deleteIcon from "../src/assets/delete.svg";
import addIcon from "../src/assets/add.svg";
import axios from "axios";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000")
			.then((response) => setUsers(response.data))
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	});

	return (
		<div className="d-flex vh-100 bg-info justify-content-center align-items-center">
			<div className="w-75 bg-white rounded p-3 overflow-auto vh-100">
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<th className="pt-3">{user._id.slice(0,4)}</th>
								<td className="text-capitalize pt-3">{user.name}</td>
								<td className="pt-3">{user.email}</td>
								<td className="pt-3">{user.age}</td>
								<td className="text-capitalize pt-3">{user.gender}</td>
								<td className="d-flex align-items-center gap-3">
									<Link to="/update">
										<button className="bg-success d-flex align-items-center gap-1">
											<img src={editIcon} alt="edit" />
											<span>Edit</span>
										</button>
									</Link>
									<button className="bg-danger d-flex align-items-center gap-1">
										<img src={deleteIcon} alt="delete" />
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="pt-3 mt-3">
					<Link
						to="/create"
						className="text-white w-full d-flex align-items-center justify-content-center bg-primary px-2 py-3 rounded-2"
					>
						<span className="pe-2">Add User</span>
						<img src={addIcon} alt="add" className="bg-white rounded-5" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Users;
