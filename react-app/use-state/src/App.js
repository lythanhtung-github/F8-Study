import { useState } from "react";

// ----------------------------------------------------------------

// const gifts = [
//   "5 xị",
//   "1 cây xăng",
//   "1 con heo đất"
// ]


// function App() {
//   const [gift, setGift] = useState();

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length);

//     setGift(gifts[index]);
//   }

//   return (
//     <div className="App" style={{ padding: 30 }}>
//       <h1>{gift || "Chưa chọn phần thưởng"}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------
// To-way binding

// function App() {
//   const [name, setName] = useState('');

//   return (
//     <div className="App" style={{ padding: 30 }}>
//       <input
//         value ={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => setName("Lý Thanh Tùng")}>Change Name</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//       //Call API
//       console.log({name, email})
//   }

//   return (
//     <div className="App" style={{ padding: 30 }}>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------
// const courses = [
//   {
//     id: 1,
//     name: '1 DOD'
//   },
//   {
//     id: 2,
//     name: '2 aOa'
//   },
//   {
//     id: 3,
//     name: '3 bOb'
//   }
// ]

// function App() {
//   const [checked, setChecked] = useState(1);


//   const handleClick = () => {
//     console.log("id", checked);
//   }


//   return (
//     <div className="App" style={{ padding: 30 }}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input
//               type="radio"
//               checked={checked === course.id}
//               onChange={() => setChecked(course.id)}
//             />
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleClick}>Save</button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

const courses = [
  {
    id: 1,
    name: '1 DOD'
  },
  {
    id: 2,
    name: '2 aOa'
  },
  {
    id: 3,
    name: '3 bOb'
  }
]

function App() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const handleClick = () => {
    console.log(checked);
  }

  return (
    <div className="App" style={{ padding: 30 }}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleClick}>Save</button>
    </div>
  );
}

export default App;