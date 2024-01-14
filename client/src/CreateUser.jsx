const CreateUser = () => {
	return (
		<div className="d-flex vh-100 bg-info justify-content-center align-items-center">
			<div className="w-75 bg-white rounded p-3">
				<form>
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
