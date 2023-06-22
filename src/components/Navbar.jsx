import { useState } from "react"
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import SelectTransla from "./SelectTranslte/SelectTranslate"



const Navbar = () => {
  const [values, setValues] = useState(true)
  const handleNav = () => {
    setValues(!values)
  }

  return (
    <nav className="w-fully flex py-6 justify-between items-center navbar">
      <img src={logo} alt="vrgen" className="w-[130px] h-[100px]" />
      <SelectTransla />


      <div className="flex flex-row-reverse space-x-4 space-x-reverse gap-7">
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins  font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}   text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/*                 Phone Format                 */}

      <div onClick={()=>handleNav()} className='block md:hidden'>
        {
          !values ? <img src={close} className="w-[20px]" alt="" /> : <img src={menu} className="w-[30px]" alt="" />
        }
      </div>

      <div className={!values ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500" : 'fixed  left-[-100%]'}>
        <img src={logo} alt="vrgen" className="w-[100px] h-[70px] mx-6 my-6" />

        <ul className="bg-primary">
        <li className="border-b border-gray-600 font-poppins font-normal cursor-pointer text-[16px] px-7 py-4 uppercase mr-10">
            <SelectTransla />
            </li>
          {navLinks.map((nav, index) => (
            <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] px-7 py-4 uppercase ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} ${nav.border === 1 ? 'border-b border-gray-600 ' : null} text-white `}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
           
        </ul>
      </div>
    </nav>
  )
}

export default Navbar