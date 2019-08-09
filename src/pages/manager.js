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
		<p className="py-3 text-lg">My first official managerial role came in the shape of the <em>Head of Web Design</em> for <a className="hover:text-brown-light text-white" target="_blank" rel="noopener noreferrer" href="https://www.adtrak.co.uk">Adtrak</a>. Before this, I was part of the Web Design team, and was quickly recognised for my effective working practices, attention to detail and leadership qualities. Just 8 months in to my role with Adtrak, I was promoted to the head of department, and managed myself and 2 other designers.</p>

	    <div className="relative mb-10">

	      	<Img className="w-100 max-w-sm mr-auto xl:max-w-md" fluid={props.data.onstageOne.childImageSharp.fluid} />

	        <p className="z-50 border-orange-400 border-l-2 p-8 font-color-font text-white bg-brown-standard sm:absolute sm:top-4 sm:right-0 sm:max-w-xs sm:pr-0 md:text-xl md:top-0 md:bg-transparent lg:pt-6 lg:top-0 lg:max-w-sm xl:top-0 xl:text-2xl">Presentation and Q&amp;A for an Adtrak AGM</p>

	      	<Img className="w-100 max-w-sm ml-auto sm:-mt-10 sm:-mt-24 mb-4 lg:-mt-40 xl:-mt-56" fluid={props.data.onstageTwo.childImageSharp.fluid} />

	    </div>

	    <div className="my-10 flex flex-col sm:flex-row md:flex-col lg:flex-row lg:pt-10">

			<p className="pb-3 text-md sm:pr-4 md:p-0 lg:pr-10">Since then, as Head of Web Design, I helped the company grow from a small garage setup of about 10 employees into a fully fledged, 120+ employee company in one of the largest city centre offices in Nottingham. The Web Design department under my remit grew from 3 to 25, and I was the first in the company to introduce a new layer of management for the department in the shape of <em>Team Leaders</em> and an assistant.</p>

	      	<img src={XmasGif} className="w-100 h-auto self-center sm:max-w-xs md:max-w-full md:pt-6 lg:max-w-sm lg:p-0" />

	      </div>


			<p className="pb-3 text-md">I'm very honoured to have worked alongside so many great people, with a rich variety of design, development and marketing backgrounds; web/UI/UX designers, front-end/back-end/full-stack developers, SEO strategists and technical SEO specialists, PPC consultants, creative copywriters and inspiring leaders.</p>

		    <div className="relative mb-10">

	      		<Img className="block max-w-lg" fluid={props.data.wedding.childImageSharp.fluid} />

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



		<h2 className="text-3xl text-grey-light mb-4 mt-4">Experience</h2>
		<p className="pb-3 text-md">I have years of experience with the standard tasks associated to people management, including but not limited to;</p>
		<ul>
			<li className="pb-3"><IoIosArrowForward className="inline" /> Monthly 1-1s
				<span className="block ml-8">
					In monthly 1-1s with my direct reports, it has been important to have open conversation saround how an indivudual is finding their role, and how they can look to improve. I've held 1-1s with a vast range of levels of employee, from Juniors to Seniors and Assistant Managers, all of which required a degree of customisation to suit the situation and colleague.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> Objective setting &amp; KPIs
				<span className="block ml-8">
					On both an individual and company basis, I have years of experience setting SMART objectives and KPIs that are achieveable and encourage development and progression.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> PIPs, PDPs &amp; Disciplinaries
				<span className="block ml-8">
					I've had the unforunate experience of dealing with performance improvement plans in addition to formal discplinary hearings.
				</span>
			</li>
		</ul>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Training</h2>

		<p className="pb-3 text-md">Adtrak has supplied me with numerous tools, training and guides to really advance my managerial skills, which have come in use over the years.</p>

		<p className="pb-3 text-md">This formal and informal training has been the cornerstone to my progression as a manager and leader, and has revealed the following traits;</p>
		<ul>
			<li className="pb-3"><IoIosArrowForward className="inline" /> <a className="hover:text-brown-light text-white" target="_blank" rel="noopener noreferrer" href="https://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/home.htm?bhcp=1">MBTI</a>
				<span className="block ml-8">
					One of the first training sessions I received was identifying my own personality type, and learning that of others. My personality test revealed my natural inclination toward the following;
					<span className="block ml-8">I - Introvert</span>
					<span className="block ml-8">S - Sensing</span>
					<span className="block ml-8">T - Thinking</span>
					<span className="block ml-8">J - Judgement</span>
					<span className="block ml-8"><em>Quietly systematic.  Factual.  Organized.  Logical.  Detailed.  Conscientious.  Analytical.  Responsible. Pragmatic.  Critical.  Conservative.  Decisive. Stable.  Concrete.  Efficient.</em></span>
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> Objective setting &amp; KPIs
				<span className="block ml-8">
					On both an individual and company basis, I have years of experience setting SMART objectives and KPIs that are achieveable and encourage development and progression.
				</span>
			</li>
			<li className="pb-3"><IoIosArrowForward className="inline" /> PIPs, PDPs &amp; Disciplinaries
				<span className="block ml-8">
					I've had the unforunate experience of dealing with performance improvement plans in addition to formal discplinary hearings.
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
  }
`;