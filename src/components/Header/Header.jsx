import logo from '../../assets/codingAge.png'

function Header(){
    return(
      <>
      <div className='flex mx-10  my-5 fixed z-10 bg-white w-full'>
        <img src={logo} alt="" className="lg:w-10 lg:h-10 md:w-8 md:h-8"/>
        <div className='font-Merriweather font-bold lg:text-2xl md:text-xl ml-2 mt-2 text-red-900'>CodingAge</div>
      <div className='flex md:h-10 xl:h-11 xl:mx-40 md:mx-5 lg:mx-16 bg-gradient-to-r from-red-800 to-red-600 xl:py-2 xl:px-8 lg:py-1 lg:px-4 md:px-2 rounded-2xl  font-bold font-Rubik text-white '>
        <button className='mr-3 xl:px-4 lg:px-2 py-1  hover:bg-white rounded-2xl box hover:text-black'>HOME</button>
        <button className='mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black'>BATCHES</button>
        <button className='mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black'>STUDENTS</button>
        <button className='mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black'>ABOUT</button>
        <button className='mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black'>CONTACT US</button>
      </div>
      <button className='py-2 px-4 md:h-10 xl:h-11 rounded-2xl font-bold font-Rubik text-white bg-gray-800 absolute right-16'>LOG IN</button>
      </div>
      </>
    )
}
export default Header;