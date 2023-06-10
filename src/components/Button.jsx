
const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6  bg-gradient-to-r from-violet-600 to-pink-500 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button