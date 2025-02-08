import React from 'react';

const hardcodedAttendanceData = {
    January: [
      ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
      ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
      ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
      ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
    ],
    February: [
      ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
      ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
      ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
      ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
    ],
    March: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
      ],
      April: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
      ],
      May: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'], 
      ],  
      June: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'], 
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'], 
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      July: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absentt'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      August: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      September: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      October: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      November: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
      December: [
        ['Present', 'Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent'],
        ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Absent'],
        ['Absent', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
        ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Absent'],
      ],
  };

  const AttendanceList = () => {
    const renderAttendance = () => {
      return Object.entries(hardcodedAttendanceData).map(([month, weeks]) => (
        <div key={month} className="bg-gradient-to-r from-gray-300 to-gray-200 lg:w-[370px] w-[330px] rounded-lg shadow-xl shadow-black p-2 border border-gray-600 mb-1 ">
          <h3 className="text-xl font-medium text-red-800 mb-4 text-center">{month}</h3>
  
          
          <div className="flex flex-col gap-3">
            {weeks.map((week, index) => (
              <div key={index} className="flex flex-wrap justify-between bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg p-2">
                <h4 className="w-full text-lg font-medium text-black text-center mb-4">Week {index + 1}</h4>
  
                
                <div className="flex space-x-2 justify-between w-full">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center w-1/5">
                      <span className="text-xs font-medium text-gray-900 mb-2">{day}</span>
                      <span
                        className={`font-medium text-base ${
                          week[idx] === 'Present' ? 'text-green-700' : 'text-red-700'
                        }`}
                      >
                        {week[idx] === 'Present' ? '✔️' : '❌'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    };
  

  return (
    <div className="mt-24 w-full  p-5">
      <h1 className="text-2xl font-medium text-center text-red-800 "> ATTENDENCE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 ">
        {renderAttendance()}
      </div>
    </div>
    
  );
};

export default AttendanceList;
