import React from "react";
import "./ListItems.css";
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
        <h1>
          {item.data},{item.title}
        
        </h1>
        <span >
          <h2 onClick={()=>{props.delete(item.ide)}}>del</h2>
        </span>
      </div>
    );
  });
  const mytemp = [...mylist];


  return <div>{myListitem}</div>;
}

export default ListItems;
