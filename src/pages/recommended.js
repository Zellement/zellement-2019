import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import RecommendedPeople from "../components/Recommended/RecommendedPeople.js";

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const HomePage = () => {

	return (
		<Layout>

			<div className="max-w-3xl">

			  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Recommended</p>
				<h1 className="text-5xl text-grey-light mb-8">Recommended.</h1>
				<p className="py-3 text-lg">I've been very lucky and grateful for working with some amazing people over the years. This page is dedicated to those people.</p>
				<h2 className="text-3xl text-grey-light mb-4 mt-4">Recommended People</h2>
				<p className="py-3">This list is randomly ordered on each page load.</p>

				<div className="flex flex-col lg:flex-row lg:flex-wrap">

					<RecommendedPeople
						recPeopleTitle="Sarah Farrow"
						recPeopleURL="http://www.theseeingplace.co.uk/"
						recPeopleDisplayURL="theseeingplace.co.uk"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Wardrobe Assistant &amp; Theatre Maker"
						recPeopleDescription="My better half, and probably the hardest worker I've ever known, Saz has done work for so many different companies and people around the country, always to a high standard. Utmost respect for how much she puts into anything she does.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Sam Goddard"
						recPeopleURL="https://samgoddard.co.uk/"
						recPeopleDisplayURL="samgoddard.co.uk"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Front-end Developer"
						recPeopleDescription="A very good friend of mine since he first started at Adtrak, he's become an incredible front-end developer over the years. He's also a fellow Forest season card holder.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Tom Nightingale"
						recPeopleURL="http://www.wearehuddle.co.uk/"
						recPeopleDisplayURL="www.wearehuddle.co.uk"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Front-end Developer, Designer &amp; Manager"
						recPeopleDescription="I've worked with Tom for around a decade, and we've been through thick and thin at the company. I've the utmost respect for Tom and his unrivalled work ethic.  He's also a Forest fan.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Ste Greig"
						recPeopleURL="http://tangledindesign.com/"
						recPeopleDisplayURL="tangledindesign.com"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Front-end Developer &amp; Designer"
						recPeopleDescription="Ste joined Adtrak way-back-when, left to work in New Zealand, returned to the UK and inevitably found his way back 'home'. He's the master of CSS (he wrote his own book!) and just a great guy.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="George Wood"
						recPeopleURL="http://georgewood.me/"
						recPeopleDisplayURL="georgewood.me"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="UX/UI Designer &amp; Developer"
						recPeopleDescription="I've watched George grow from a young Web Designer into a fully-fledged Senior UX/UI Designer, and some of the work he produces is just unreal. I envy his design ability.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="George Musson"
						recPeopleURL="https://www.linkedin.com/in/georgemusson/"
						recPeopleDisplayURL="linkedin.com/in/georgemusson/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Marketing Strategist &amp; Manager"
						recPeopleDescription="George has worked his way up through the Internet Marketing ranks, into the assistant role, to end up as a Digital Marketing Manager for a client team. I've strategised on an account with him for years; he's got a great mind for marketing.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Ashley Elton"
						recPeopleURL="https://www.linkedin.com/in/ashley-elton-318252179/"
						recPeopleDisplayURL="linkedin.com/in/ashley-elton-318252179/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Marketing Strategist &amp; Manager"
						recPeopleDescription="Ash has been at the forefront of Adtrak for years now, and his ability to keep a ship steady is unsurpassed. He will continue to drive forward in his and his department's knowledge, has an excellent head for strategy and an ability to question the status-quo.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Andrew Bowley"
						recPeopleURL="https://www.linkedin.com/in/abowley/"
						recPeopleDisplayURL="linkedin.com/in/abowley/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Manager &amp; Leader"
						recPeopleDescription="Bowley and I have spent our whole Adtrak careers (starting just 2 weeks apart) helping the company grow, and we've shared some tough times together. I've the uptmost respect for where he has ended up, and the work he's put in to it all.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Ben Scothern"
						recPeopleURL="https://www.linkedin.com/in/ben-scothern-44a04475/"
						recPeopleDisplayURL="linkedin.com/in/ben-scothern-44a04475/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Creative Copywriter"
						recPeopleDescription="Someone who never fails to make me laugh, Ben's creative ability with words is astounding, was crucial to the re-build of Adtrak's website and has become an important personality across the company.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Ash Barnard"
						recPeopleURL="https://www.linkedin.com/in/ash-barnard-94ba7b31/"
						recPeopleDisplayURL="linkedin.com/in/ash-barnard-94ba7b31/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Animator"
						recPeopleDescription="My brother-in-law, known him since I was 15, and we've both had our own career struggles. Proper proud of him to achieve such a key role at such a reputable company such as Rare.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="James O'Flaherty"
						recPeopleURL="https://www.linkedin.com/in/james-o-flaherty-72459211/"
						recPeopleDisplayURL="linkedin.com/in/james-o-flaherty-72459211/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Manager &amp; Leader"
						recPeopleDescription="I've worked closely with James since starting at Adtrak, and his openness and ability to remain positive is something unparalleled in anyone else I know. He's got some serious man management abilities and he's done much to help me over the years.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Holly Shackleton"
						recPeopleURL="https://www.linkedin.com/in/holly-shackleton-28b27413a/"
						recPeopleDisplayURL="linkedin.com/in/holly-shackleton-28b27413a/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Manager &amp; Leader"
						recPeopleDescription="Holly's been a stalwart figure of Adtrak leadership since I joined, and has the ability to look both logically and empathetically at any situation.">
					</RecommendedPeople>

					<RecommendedPeople
						recPeopleTitle="Chris Rutter"
						recPeopleURL="https://www.linkedin.com/in/iamchrisrutter/"
						recPeopleDisplayURL="linkedin.com/in/iamchrisrutter/"
						recPeopleClasses = {"order-" +  + Math.floor(Math.random() * 10)}
						recPeopleJob="Technical &amp; IT Guru"
						recPeopleDescription="Chris's techincal mind in how to integrate systems is high class - he works very hard in order to make things efficient and will make it his mission to understand a process first in order to improve it.">
					</RecommendedPeople>

				</div>

			</div>

		</Layout>
	)
}

export default HomePage