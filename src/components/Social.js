import React from "react"

import { IoLogoInstagram, IoLogoGithub , IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io';
import { IconContext } from "react-icons";

const Social = () => (

  <div className="mx-auto mt-8 w-100 flex md:justify-end">

    <IconContext.Provider value={{ size: "1.1em" }}>

      <a name="Visit my Instagram" className="hover:text-orange-500 mr-2" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zellement/"><IoLogoInstagram aria-label="Instagram" className="inline" />
      </a>

      <a name="Visit my GitHub" className="hover:text-orange-500 mr-2" target="_blank" rel="noopener noreferrer" href="https://github.com/Zellement"><IoLogoGithub aria-label="GitHub" className="inline" />
      </a>

      <a name="Follow me on Twitter" className="hover:text-orange-500 mr-2" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Zellement"><IoLogoTwitter aria-label="Twitter" className="inline" />
      </a>

      <a name="See my LinkedIn" className="hover:text-orange-500 mr-2 md:m-0" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zellement/"><IoLogoLinkedin aria-label="LinkedIn" className="inline" />
      </a>

    </IconContext.Provider>

  </div>
)

export default Social