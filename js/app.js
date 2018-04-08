const home = {
	template:`
		<section>
			<div id="home" class="container">
			</div>
		</section>
	`
}

const portfolio = {
	template: `
        <section>
			<div id="portfolio" class="container">
				<div class="row">
					<div class="col">	
						<a href="ThereSheGrowsCA/index.html" target="_blank"><img src="img/ThereSheGrows.jpg"></a>
						<h3>Client Small Business Website</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="DogBreedQuiz/index.html" target="_blank"><img src="img/DogBreedQuiz.jpg"></a>
						<h3>Quiz App built with Vue.js</h3>
						<p>Vue.js, JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="AlarmClock/index.html" target="_blank"><img src="img/AlarmClock.jpg"></a>
						<h3>Alarm Clock App</h3>
						<p>Advanced JS, CSS3, HTML5</p>
					</div>
				</div>	
				<div class="row">
					<div class="col">	
						<a href="CrimeFinderAPI/index.html" target="_blank"><img src="img/CrimeAPI.jpg"></a>
						<h3>Crime Search API App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="InventoryECommerce/index.html" target="_blank"><img src="img/ECommerce.jpg"></a>
						<h3>Inventory Display/Add Web App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="ForestFairy/index.html" target="_blank"><img src="img/ForestFairy.jpg"></a>
						<h3>Client Small Business Website</h3>
						<p>Vue.js, JS, CSS3, HTML5</p>
					</div>
				</div>
				<div class="row">
					<div class="col">	
						<a href="Zodiac/index.html" target="_blank"><img src="img/Zodiac.jpg"></a>
						<h3>Zodiac Sign Web App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="BookFinderAPI/index.html" target="_blank"><img src="img/BookFinderAPI.jpg"></a>
						<h3>Book Search API App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="Comment/index.html" target="_blank"><img src="img/Comment.jpg"></a>
						<h3>User Comment Web App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
				</div>
				<div class="row">
					<div class="col">	
						<a href="Planet/index.html" target="_blank"><img src="img/Planet.jpg"></a>
						<h3>Planet Info Web App</h3>
						<p>JS, CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="StylesConf/index.html" target="_blank"><img src="img/StylesConf.jpg"></a>
						<h3>Client Conference Website</h3>
						<p>CSS3, HTML5</p>
					</div>
					<div class="col">	
						<a href="Strict/index.html" target="_blank"><img src="img/Strict.jpg"></a>
						<h3>Client Business Website</h3>
						<p>Bootstrap, CSS3, HTML5</p>
					</div>
				</div>
			</div>
        </section
    `
}

const about = {
	template: `
          <section class="container d-flex h-100">
	        <div id="about" class="align-self-center">      
				<div class="container align-self-center">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="aboutLeft">
								<h4>Contact Info</h4>
								<h6>Phone number:</h6>
								<p>(628) 400-7680</p>
								<h6>E-mail:</h6>
								<p>Lisa.Trevis@gmail.com</p>
								<h6>Location:</h6>
								<p>San Francisco Bay Area, California</p>

								<ul class="social-nav">
									<li><a href="http://www.linkedin.com/in/lisatrevis" target="_blank"><i class="fab fa-linkedin-in fa-3x"></i></a></li>
									<li><a href="http://www.github.com/LisaTrevis" target="_blank"><i class="fab fa-github fa-3x"></i></a></li>
									<li><a href="http://www.codepen.io/LisaTrevis/" target="_blank"><i class="fab fa-codepen fa-3x"></i></i></a></li>
								</ul>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-12">
							<img class="img-fluid" src="img/WebsiteHeadshot.jpg" alt="Picture of Lisa Trevis">
						</div>

						<div class="col-lg-4 col-md-12 col-sm-12">
							<div class="aboutRight">
								<h4>Skills</h4>
								<h6>Primary</h6>
								<p>HTML5, CSS3, JavaScript</p>
								<p>Responsive Design, Bootstrap</p>
								<p>MVC: Vue</p>
								<h6>Secondary</h6>
								<p>Adobe Creative Cloud, JQuery</p>
								<p>SEO, UI/UX, APIs, SVG, D3.js</p>
								<p>MVC: React</p>
								<h6>Tertiary</h6>
								<p>GIT, WordPress, PHP</p>
								<p>MVC: Angular</p>
							</div>
						</div>

					</div>
				</div>
			</div>
        </section
    `
}

const resume = {
	template: `
		<section>

			<div id="resume">
			
				<div class="container">        
	            	<div class="row resumeRow">

	                	<div class="col-md-6 resumeEd">

		                    <ul class="resumeList">
		                        <li class="resTitle"><h4>Education</h4></li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Udemy</h5>
		                                <span>2017-2018+</span>
		                                <p class="plineheight">
		                                Online video tutorials in Angular, Vue, React/Redux, PHP, WordPress, Adobe Photoshop, Web Design/Development.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>LinkedIn Learning Courses</h5>
		                                <span>2017-2018+</span>
		                                <p class="plineheight">
		                                Online video tutorials in Adobe CC: Photoshop, Illustrator, DreamWeaver, and InDesign; SEO Essentials; UX Foundations: Prototyping; JQuery Essential Training; HTML5: Structure, Syntax, and Semantics; Learning Canva</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Codify Academy</h5>
		                                <span>2016-2017</span>
		                                <p class="plineheight">
		                                A 16 week course that covers HTML5, CSS3, JavaScript, jQuery, Bootstrap, APIs, JSON data retrieval using AJAX calls, and MVCs.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Hack Reactor Prep</h5>
		                                <span>2016</span>
		                                <p class="plineheight">
		                                An intense 4 week course with a focus on JavaScript where I learned the foundational concepts of coding.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Index Computers</h5>
		                                <span>2015</span>
		                                <p class="plineheight">
		                                Completed Beginner, Intermediate &amp; Advanced classes in Access, Excel, Pivot Tables, Power Point, Word, Outlook and Quickbooks.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconEd">
		                                <i class="fas fa-graduation-cap"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Normandale College</h5>
		                                <span>2001</span>
		                                <p class="plineheight">
		                                Associates Degree with a focus on Mathmatics, Physics &amp; Engineering</p>
		                            </div>
		                        </li>
		                    </ul>
	                	</div>

		                <div class="col-md-6 resumeEmp">

		                    <ul class="resumeList">
		                        <li class="resTitle"><h4>Employment</h4></li>
		                        <li>
		                            <div class="resumeIconWork">
		                                <i class="fas fa-briefcase"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Lead Mentor:<br>Codify Academy</h5>
		                                <span>2017-2018+</span>
		                                <p class="plineheight">
		                                Front End Web Devlopment Instructor. Explain complex topics to complete beginners. Help students debug their code via Slack, video chats, and in person.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconWork">
		                                <i class="fas fa-briefcase"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Owner, Web Developer &amp; Web Designer:<br> Lisa Codes the World</h5>
		                                <span>2016-2018+</span>
		                                <p class="plineheight">
		                                Design and develop websites for small businesses, resulting in new clients for them each month via their online presence and social media links.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconWork">
		                                <i class="fas fa-briefcase"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Admissions Manager:<br> Codify Academy</h5>
		                                <span>2017-2018</span>
		                                <p class="plineheight">
		                                Managed all administrative processes related to registration, payments, contracts, admitting students, and the hiring program.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconWork">
		                                <i class="fas fa-briefcase"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>Manager, National Accounts:<br>MultiPlan, Inc.</h5>
		                                <span>2011-2014</span>
		                                <p class="plineheight">
		                                Managed and grew revenue on multiple multi-million dollar national accounts. Increased revenue streams by up-selling and cross-selling additional products and market segments.
		                                Served as liaison between internal teams and Client Accounts for all technical, financial and service issues that arose.</p>
		                            </div>
		                        </li>
		                        <li>
		                            <div class="resumeIconWork">
		                                <i class="fas fa-briefcase"></i>
		                            </div>
		                            <div class="resumeContent">
		                                <h5>National Sales Manager:<br>IHP, Inc.</h5>
		                                <span>2008-2011</span>
		                                <p class="plineheight">
		                                Negotiated contracts from initial contact to final signature, and served as SalesForce Administrator. Exceeded revenue goals annually, ensuring sustained double digit growth of the company each year.</p>
		                            </div>
		                        </li>
		                    </ul>

		                </div>
	            	</div>
	        	</div>
			</div>

		</section
    `
}

const router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: home
		},
		{
			path: '/portfolio',
			component: portfolio
		},
		{
			path: '/about',
			component: about
		},
		{
			path: '/resume',
			component: resume
		}
	]
})

var routeTest = new Vue({
	router,
	el: '#app',
	data: {

	},
	methods: {

	}
}).$mount('#app')

router.replace({ path: '/home', redirect: '/' })