import imageUrl from '../../assets/image.png';


function Attendance (){
    return (
        <>
        <div className='top-[15vh] relative mb-[15vh] text-center'>
         <div className='text-xl  text-red-700 font-bold my-10'>ATTENDENCE</div>
        <div className="overflow-x-auto border-2 shadow-lg mx-10 ">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200 text-center">
                  <th className="p-2 border-2 font-Merriweather "></th>
                  <th className="p-2 border-2 ">Total no. of days</th>
                  <th className="p-2 border-2">No. of working days</th>
                  <th className="p-2 border-2">No. of days Present</th>
                  <th className="p-2 border-2">No. of days Absent</th>
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
                  <td className="p-2 text-center">
                      365
                    </td>
                    <td className="p-2 text-center">
                      150
                    </td>
                    <td className="p-2 text-center font-bold text-green-700">
                      125
                    </td>
                    <td className="p-2 text-center font-bold text-red-700">
                      25
                    </td>
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
                  <td className="p-2 text-center">
                      365
                    </td>
                    <td className="p-2 text-center">
                      150
                    </td>
                    <td className="p-2 text-center font-bold text-green-700">
                      125
                    </td>
                    <td className="p-2 text-center font-bold text-red-700">
                      25
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </>
    )
}
export default Attendance;