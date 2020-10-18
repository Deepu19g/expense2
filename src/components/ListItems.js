import React from "react";
import "./ListItems.css";
function ListItems(props) {
  const mylist = props.list;
  
  // props.set((prev) => {
  //   const mytempobj = {
  //     key: props.selectedday,
  //     value: mylist,
  //   };
  //   return { ...prev, mytempobj };
  // });
  const myListitem = mylist.map((item) => {
    return (
      <div key={item.key}>
        <h1>
          {item.data},{item.title}
        </h1>
      </div>
    );
  });
  const mytemp = [...mylist];


  return <div>{myListitem}</div>;
}

export default ListItems;
