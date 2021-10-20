import React from 'react';

import "./assets/css/argon.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

import logo from "./assets/img/TVCONal_logo.png";
// import Matches from "./pages/matches.js";
// import IndivStats from './components/indivstats.js';
// import Tournaments from './components/tournaments.js';
// import Teams from './components/teams.js';
import Matches from './pages/matches';
import IndivStats from './pages/indivstats';
import Tournaments from './pages/tournaments';
import Teams from './pages/teams';

// import Login from "./components/login.js"
// import useToken from './components/useToken';



import "./App.css";

import "react-datepicker/dist/react-datepicker.css";



import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import Players from './pages/players';





function App() {
	// const {token, setToken, removeToken} = useToken();

	// console.log("token", token);
	// console.log("!token", !token);

	// if (!token) {
	// 	return (
	// 	<div style={{minHeight: "100vh"}}>
	// 	<div className="App" style={{backgroundColor: "light", height:"100vh"}}>
	// 	<nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary">
	// 				<div className="container d-flex justify-content-start">
	// 					<img src={logo} alt="TVConnal" /> 
	// 					<h2 className="nav-title">
	// 						{" "}
	// 						TvConal - Video Events Analyzer{" "}
	// 					</h2>
	// 				</div>
	// 			</nav> 
	// 		{/* <div class="container h-100 pt-100">
	// 			<Login setToken={setToken}/>
	// 		</div> */}
	// 	</div>
	// 	</div>
	// 	)
	// }

	return (
		<Router>
			<div className="App">
				{/*----------------------navigation bar---------------------- */}
				<nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-primary">
					<div className="container">
					<a href="/matches">
						<img src={logo} alt="TVConnal" /> </a>
						<h2 className="nav-title">
							{" "}
							Players Dashboard{" "}
						</h2>

						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbar-default"
							aria-controls="navbar-default"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

						<div
							class="collapse navbar-collapse"
							id="navbar-default"
						>
							<div class="navbar-collapse-header">
								<div class="row">
									<div class="col-6 collapse-brand">
										{/*<a href="javascript:void(0)"></a>*/}
									</div>
									<div class="col-6 collapse-close">
										<button
											type="button"
											class="navbar-toggler"
											data-toggle="collapse"
											data-target="#navbar-default"
											aria-controls="navbar-default"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span></span>
											<span></span>
										</button>
									</div>
								</div>
							</div>
							<ul class="navbar-nav ml-lg-auto">
							<li class="nav-item">
									<a class="nav-link" href="/tournaments">
										Tournaments
									</a>
								</li>
							<li class="nav-item">
								<a class="nav-link" href="/matches">
									Matches
								</a>
							</li>
							<li class="nav-item">
									<a class="nav-link" href="/teams">
										Teams
									</a>
							</li>
							<li class="nav-item">
									<a class="nav-link" href="/players">
										Players
									</a>
								</li>
							<li class="nav-item">
									<a class="nav-link" href="/indivstats">
										Indiv players stats
									</a>
								</li>

								{/* <li class="nav-item">
									<a class="nav-link" onClick={removeToken}>
										Logout
									</a>
								</li>	 */}
							</ul>
						</div>
					</div>
				</nav>
				<Switch>
					<Route exact path="/">
					   <Redirect to="matches" />
					</Route>
		          <Route path="/matches">
		            <Matches />
		          </Route>
		          <Route path="/indivstats">
		            <IndivStats />
		          </Route>
				  <Route path="/players">
		          	<Players />
		          </Route>
		          <Route path="/tournaments">
		          	<Tournaments />
		          </Route>

f
				  <Route path="/teams">
		          	<Teams />
		          </Route>
		        </Switch>
			</div>
		</Router>
	);
}

export default App;