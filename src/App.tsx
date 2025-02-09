import ListGroup from "./component/ListGroup";
import Alert from "./component/Alert";
import Button from "./component/Button";
import {useState} from "react";
// function App(){
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item:string) => {
//     console.log(item);
//   }
//   return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup></div>
// }


// function App(){
//   return(
//       <div className="alert alert-primary">
//         <Alert>
//           Hello <strong>World!</strong>
//         </Alert>
//       </div>
//   )
// }


function App(){
  const [alertVisible,setAlertVisibility]=useState(false);
  return(
      <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
        <Button onClick={() => setAlertVisibility(true)} children='My Button'/>
      </div>
  )
}
export default App;