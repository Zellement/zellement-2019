import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"
import XmasGif from '../images/manager/xmas-gif.gif'

import { IoIosArrowForward } from 'react-icons/io';
import { GoHeart } from 'react-icons/go';


const Page = props => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Manager</p>
		<h1 className="text-5xl text-grey-light mb-8">Manager.</h1>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">History</h2>
		<p className="py-3 text-lg">My first official managerial role came in the shape of the <em>Head of Web Design</em> for <a className="hover:text-brown-light text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.adtrak.co.uk">Adtrak</a>. Before this, I was part of the Web Design team, and was quickly recognised for my effective working practices, attention to detail and leadership qualities. Just 8 months in to my role with Adtrak, I was promoted to the head of department, and managed myself and 2 other designers.</p>

	    <div className="relative mb-10">

	      	<Img alt="Presentation for an Adtrak AGM" className="w-100 max-w-sm mr-auto xl:max-w-md" fluid={props.data.onstageOne.childImageSharp.fluid} />

	        <p className="z-50 border-orange-400 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-4 sm:right-0 sm:max-w-xs sm:pr-0 md:text-xl md:top-0 md:bg-transparent lg:pt-6 lg:top-0 lg:max-w-sm xl:top-0 xl:text-2xl">Presentation and Q&amp;A for an Adtrak AGM</p>

	      	<Img alt="Q and A for an Adtrak AGM" className="w-100 max-w-sm ml-auto sm:-mt-10 sm:-mt-24 mb-4 lg:-mt-40 xl:-mt-56" fluid={props.data.onstageTwo.childImageSharp.fluid} />

	    </div>

	    <div className="my-10 flex flex-col sm:flex-row md:flex-col lg:flex-row lg:pt-10">

			<p className="pb-3 text-md sm:pr-4 md:p-0 lg:pr-10">Since then, as Head of Web Design, I helped the company grow from a small garage setup of about 10 employees into a fully fledged, 120+ employee company in one of the largest city centre offices in Nottingham. The Web Design department under my remit grew from 3 to 25, and I was the first in the company to introduce a new layer of management for the department in the shape of <em>Team Leaders</em> and an assistant.</p>

	      	<img alt="Christmas outing with some fellow Adtrak colleagues" src={XmasGif} className="w-100 h-auto self-center sm:max-w-xs md:max-w-full md:pt-6 lg:max-w-sm lg:p-0" />

	      </div>


			<p className="pb-3 text-md">I'm very honoured to have worked alongside so many great people, with a rich variety of design, development and marketing backgrounds; web/UI/UX designers, front-end/back-end/full-stack developers, SEO strategists and technical SEO specialists, PPC consultants, creative copywriters and inspiring leaders.</p>

		    <div className="relative my-10">

	      		<Img alt="Myself and Adtrak colleagues at my own wedding" className="block max-w-lg" fluid={props.data.wedding.childImageSharp.fluid} />

		        <p className="z-50 border-orange-400 inline border-l-2 p-4 font-color-font text-brown-dark absolute top-0 left-0 md:right-auto xl:text-2xl xl:left-23 xl:top-3 xl:text-white">
		        	<GoHeart className="inline text-red-900" />
		        	<GoHeart className="inline text-red-800" />
		        	<GoHeart className="inline text-red-700" />
		        	<GoHeart className="inline text-red-600" />
		        	<GoHeart className="inline text-red-500" />
		        	<GoHeart className="inline text-red-400" />
		        	<GoHeart className="inline text-red-300" />
		        	<GoHeart className="inline text-red-200" />
		        	<GoHeart className="inline text-red-100" />
		        	<GoHeart className="inline text-white" />
		        	<GoHeart className="inline text-white" />
		        </p>

		    </div>

	   		<div className="my-10 flex flex-col lg:flex-row lg:pt-10">

				<p className="pb-8 text-md lg:w-1/4">In 2016, Adtrak's growth opened up an opportunity for an addiitonal support layer below the directors, and I was promoted into the role of a <em>Senior Manager</em>. In this role I was responsible for helping make key decisions on the direction of the company, and overseeing 3 different departments - Web Design, Web Development and Web Leasing. I managed to fulfil this role in addition to being Head of Web Design, until a massive company re-structure redefined my role into the <em>Assistant Customer Operations Director</em>.</p>

				<div className="flex flex-col lg:w-3/4">

					<div className="flex flex-row">
						<span className="w-1/4 pr-4 font-color-font text-orange-400 border-r-2 border-orange-400 border-solid lg:text-right">2008</span>
						<span className="w-3/4 pl-4 pb-10">
							<span className="text-white">First managerial role</span>
							<span className="block">Became Head of Web Design overseeing 2 additonal people.</span>
						</span>
					</div>

					<div className="flex flex-row">
						<span className="w-1/4 pr-4 font-color-font text-orange-400 border-r-2 border-orange-400 border-solid lg:text-right">2012</span>
						<span className="w-3/4 pl-4 pb-10">
							<span className="text-white">Introduction of managerial levels</span>
							<span className="block">I helped introduce new levels of management within Web Design as the department outgrew its existing structure</span>
						</span>
					</div>

					<div className="flex flex-row">
						<span className="w-1/4 pr-4 font-color-font text-orange-400 border-r-2 border-orange-400 border-solid lg:text-right">2014</span>
						<span className="w-3/4 pl-4 pb-10">
							<span className="text-white">Web Design reaches 25 employees</span>
							<span className="block">Following substantial growth, the department hits 25 employees</span>
						</span>
					</div>

					<div className="flex flex-row">
						<span className="w-1/4 pr-4 font-color-font text-orange-400 border-r-2 border-orange-400 border-solid lg:text-right">2015</span>
						<span className="w-3/4 pl-4 pb-10">
							<span className="text-white">Promotion to Senior Manager</span>
							<span className="block">I effectively became a Senior Manager whilst still running the Web Design department</span>
						</span>
					</div>

					<div className="flex flex-row">
						<span className="w-1/4 pr-4 font-color-font text-orange-400 border-r-2 border-orange-400 border-solid lg:text-right">2019</span>
						<span className="w-3/4 pl-4 pb-2">
							<span className="text-white">Became Assistant Customer Operations Director</span>
							<span className="block">Following a company re-structure, I took on this role, jointly responsible for almost 90 people's output for clients spread across 8 client teams</span>
						</span>
					</div>

				</div>

			</div>

		<h2 className="text-3xl text-grey-light mb-4 mt-4">Project Management</h2>

		<p className="pb-3 text-md">Over the years I have been able to implement new projects, workstreams, processes and services into Adtrak in order to help it grow and succeed.</p>

		<p className="pb-3 text-md">As with all projects, organisation can be critical to the success of the project implementation, so I always strive to be as organised as possible. An attention to detail as well as creative solution finding are also strengths I can pull from in order to effectively deliver something new to the company.</p>

		<p className="pb-3 text-md">Some of my more recent projects delivered include;</p>

		<ul>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">Customer Journey Plan</span>
				<span className="block ml-8">
					As part of Adtrak's huge re-structure, a workstream was created to devise a full <em>Customer Journey Plan</em>. This involved researching Adtrak's current client by conducting phone call interviews and digital surveys, discovering the SME market place across the UK and doing competitive analysis. A successful plan was delivered to the Adtrak Directors late 2018 and has been heavily used in the re-structure of the company.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">New products &amp; processes for Adtrak</span>
				<span className="block ml-8">
					In recent years on seperate occasions I researched solutions for Adtrak to offer SSL/HTTPS hosting to its clients - increasing the profitability of our hosting product, devising guides and resources to streamline the work and ensure our client's websites follow encryption guidelines - and found and released a solution for Adtrak to deliver sitemaps. Both of these required training, guides &amp; discussions to ensure an effective release to a company of over 120 people. 
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">"Change for Growth"</span>
				<span className="block ml-8">
					Adtrak's huge re-structure, dubbed <em>Change for Growth</em>, was a huge undertaking, and as part of the leadership team I had an integral role in helping direct and deliver the monumental change. This included a lot of coaching, supporting and helping people through the whole transiton.
				</span>
			</li>
		</ul>

	    <div className="relative my-10">

      		<Img alt="Myself and Adtrak colleagues at my own wedding" className="block max-w-lg mx-auto lg:ml-0" fluid={props.data.leadership.childImageSharp.fluid} />

	        <p className="z-50 mx-auto max-w-lg border-orange-400 block border-l-2 p-4 font-color-font text-brown-feint lg:absolute lg:top-5 lg:right-0 lg:max-w-xs lg:text-white xl:text-2xl xl:top-3 xl:text-white">A quick selfie with some of the Adtrak leadership, circa 2018
	        </p>

	    </div>

		<h2 className="text-3xl text-grey-light mb-4 mt-4">Experience</h2>
		<p className="pb-3 text-md">I have years of experience with the standard tasks associated to people management, including but not limited to;</p>
		<ul>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">Monthly 1-1s</span>
				<span className="block ml-8">
					In monthly 1-1s with my direct reports, it has been important to have open conversation saround how an indivudual is finding their role, and how they can look to improve. I've held 1-1s with a vast range of levels of employee, from Juniors to Seniors and Assistant Managers, all of which required a degree of customisation to suit the situation and colleague.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">Objective setting &amp; KPIs</span>
				<span className="block ml-8">
					On both an individual and company basis, I have years of experience setting SMART objectives and KPIs that are achieveable and encourage development and progression.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <span class="text-white">PIPs, PDPs &amp; Disciplinaries</span>
				<span className="block ml-8">
					I've had the unforunate experience of dealing with performance improvement plans in addition to formal discplinary hearings.
				</span>
			</li>
		</ul>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Training</h2>

		<p className="pb-3 text-md">Adtrak has supplied me with numerous tools, training and guides to really advance my managerial skills, which have come in use over the years.</p>

		<p className="pb-3 text-md">This formal and informal training has been the cornerstone to my progression as a manager and leader, and has revealed the following traits;</p>
		<ul>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <a name="Visit Myers Briggs" className="hover:text-brown-light text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/home.htm?bhcp=1">MBTI</a>
				<span className="block ml-8">
					One of the first training sessions I received was identifying my own personality type, and learning that of others. My personality test revealed my natural inclination toward the following;
					<span className="block ml-8">I - Introvert</span>
					<span className="block ml-8">S - Sensing</span>
					<span className="block ml-8">T - Thinking</span>
					<span className="block ml-8">J - Judgement</span>
					<span className="block ml-8"><em>"Quietly systematic.  Factual.  Organized.  Logical.  Detailed.  Conscientious.  Analytical.  Responsible. Pragmatic.  Critical.  Conservative.  Decisive. Stable.  Concrete.  Efficient."</em></span>
				</span>
			</li>
			<li className="pb-3 flex flex-col md:flex-row">

				<span className="md:w-2/3">
					<IoIosArrowForward className="inline" /> <a name="Visit Tilt 365" className="hover:text-brown-light text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.tilt365.com/">Tilt 365</a>
						<span className="block ml-8 md:pr-4">
							Following another self-completed survey, my Tilt 365 profile returned myself to be <em>Master Mind</em>. Although I accept that my natural persuasion is to think in this way, I believe I am very competent at being able to <em>tilt</em> in to other personality persuasions, dependent on the situation.
						</span>
				</span>

	      		<Img alt="My Tilt 365 profile returned master mind" className="w-32 my-4 shadow self-center block max-w-lg h-40" fluid={props.data.mastermind.childImageSharp.fluid} />

			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <a name="Visit Situational.com" className="hover:text-brown-light text-white underline" target="_blank" rel="noopener noreferrer" href="https://www.situational.com/the-cls-difference/situational-leadership-what-we-do/">Situational Leadership</a>
				<span className="block ml-8">
					I've been trained on Situational Leadership, and how changing style depending on the situation can be very effective.
				</span>
			</li>
		</ul>

	</div>

  </Layout>
)

export default Page

export const fluidImage = graphql`
  fragment fluidImageManager on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    onstageOne: file(relativePath: { eq: "manager/onstage-01.jpg" }) {
      ...fluidImageManager
    }
    onstageTwo: file(relativePath: { eq: "manager/onstage-02.jpg" }) {
      ...fluidImageManager
    }
    wedding: file(relativePath: { eq: "manager/wedding.jpg" }) {
      ...fluidImageManager
    }
    leadership: file(relativePath: { eq: "manager/leadership.jpg" }) {
      ...fluidImageManager
    }
    mastermind: file(relativePath: { eq: "manager/mastermind.jpg" }) {
      ...fluidImageManager
    }
  }
`;