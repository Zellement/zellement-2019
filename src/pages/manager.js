import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import Img from "gatsby-image"

import { IoIosArrowForward } from 'react-icons/io';

const HomePage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Manager</p>
		<h1 className="text-5xl text-grey-light mb-8">Manager.</h1>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">History</h2>
		<p className="py-3 text-lg">My first official managerial role came in the shape of the Head of Web Design for <a className="hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href="https://www.adtrak.co.uk">Adtrak</a>. Before this, I was part of the Web Design team, and was quickly recognised for my effective working practices, attention to detail and leadership qualities. Just 8 months in to my role with Adtrak, I was promoted to the head of department, and managed myself and 2 other designers.</p>
		<p className="pb-3 text-md">Since then, as Head of Web Design, I helped the company grow from a small garage setup of about 10 employees into a fully fledged, 120+ employee company in one of the largest city centre offices in Nottingham. The Web Design department under my remit grew from 3 to 25, and I was the first in the company to introduce a new layer of management for the department in the shape of <em>Team Leaders</em> and an assistant.</p>
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
			<li className="pb-3"><IoIosArrowForward className="inline" /> <a className="hover:text-white text-brown-light" target="_blank" rel="noopener noreferrer" href="https://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/home.htm?bhcp=1">MBTI</a>
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

export default HomePage