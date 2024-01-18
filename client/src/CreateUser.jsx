import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");

	const Submit = (e) => {
		e.preventDefault();
		axios
			.post("mongodb://localhost:27017/createUser", {
				name,
				email,
				age,
				gender,
			})
			.then((result) => {
				console.log(result.data);
				window.location.href = "/";
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="d-flex vh-100 bg-info justify-content-center align-items-center">
			<div className="w-75 bg-white rounded p-3">
				<form onSubmit={Submit}>
					<h4 className="border-bottom pb-3 mb-3">Add User</h4>

					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter your name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter your email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="age" className="form-label">
							Age
						</label>
						<input
							type="number"
							className="form-control"
							id="age"
							placeholder="Enter your age"
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="gender" className="form-label">
							Gender
						</label>
						<input
							type="text"
							className="form-control"
							id="gender"
							placeholder="Enter your gender"
							onChange={(e) => setGender(e.target.value)}
						/>
					</div>

					<button type="submit" className="btn btn-success">
						Add User
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateUser;
