const dummyData = {
    branches: [
      {
        id: 1,
        name: "Branch 1",
        batches: [
          {
            id: 101,
            name: "Batch A",
            subject: "java",
            topic: "Loop",
            session: "Knowledge",
            totalStudent: 6,
            present: 5,
            absent: 1,
            online: 3,
            offline: 3,
            students: [
              { id: 1001, name: "Rahul", phone: "9876543210", marks: "85%", attendance: "90%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/1.jpg" },
              { id: 1002, name: "Priya", phone: "9876543211", marks: "78%", attendance: "75%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/women/2.jpg" },
              { id: 1003, name: "Abhi", phone: "9876543210", marks: "80%", attendance: "85%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/3.jpg" },
              { id: 1004, name: "Raju", phone: "9876543211", marks: "72%", attendance: "70%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/men/4.jpg" },
              { id: 1005, name: "Ramesh", phone: "9876543210", marks: "88%", attendance: "95%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/5.jpg" },
              { id: 1006, name: "Rohit", phone: "9876543211", marks: "76%", attendance: "80%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/men/6.jpg" }
            ]
          },
          {
            id: 102,
            name: "Batch B",
            subject: "C",
            topic: "Loop",
            session: "Test",
            totalStudent: 7,
            present: 6,
            absent: 1,
            online: 4,
            offline: 3,
            students: [
              { id: 1007, name: "Amit", phone: "9876543212", marks: "92%", attendance: "95%", occupation: "MCA", image: "https://randomuser.me/api/portraits/men/7.jpg" },
              { id: 1008, name: "Sneha", phone: "9876543213", marks: "88%", attendance: "85%", occupation: "BBA", image: "https://randomuser.me/api/portraits/women/8.jpg" },
              { id: 1009, name: "Rahul", phone: "9876543210", marks: "85%", attendance: "90%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/9.jpg" },
              { id: 1010, name: "Priya", phone: "9876543211", marks: "78%", attendance: "75%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/women/10.jpg" },
              { id: 1011, name: "Abhi", phone: "9876543210", marks: "80%", attendance: "85%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/11.jpg" },
              { id: 1012, name: "Raju", phone: "9876543211", marks: "72%", attendance: "70%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/men/12.jpg" },
              { id: 1013, name: "Ramesh", phone: "9876543210", marks: "88%", attendance: "95%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/13.jpg" }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Branch 2",
        batches: [
          {
            id: 103,
            name: "Batch A",
            subject: "Computer Science",
            topic: "Data Structures",
            session: "Knowledge",
            totalStudent: 5,
            present: 4,
            absent: 1,
            online: 2,
            offline: 3,
            students: [
              { id: 1014, name: "Rohit", phone: "9876543214", marks: "80%", attendance: "85%", occupation: "MBA", image: "https://randomuser.me/api/portraits/men/14.jpg" },
              { id: 1015, name: "Neha", phone: "9876543215", marks: "90%", attendance: "95%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/women/15.jpg" },
              { id: 1016, name: "Sneha", phone: "9876543213", marks: "88%", attendance: "85%", occupation: "BBA", image: "https://randomuser.me/api/portraits/women/16.jpg" },
              { id: 1017, name: "Rahul", phone: "9876543210", marks: "85%", attendance: "90%", occupation: "B.Tech", image: "https://randomuser.me/api/portraits/men/17.jpg" },
              { id: 1018, name: "Priya", phone: "9876543211", marks: "78%", attendance: "75%", occupation: "B.Sc", image: "https://randomuser.me/api/portraits/women/18.jpg" }
            ]
          }
        ]
      }
    ]
  };
  
  export default dummyData;
  