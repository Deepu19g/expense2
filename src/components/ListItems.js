import React from "react";
import "./ListItems.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function ListItems(props) {
  const mylist = props.lister;
  
  // props.set((prev) => {
  //   const mytempobj = {
  //     key: props.selectedday,
  //     value: mylist,
  //   };
  //   return { ...prev, mytempobj };
  // });
  const myListitem = mylist.map((item) => {
    return (
      
      <div key={item.ide} id="box">
        <p>
          {item.data},{item.title}
          <span >
          
          <FontAwesomeIcon className="faicons" icon="trash" id="faicons" onClick={()=>{props.delete(item.ide)}}></FontAwesomeIcon>
        </span>
        </p>
        
      </div>
    );
  });
  const mytemp = [...mylist];


  return <div className="mybox">{myListitem}</div>;
}

export default ListItems;
