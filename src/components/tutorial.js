// import React, { useEffect, useState} from "react";
// import {getBallEventJoin} from "../api/balls_api.js";
// function Tutorial() {
//     var [variable, setVariable] = useState(true);
//     const [dataa, setDataa]= useState([]);

//     function onChangeRow(index, val) {
//         dataa[index].id = val;
//         console.log("onChangeRow: ", dataa);
//         setDataa(dataa);
//     }

//     async function fetchData() {
//         const response = await getBallEventJoin(1063771648, true);
//         setDataa(response.data);
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

// 	return (
//         <div class="container mt-5 card">
//         <div class="btn" onClick={() => {setVariable(!variable); console.log(dataa);}}>
//             {variable ? "True":"False"}
//         </div>
//          <table>
//             <thead>
//             <tr>
//               <th scope="col">Ball ID</th>
//               <th scope="col">Event ID</th>
//               <th scope="col">ID</th>
//             </tr>
//           </thead>
//           <tbody className="list">
//               {dataa.map((data, index) => 
//                   <tr>
//                       <td>{data.ball.ball_id}</td>
//                       <td>{data.event.event_id}</td>
//                       <td contentEditable="true" onBlue={(e) => onChangeRow(index, e.target.innerHTML)}>{data.id}</td>
//                   </tr>
//               )}
//           </tbody>
//          </table>
//         </div>
// 	);
// }

// export default Tutorial;
