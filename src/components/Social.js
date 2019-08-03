import React from "react"

import { IoLogoInstagram, IoLogoGithub , IoLogoTwitter, IoLogoLinkedin} from 'react-icons/io';
import { IconContext } from "react-icons";

const Social = () => (

  <div className="mx-auto mt-8 w-100 flex md:justify-end">

    <IconContext.Provider value={{ size: "1.1em" }}>

      <a className="hover:text-white mr-2" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zellement/"><IoLogoInstagram className="inline" />
      </a>

      <a className="hover:text-white mr-2" target="_blank" rel="noopener noreferrer" href="https://github.com/Zellement"><IoLogoGithub className="inline" />
      </a>

      <a className="hover:text-white mr-2" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Zellement"><IoLogoTwitter className="inline" />
      </a>

      <a className="hover:text-white mr-2 md:m-0" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zellement/"><IoLogoLinkedin className="inline" />
      </a>

    </IconContext.Provider>

  </div>
)

export default Social