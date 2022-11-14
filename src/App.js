function App() {
	return (
		<>
			<body className="bg-intro-pattern-mobile font-poppins bg-primary-pink bg-cover text-white">
				<div className="pt-28 px-10 pb-5">
					<h1 className="text-2xl text-center font-bold">
						Learn to code by watching others
					</h1>
				</div>
				<div className="pt-5 px-10 pb-5 text-center">
					<p className="text-base font-thin">
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div className="pt-8 pb-2 px-8">
					<div className="bg-accent-blue p-5 text-center rounded-md shadow-xl">
						<p className="font-bold text-center">Try it free 7 days</p> then
						$20/mo. thereafter
					</div>
				</div>
				<div className="px-8 pt-6 pb-8 mb-4">
					<div className="bg-white  shadow-xl w-full m-auto rounded-md p-4">
						<form className="">
							<input
								className="appearance-none border rounded w-full p-4 text-neutral-grayishblue focus:outline-none focus:shadow-outline mb-4 text-bold placeholder:"
								id="firstName"
								type="text"
								placeholder="First Name"
							></input>
							<input
								className="appearance-none border rounded w-full p-4 text-neutral-grayishblue leading-tight mb-4"
								id="firstName"
								type="text"
								placeholder="Last Name"
							></input>
							<input
								className="appearance-none border rounded w-full p-4 text-neutral-grayishblue mb-4"
								id="firstName"
								type="text"
								placeholder="Email Address"
							></input>
							<input
								className="appearance-none border rounded w-full p-4 text-neutral-grayishblue mb-4"
								id="firstName"
								type="text"
								placeholder="Password"
							></input>
						</form>
						<div className="justify-center">
							<button
								className="bg-primary-green py-4 px-4 rounded uppercase align-center text-sm w-full font-bold mb-2"
								type="button"
							>
								Claim your free trial
							</button>
						</div>
						<div className="flex">
							<p className="text-neutral-grayishblue text-sm">
								By clicking the button, you are agreeing to our
							</p>
							<a href="" className="text-neutral-grayishblue text-sm">
								Terms and Services
							</a>
						</div>
					</div>
				</div>
			</body>
		</>
	);
}

export default App;
