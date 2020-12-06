import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ListItems(props) {
  const mylist = props.lister;

  const myListitem = mylist.map((item) => {
    return (
      <div key={item.ide} id="box">
        <p>
          {item.title}-{item.data} Rs
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              id="faicons"
              onClick={() => {
                props.delete(item.ide);
              }}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });

  console.log(myListitem);
  if (myListitem.length != 0) {
    return <div className="mybox">{myListitem}</div>;
  } else {
    console.log("no expense");
    return (
      <h2 id="null" className="mt-5">
        No expense recorded
      </h2>
    );
  }
}

export default ListItems;
