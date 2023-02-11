import { useState } from 'react';

const LineBreak = () => <br />;

function App() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({});
	//const [showError, setShowError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const validateEmail = (email) => {
			const emailRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			return emailRegex.test(email);
		};

		const errors = {};

		if (!firstName) {
			errors.firstName = 'First name cannot be empty';
		}
		if (!lastName) {
			errors.lastName = 'Last name cannot be empty';
		}
		if (!password) {
			errors.password = 'Password cannot be empty';
		}
		if (!validateEmail(email)) {
			errors.email = 'Looks like this is not an email';
			console.log(errors.email);
		}
		setError(errors);
		console.log('submitted!!no errors!');
	};

	const handleBlur = (event) => {
		if (!event.target.validity.valid) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className="lg:flex flex-col-2 bg-intro-pattern-mobile lg:bg-intro-pattern-desktop font-poppins bg-primary-pink bg-cover text-white">
			<div className="flex pb-8 px-4">
				<div className="text-center lg:mt-40 lg:mb-40 lg:ml-40 lg:mr-20 ">
					<div className="pt-28 pb-8">
						<h1 className="text-3xl lg:text-5xl lg:text-left font-bold">
							Learn to code by watching others
						</h1>
					</div>
					<div className="pt-2 px-0 lg:text-left">
						<p className="text-base font-thin">
							See how experienced developers solve problems in real-time.
							Watching scripted tutorials is great, but understanding how
							developers think is invaluable.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-4 pb-2 px-4 lg:mt-40 lg:mb-40 lg:mr-40 lg:ml-20 lg:w-9/12">
				<div
					className="bg-accent-blue p-5 
				rounded-md shadow-xl m-1"
				>
					<div className="text-center lg:justify-center lg:flex">
						<p className="font-bold">Try it free 7 days&nbsp;</p>
						<LineBreak />
						<p>then $20/mo. thereafter</p>
					</div>
				</div>

				<div className="px-2 pt-6 pb-8 mb-4">
					<div className="bg-white shadow-xl rounded-md p-4">
						<form onSubmit={handleSubmit} className="lg:w-full">
							<div className="relative mb-2">
								<input
									className={`appearance-none border rounded w-full p-4 text-neutral-grayishblue focus:outline-none focus:shadow-outline mb-1 text-bold ${
										error.firstName ? 'border-red-500' : ''
									}`}
									id="firstName"
									type="text"
									placeholder={error.firstName ? '' : 'First name'}
									value={firstName}
									onBlur={handleBlur}
									onChange={(e) => setFirstName(e.target.value)}
								/>
								{error.firstName && (
									<>
										<span
											className="text-red-500 text-3xl absolute right-0"
											style={{ top: '20%', right: '0.75em' }}
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g fill="none" fill-rule="evenodd">
													<circle fill="#FF7979" cx="12" cy="12" r="12" />
													<rect
														fill="#FFF"
														x="11"
														y="6"
														width="2"
														height="9"
														rx="1"
													/>
													<rect
														fill="#FFF"
														x="11"
														y="17"
														width="2"
														height="2"
														rx="1"
													/>
												</g>
											</svg>
										</span>
										{error.firstName && (
											<p className="text-red-500 text-xs italic text-right pb-4">
												{error.firstName}
											</p>
										)}
									</>
								)}
							</div>

							<div className="relative mb-2">
								<input
									className={`appearance-none border rounded w-full p-4 text-neutral-grayishblue focus:outline-none focus:shadow-outline mb-1 text-bold ${
										error.lastName ? 'border-red-500' : ''
									}`}
									id="lastName"
									type="text"
									placeholder={error.lastName ? '' : 'Last name'}
									value={lastName}
									onBlur={handleBlur}
									onChange={(e) => setLastName(e.target.value)}
								/>
								{error.lastName && (
									<>
										<span
											className="text-red-500 text-3xl absolute right-0"
											style={{ top: '20%', right: '0.75em' }}
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g fill="none" fill-rule="evenodd">
													<circle fill="#FF7979" cx="12" cy="12" r="12" />
													<rect
														fill="#FFF"
														x="11"
														y="6"
														width="2"
														height="9"
														rx="1"
													/>
													<rect
														fill="#FFF"
														x="11"
														y="17"
														width="2"
														height="2"
														rx="1"
													/>
												</g>
											</svg>
										</span>
										{error.lastName && (
											<p className="text-red-500 text-xs italic text-right pb-4">
												{error.lastName}
											</p>
										)}
									</>
								)}
							</div>

							<div className="relative mb-2">
								<input
									className={`appearance-none border rounded w-full p-4 text-neutral-grayishblue focus:outline-none focus:shadow-outline mb-1 text-bold ${
										error.email ? 'border-red-500' : ''
									}`}
									id="email"
									type="text"
									placeholder={error.email ? '' : 'Email'}
									value={email}
									onBlur={handleBlur}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{error.email && (
									<>
										<span
											className="text-red-500 text-3xl absolute right-0"
											style={{ top: '20%', right: '0.75em' }}
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g fill="none" fill-rule="evenodd">
													<circle fill="#FF7979" cx="12" cy="12" r="12" />
													<rect
														fill="#FFF"
														x="11"
														y="6"
														width="2"
														height="9"
														rx="1"
													/>
													<rect
														fill="#FFF"
														x="11"
														y="17"
														width="2"
														height="2"
														rx="1"
													/>
												</g>
											</svg>
										</span>
										{error.email && (
											<p className="text-red-500 text-xs italic text-right pb-4">
												{error.email}
											</p>
										)}
									</>
								)}
							</div>

							<div className="relative mb-2">
								<input
									className={`appearance-none border rounded w-full p-4 text-neutral-grayishblue focus:outline-none focus:shadow-outline mb-1 text-bold ${
										error.passwoed ? 'border-red-500' : ''
									}`}
									id="password"
									type="password"
									placeholder={error.password ? '' : 'Password'}
									value={password}
									onBlur={handleBlur}
									onChange={(e) => setPassword(e.target.value)}
								/>
								{error.password && (
									<>
										<span
											className="text-red-500 text-3xl absolute right-0"
											style={{ top: '20%', right: '0.75em' }}
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g fill="none" fill-rule="evenodd">
													<circle fill="#FF7979" cx="12" cy="12" r="12" />
													<rect
														fill="#FFF"
														x="11"
														y="6"
														width="2"
														height="9"
														rx="1"
													/>
													<rect
														fill="#FFF"
														x="11"
														y="17"
														width="2"
														height="2"
														rx="1"
													/>
												</g>
											</svg>
										</span>
										{error.password && (
											<p className="text-red-500 text-xs italic text-right pb-4">
												{error.password}
											</p>
										)}
									</>
								)}
							</div>

							<div className="justify-center">
								<button
									className="bg-primary-green py-4 px-4 rounded uppercase align-center text-sm w-full font-bold mb-4"
									type="submit"
								>
									Claim your free trial
								</button>
							</div>
						</form>

						<div className="text-center lg:flex lg:justify-center">
							<p className="text-neutral-grayishblue text-xs">
								By clicking the button, you are agreeing to our &nbsp;
							</p>
							<a
								href="https://unsplash.com/photos/QvReUkUffVc"
								className="text-primary-red font-bold text-xs mb-4"
							>
								Terms and Services
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
