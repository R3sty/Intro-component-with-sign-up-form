const LineBreak = () => <br />;

function App() {
	return (
		<div className="lg:flex flex-col-2 bg-intro-pattern-mobile font-poppins bg-primary-pink bg-cover text-white">
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

			<div className="pt-4 pb-2 px-4 lg:mt-40 lg:mb-40 lg:mr-40 lg:ml-20">
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
								className="bg-primary-green py-4 px-4 rounded uppercase align-center text-sm w-full font-bold mb-4"
								type="button"
							>
								Claim your free trial
							</button>
						</div>
						<div className="text-center">
							<p className="text-neutral-grayishblue text-xs">
								By clicking the button, you are agreeing to our
							</p>
							<a href="" className="text-primary-red font-bold text-xs mb-4">
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
