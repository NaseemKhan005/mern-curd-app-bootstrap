import { useState } from "react";
import editIcon from "../src/assets/edit.svg";
import deleteIcon from "../src/assets/delete.svg";

const Users = () => {
	const [users, setusers] = useState([
		{
			id: 1,
			name: "Naseem Khan",
			email: "naseemkhan@gmail.com",
			age: 20,
			gender: "male",
		},
	]);

	return (
		<div className="d-flex vh-100 bg-info justify-content-center align-items-center">
			<div className="w-75 bg-white rounded p-3">
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
							<tr key={user.id}>
								<th className="pt-3">{user.id}</th>
								<td className="text-capitalize pt-3">{user.name}</td>
								<td className="pt-3">{user.email}</td>
								<td className="pt-3">{user.age}</td>
								<td className="text-capitalize pt-3">{user.gender}</td>
								<td className="d-flex align-items-center gap-3">
									<button className="bg-success d-flex align-items-center gap-1">
										<img src={editIcon} alt="edit" />
										<span>Edit</span>
									</button>
									<button className="bg-danger d-flex align-items-center gap-1">
										<img src={deleteIcon} alt="delete" />
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
