import React from 'react'
import Layout from '../components/Layout'
import AnimatedLink from "../components/AnimatedLink"
import RecommendedPeople from "../components/Recommended/RecommendedPeople.js";
import IconDeveloper from "../components/Icons/Developer.js";

//import IconGatsbyJS from "../components/Icons/Developer/GatsbyJS.js";

const HomePage = () => (
  <Layout>

  	<div className="max-w-3xl">
	  	<p className="text-md tracking-wider font-color-font"><AnimatedLink to="/">Dan Farrow</AnimatedLink> > Recommended</p>
		<h1 className="text-5xl text-grey-light mb-8">Recommended.</h1>
		<p className="py-3 text-lg">I've been very lucky and grateful for working with some amazing people over the years. This page is dedicated to those people.</p>
		<h2 className="text-3xl text-grey-light mb-4 mt-4">Recommended People</h2>

		<div className="flex flex-col lg:flex-row lg:flex-wrap">

		<RecommendedPeople
			recPeopleTitle="Sarah Farrow"
			recPeopleURL="http://www.theseeingplace.co.uk/"
			recPeopleDisplayURL="theseeingplace.co.uk"
			recPeopleJob="Wardrobe Assistant &amp; Theatre Maker"
			recPeopleDescription="My better half, and probably the hardest worker I've ever know, Saz has done work for so many different companies and people around the country, always to a high standard. Utmost respect for how much she puts into anything she does.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Sam Goddard"
			recPeopleURL="https://samgoddard.co.uk/"
			recPeopleDisplayURL="samgoddard.co.uk"
			recPeopleJob="Front-end Developer"
			recPeopleDescription="A very good friend of mine since he first started at Adtrak, he's become an incredible front-end developer over the years. He's also a fellow Forest season card holder.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Tom Nightingale"
			recPeopleURL="http://www.wearehuddle.co.uk/"
			recPeopleDisplayURL="www.wearehuddle.co.uk"
			recPeopleJob="Front-end Developer, Designer &amp; Manager"
			recPeopleDescription="I've worked with Tom for around a decade, and we've been through thick and thin at the company. I've the utmost respect for Tom and his unrivalled work ethic.  He's also a Forest fan.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Ste Greig"
			recPeopleURL="http://tangledindesign.com/"
			recPeopleDisplayURL="tangledindesign.com"
			recPeopleJob="Front-end Developer &amp; Designer"
			recPeopleDescription="Ste joined Adtrak way-back-when, left to work in New Zealand, returned to the UK and inevitably found his way back 'home'. He's the master of CSS (he wrote his own book!) and just a great guy.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="George Wood"
			recPeopleURL="http://georgewood.me/"
			recPeopleDisplayURL="georgewood.me"
			recPeopleJob="UX/UI Designer &amp; Developer"
			recPeopleDescription="I've watched George grow from a young Web Designer into a fully-fledged Senior UX/UI Designer, and some of the work he produces is just unreal. I envy his design ability.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="George Musson"
			recPeopleURL="https://www.linkedin.com/in/georgemusson/"
			recPeopleDisplayURL="linkedin.com/in/georgemusson/"
			recPeopleJob="Marketing Strategist &amp; Manager"
			recPeopleDescription="George has worked his way up through the Internet Marketing ranks, into the assistant role, to end up as a Digital Marketing Manager for a client team. I've strategised on an account with him for years; he's got a great mind for marketing.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Andrew Bowley"
			recPeopleURL="https://www.linkedin.com/in/abowley/"
			recPeopleDisplayURL="linkedin.com/in/abowley/"
			recPeopleJob="Manager &amp; Leader"
			recPeopleDescription="Bowley and I have spent our whole Adtrak careers (starting just 2 weeks apart) helping the company grow, and we've shared some tough times together. I've the uptmost respect for where he has ended up, and the work he's put in to it all.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Ben Scothern"
			recPeopleURL="https://www.linkedin.com/in/ben-scothern-44a04475/"
			recPeopleDisplayURL="linkedin.com/in/ben-scothern-44a04475/"
			recPeopleJob="Creative Copywriter"
			recPeopleDescription="Someone who never fails to make me laugh, Ben's creative ability with words is astounding, was crucial to the re-build of Adtrak's website and has become an important personality across the company.">
		</RecommendedPeople>

		<RecommendedPeople
			recPeopleTitle="Ash Barnard"
			recPeopleURL="https://www.linkedin.com/in/ash-barnard-94ba7b31/"
			recPeopleDisplayURL="linkedin.com/in/ash-barnard-94ba7b31/"
			recPeopleJob="Animator"
			recPeopleDescription="My brother-in-law, known him since I was 15, and we've both had our own career struggles. Proper proud of him to achieve such a key role at such a reputable company such as Rare.">
		</RecommendedPeople>

		</div>

	</div>

  </Layout>
)

export default HomePage