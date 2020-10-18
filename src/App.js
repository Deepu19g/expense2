import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Calendar2 from "./components/Calendar2";
//import Calendar from './components/Calendar';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./components/stylesheet.css";
import ListItems from "./components/ListItems";

function App() {
  const [mtotal, setmtotal] = useState(0);
  const [tt, settt] = useState(0);
  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
  const [selectedday, setselectedday] = useState(new Date().toString());
  const [month, setmonth] = useState(new Date());
  const [list, addtolist] = useState([]);
  const [current, addtocurrent] = useState({
    data: " ",
    title: " ",
  });
  const [superstate, setsuperstate] = useState({
    key: " ",
    value: [],
  });
  var tempo = 0;
  //useEffect(() => {
  //  addtolist([]);
  //}, [selectedday]);
  useEffect(() => {
    var Masterobject = JSON.parse(localStorage.getItem("Masterkey"));
    setsuperstate(Masterobject);
  }, []);
  function myFunction() {
    var element = document.getElementById("hidden");
    element.classList.toggle("mystyle");
  }
  var temp = 0;

  var names = [];

  function handleinput(e) {
    setamount(e.target.value);
    addtocurrent({
      data: e.target.value,

      title: name,
    });
  }
  function handlesubmit(event) {
    //const sum=0
    event.preventDefault();
    
    //const mytemplist = [...list, current];
   // console.log(mytemplist);
   // addtolist(mytemplist);
    addtocurrent({
      data: " ",
      key: " ",
      title: " ",
    });
    console.log(selectedday);
    var tempsuper = {
      ...superstate,
      [new Date(selectedday).toDateString()]: mytemplist,
    };
    console.log(tempsuper);
    var sum = 0,
      msum = 0;
    var Masterobject = JSON.parse(localStorage.getItem("Masterkey"));
    if (Masterobject) {
      for (const [key, value] of Object.entries(Masterobject)) {
        if (key == new Date(selectedday).toDateString()) {
          for (const obk of value) {
            sum += Number(obk.data);
          }
          sum += +amount;
          settt(sum);
          const mytemplist = [...value, current];
         console.log(mytemplist);
         addtolist(mytemplist);
        }

        if (new Date(key).getMonth() == new Date(selectedday).getMonth()) {
          for (const oba of value) {
            msum += Number(oba.data);
            // console.log(obj);
          }
          msum += Number(amount);
          setmtotal(msum);
        } else {
          settt(amount);
        }
      }
    } else {
      sum = amount;
      settt(sum);
      setmtotal(amount);
    }

    console.log(sum);
    setsuperstate(tempsuper);
    localStorage.setItem("Masterkey", JSON.stringify(tempsuper));
  }

  {
    /*const tempmonth = localStorage.getItem(month);
    if (tempmonth) {
      localStorage.setItem(month.toString(), (+tempmonth + +tempo).toString());
      setmtotal(+tempmonth + +tempo);
    } else {
      localStorage.setItem(month.toString(), tempo.toString());
      setmtotal(+tempo);
    }

    console.log(tempmonth);
    setamount("");
  }*/
  }
  console.log(superstate);
  const nextclick = (data) => {
    setselectedday(data.toString());

    console.log(data);
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    //console.log(selectedday.toString());
    //setmonth(months[data.getMonth()]);

    const storeddata = JSON.parse(localStorage.getItem("Masterkey"));

    var temp = 0,
      tempmsum = 0;

    if (storeddata) {
      for (const [key, value] of Object.entries(storeddata)) {
        console.log(data.toString());
        if (key == data.toDateString()) {
          for (const obj of value) {
            temp += Number(obj.data);
            // console.log(obj)
          }
        }
        if (new Date(key).getMonth() == data.getMonth()) {
          for (const obc of value) {
            tempmsum += Number(obc.data);
            // console.log(obj);
          }
        }
      }
      console.log(tempmsum);
      if (tempmsum > 0) {
        setmtotal(tempmsum);
      } else {
        setmtotal(0);
      }
      if (temp > 0) {
        settt(temp);
      } else {
        settt(0);
      }
      console.log(temp);
    } else {
      settt(0);
      setmtotal(0);
    }

    //console.log(data.getMonth().toString())

    //{
    //  const presentmonth = localStorage.getItem(months[data.getMonth()]);
    //console.log(presentmonth);
    //if (presentmonth) {
    //  setmtotal(presentmonth);
    //} else {
    //  setmtotal(0);

    //  console.log("consider");
    //}}
  };

  return (
    <div className="App">
      <div id="hidden" className="box hidden">
        <form onSubmit={handlesubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            id={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            id={amount}
            onChange={handleinput}
          ></input>
          <br></br>
          <input type="submit" onClick={myFunction}></input>
        </form>
      </div>

      <div className="calender">
        <Calendar2 nextclick={nextclick}></Calendar2>
      </div>
      {/*<Calendar nextday={nextday} storedNames={storedNames}></Calendar>*/}

      <div id="disp">
        <h2>Month total -{mtotal}</h2>
        <h2>Todays total-{tt}</h2>

        {/* <button onClick={myFunction}>Add Expense</button>*/}

        <button onClick={myFunction}>Add Expense</button>
      </div>

      <ListItems
        list={list}
        set={setsuperstate}
        selectedday={selectedday}
      ></ListItems>
    </div>
  );
}

export default App;
