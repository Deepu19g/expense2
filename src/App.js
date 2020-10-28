import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Calendar2 from "./components/Calendar2";
//import Calendar from './components/Calendar';
import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
import "./components/stylesheet.css";
import ListItems from "./components/ListItems";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash);

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
    ide: " ",
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
    var teksum = 0;
    var tekmsum = 0;
    var list2 = [];
    var Masterobject = JSON.parse(localStorage.getItem("Masterkey"));
    setsuperstate(Masterobject);
    if (Masterobject) {
      for (const [key, value] of Object.entries(Masterobject)) {
        if (key == new Date().toDateString()) {
     
          addtolist(value)
          for (const prim of value) {
            console.log(prim);
            teksum += Number(prim.data);
          }
        }
        if (new Date(key).getMonth() == new Date().getMonth()) {
          for (const oback of value) {
            tekmsum += Number(oback.data);
          }
        }
      }
      //console.log(list2);
      settt(teksum);
      setmtotal(tekmsum);
      
    }
  }, []);
  function myFunction() {
    var element = document.getElementById("hidden");
    element.classList.toggle("mystyle");
    var blur=document.getElementById("blur");
    blur.classList.toggle("active")
    
  }

  var temp = 0;

  var names = [];

  function handleinput(e) {
    setamount(e.target.value);
    addtocurrent({
      data: e.target.value,

      title: name,
      ide: Date.now(),
    });
  }
  function handlesubmit(event) {
    //const sum=0
    event.preventDefault();

    console.log(selectedday);

    console.log(tempsuper);
    var sum = 0,
      msum = 0;
    var mytemplist;
    var Masterobject = JSON.parse(localStorage.getItem("Masterkey"));
    if (Masterobject) {
      settt(amount);
      console.log("error found");
      mytemplist = [current];
      addtolist(mytemplist);
      addtocurrent({
        data: " ",
        ide: " ",
        title: " ",
      });
      console.log(mytemplist);
      var tempsuper = {
        ...superstate,
        [new Date(selectedday).toDateString()]: mytemplist,
      };
      setsuperstate(tempsuper);
      localStorage.setItem("Masterkey", JSON.stringify(tempsuper));
      console.log(tempsuper);
      for (const [key, value] of Object.entries(Masterobject)) {
        if (key == new Date(selectedday).toDateString()) {
          for (const obk of value) {
            sum += Number(obk.data);
          }
          sum += +amount;
          settt(sum);
          mytemplist = [...value, current];
          addtolist(mytemplist);
          addtocurrent({
            data: " ",
            ide: " ",
            title: " ",
          });
          console.log(mytemplist);
          console.log(superstate);
          var tempsuper = {
            ...superstate,
            [new Date(selectedday).toDateString()]: mytemplist,
          };
          setsuperstate(tempsuper);
          localStorage.setItem("Masterkey", JSON.stringify(tempsuper));
        }

        if (new Date(key).getMonth() == new Date(selectedday).getMonth()) {
          for (const oba of value) {
            msum += Number(oba.data);
            // console.log(obj);
          }
        }
      }
      msum += Number(amount);
      setmtotal(msum);
    } else {
      sum = amount;
      settt(sum);
      setmtotal(amount);
      console.log("error");
      mytemplist = [current];
      addtolist(mytemplist);
      addtocurrent({
        data: " ",
        ide: " ",
        title: " ",
      });
      console.log(mytemplist);

      var tempsuper = {
        ...superstate,
        [new Date(selectedday).toDateString()]: mytemplist,
      };
      setsuperstate(tempsuper);
      localStorage.setItem("Masterkey", JSON.stringify(tempsuper));
    }
    setname(" ")
    setamount(0)
  }

  console.log(superstate);
  const nextclick = (data) => {
    setselectedday(data.toString());
    var listed = [];
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
          listed = value;
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
    console.log(listed);

    addtolist(listed);
  };
  var teste;
  var tesum = 0;
  var temsum = 0;
  var parse;
  function deleteitem(dat) {
    teste = list.filter((item) => item.ide != dat);
    console.log(teste);
    addtolist(teste);
    var temppsuper = {
      ...superstate,
      [new Date(selectedday).toDateString()]: teste,
    };
    setsuperstate(temppsuper);

    for (const obced of teste) {
      console.log(obced);
      //console.log( typeof (obce.data) )
      tesum += Number(obced.data);
    }
    console.log(tesum);
    settt(tesum);

    for (const [key, value] of Object.entries(temppsuper)) {
      if (new Date(key).getMonth() == new Date(selectedday).getMonth()) {
        for (const obak of value) {
          temsum += Number(obak.data);
          // console.log(obj);
        }
      }
    }
    setmtotal(temsum);

    localStorage.setItem("Masterkey", JSON.stringify(temppsuper));
  }

  return (
    <div className="App" id="blur">
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
        <h1>Month total -{mtotal}</h1>
        <h1>Todays total-{tt}</h1>

        {/* <button onClick={myFunction}>Add Expense</button>*/}

        <button onClick={myFunction}>Add Expense</button>
      </div>

      <ListItems lister={list} delete={deleteitem}></ListItems>
    </div>
  );
}

export default App;
