import imageUrl from '../../assets/image.png';


function MarkSheet (){
    return (
        <>


  <div className=" sm:ml-72 relative top[20vh] mt-[20vh] mx-10 sm:absolute sm:top-[0vh]">
    <div className='overflow-x-auto border-2 shadow-lg md:w-[60vw] lg:w-[70vw] xl:w-[78vw]'>
    <table className="table-auto w-full ">
      <thead>
        <tr className="bg-gray-200 text-center">
          <th className="p-2 border-2 font-Merriweather">TOPIC</th>
          <th className="p-2 border-2">Flowchart & Algorithm</th>
          <th className="p-2 border-2">Input & Output</th>
          <th className="p-2 border-2">Operators</th>
          <th className="p-2 border-2">Conditions</th>
          <th className="p-2 border-2">Loops</th>
          <th className="p-2 border-2">2D Loops</th>
          <th className="p-2 border-2">Function</th>
          <th className="p-2 border-2">Arrays</th>
          <th className="p-2 border-2">2D Arrays</th>
          <th className="p-2 border-2">String</th>
          <th className="p-2 border-2">Pointer</th>
          <th className="p-2 border-2">Structure & Union</th>
          <th className="p-2 border-2">DMA</th>
          <th className="p-2 border-2">File Handling</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-custom-white">
          <td className="flex items-center p-2">
            <div className="">
              <img
                src={imageUrl}
                alt="User"
                className="w-24 h-16 object-cover mr-2"
              />
              Name
            </div>
          </td>
          {[...Array(14)].map((_, index) => (
            <td key={index} className="p-2 text-center">
              20
            </td>
          ))}
        </tr>
      </tbody>
      <tbody>
        <tr className="bg-custom-white">
          <td className="flex items-center p-2">
            <div className="">
              <img
                src={imageUrl}
                alt="User"
                className="w-24 h-16 object-cover mr-2"
              />
              Name
            </div>
          </td>
          {[...Array(14)].map((_, index) => (
            <td key={index} className="p-2 text-center">
              20
            </td>
          ))}
        </tr>
      </tbody>
    </table>
    </div>
  </div>
        </>
    )
}
export default MarkSheet