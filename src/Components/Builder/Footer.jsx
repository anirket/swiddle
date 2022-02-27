import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="hidden mt-5 mb-3 bg-gray-800 text-white justify-around items-center  bottom-0 p-4 md:flex pt-4">© 2021 ARK <div className="social-icons flex justify-between w-14 text-xl"><a href="https://twitter.com/anirket"><FaTwitter /></a><a href="https://github.com/anirket"><FaGithub /></a></div></footer>
  )
}

export default Footer