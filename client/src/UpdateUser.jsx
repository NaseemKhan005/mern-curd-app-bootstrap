import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");

	useEffect(() => {
		axios
			.get(`https://mern-curd-app-bootstrap-api.vercel.app/getUser/${id}`)
			.then((response) => {
				setName(response.data.name);
				setEmail(response.data.email);
				setAge(response.data.age);
				setGender(response.data.gender);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [id]);

	const update = (e) => {
		e.preventDefault();
		axios
			.put(`https://mern-curd-app-bootstrap-api.vercel.app/updateUser/${id}`, {
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
				<form onSubmit={update}>
					<h4 className="border-bottom pb-3 mb-3">Update User</h4>

					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter your name"
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
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
							value={age}
							onChange={(e) => setAge(e.target.value)}
							placeholder="Enter your age"
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
							value={gender}
							onChange={(e) => setGender(e.target.value)}
							placeholder="Enter your gender"
						/>
					</div>

					<button type="submit" className="btn btn-success">
						update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateUser;
