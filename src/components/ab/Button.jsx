/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Button = ({label,className,onClick}) => {
  return (
    <button
        onClick={onClick}
        className={`bg-gradient-to-r from-gray-300 to-gray-400 px-4 md:px-6 py-2 md:py-3 rounded-2xl font-semibold m-4 inline-block flex-row shadow ${className}`}
    >
      {label}
    </button>
  )
}

export default Button