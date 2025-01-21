import logo from '../../assets/codingAge.png'

function Header(){
    return(
      <>
      <div className='flex mx-20 my-5'>
        <img src={logo} alt="" className="w-10 h-10"/>
        <div className='font-Merriweather font-bold text-2xl ml-2 mt-2 text-red-900'>CodingAge</div>
      <div className='mx-52 bg-gradient-to-r from-red-800 to-red-600 py-2 px-8 rounded-2xl font-bold font-Rubik text-white '>
        <button className='mr-3 py-1 px-4 hover:bg-white rounded-2xl box hover:text-black'>HOME</button>
        <button className='mr-3 px-4 py-1 hover:bg-white rounded-2xl box hover:text-black'>BATCHES</button>
        <button className='mr-3 px-4 py-1 hover:bg-white rounded-2xl box hover:text-black'>STUDENTS</button>
        <button className='mr-3 px-4 py-1 hover:bg-white rounded-2xl box hover:text-black'>ABOUT</button>
        <button className='mr-3 px-4 py-1 hover:bg-white rounded-2xl box hover:text-black'>CONTACT US</button>
      </div>
      <button className='py-2 px-8 rounded-2xl font-bold font-Rubik text-white bg-gray-800'>LOG IN</button>
      </div>
      </>
    )
}
export default Header;