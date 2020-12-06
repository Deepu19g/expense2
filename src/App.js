import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "react-bootstrap/Modal";
import Calendar2 from "./components/Calendar2";
//import Calendar from './components/Calendar';
import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/stylesheet.css";
import ListItems from "./components/ListItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
library.add(faTrash, faClipboard);

function App() {
  const [mtotal, setmtotal] = useState(0);
  const [tt, settt] = useState(0);
  const [name, setname] = useState("");
  const [amount, setamount] = useState();
  const [selectedday, setselectedday] = useState(new Date().toString());
  const [month, setmonth] = useState(new Date());
  const [list, addtolist] = useState([]);
  const [truth, settruth] = useState(false);
  const [current, addtocurrent] = useState({
    data: " ",
    title: " ",
    ide: " ",
  });
  const [superstate, setsuperstate] = useState({
    key: " ",
    value: [],
  });
  const [highlight, sethighlight] = useState([]);

  var tempo = 0;

  //useEffect(() => {
  //  addtolist([]);
  //}, [selectedday]);

  useEffect(() => {
    var hltarray = [];
    var teksum = 0;
    var tekmsum = 0;
    var list2 = [];
    var Masterobject = JSON.parse(localStorage.getItem("Masterkey"));
    setsuperstate(Masterobject);
    if (Masterobject) {
      for (const [key, value] of Object.entries(Masterobject)) {
        if (key == new Date().toDateString()) {
          addtolist(value);
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
        hltarray.push(new Date(key));
      }
      sethighlight(hltarray);
      console.log(hltarray);
      settt(teksum);
      setmtotal(tekmsum);
    }
  }, []);
  function myFunction() {
    settruth(true);
  }
  function myFunction2() {
    setname("");
    setamount(0);

    settruth(false);
  }

  var temp = 0;

  var names = [];

  function handleinput(e) {
    setamount(e.target.value);
    console.log(e.target.value);
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
          console.log(amount);
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
    console.log(highlight);
    var temphlt = [...highlight, new Date(selectedday)];
    sethighlight(temphlt);
    setname(" ");
    setamount(0);
    settruth(false);
  }

  const nextclick = (data) => {
    console.log(data);
    console.log(data.toDateString());
    setselectedday(data.toString());
    var listed = [];

    const storeddata = JSON.parse(localStorage.getItem("Masterkey"));

    var temp = 0,
      tempmsum = 0;

    if (storeddata) {
      for (const [key, value] of Object.entries(storeddata)) {
        console.log(data);
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
    var delarray = [];
    teste = list.filter((item) => item.ide != dat);
    console.log(teste);
    if (teste.length != 0) {
      addtolist(teste);

      var subsuper = {
        ...superstate,
        [new Date(selectedday).toDateString()]: teste,
      };

      setsuperstate(subsuper);

      for (const obced of teste) {
        console.log(obced);
        //console.log( typeof (obce.data) )
        tesum += Number(obced.data);
      }

      settt(tesum);
      localStorage.setItem("Masterkey", JSON.stringify(subsuper));

      for (const [key, value] of Object.entries(subsuper)) {
        if (new Date(key).getMonth() == new Date(selectedday).getMonth()) {
          for (const obak of value) {
            temsum += Number(obak.data);
            // console.log(obj);
          }
        }
        delarray.push(new Date(key));
      }
    } else {
      var subsuper = {};
      //delete temppsuper.new Date(selectedday).toDateString();
      for (const [key, value] of Object.entries(superstate)) {
        if (key != new Date(selectedday).toDateString()) {
          subsuper = {
            ...subsuper,
            [key]: value,
          };
        }
      }
      addtolist(teste);
      settt(0);
      console.log(subsuper);
      setsuperstate(subsuper);
      localStorage.setItem("Masterkey", JSON.stringify(subsuper));

      for (const [key, value] of Object.entries(subsuper)) {
        if (new Date(key).getMonth() == new Date(selectedday).getMonth()) {
          for (const obak of value) {
            temsum += Number(obak.data);
            // console.log(obj);
          }
        }
        delarray.push(new Date(key));
      }
    }
    setmtotal(temsum);
    sethighlight(delarray);
  }

  return (
    <div className="App ">
      {/*<Container fluid>
     <Row className="head d-flex justify-content-center">
       <FontAwesomeIcon icon="clipboard"></FontAwesomeIcon>
        <h1>Expense Tracker</h1>
      </Row>
     </Container>*/}
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex  justify-content-center"
      >
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon="clipboard"></FontAwesomeIcon>
          Expense Tracker
        </Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={6} className="left">
            <div className="calender">
              <Calendar2 nextclick={nextclick} highlight={highlight} />
            </div>

            <div id="disp">
              <h1>Month total :{mtotal} Rs</h1>
              <h1>Todays total:{tt} Rs</h1>
              <Button variant="dark" onClick={myFunction}>
                Add Expense
              </Button>{" "}
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column">
            <ListItems lister={list} delete={deleteitem}></ListItems>
          </Col>
        </Row>
      </Container>

      <Modal
        show={truth}
        onRequestClose={myFunction2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <form
            onSubmit={handlesubmit}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h2 id="val1">Title:</h2>
            <input
              type="text"
              value={name}
              id={name}
              onChange={(e) => setname(e.target.value)}
              required
            ></input>
            <br></br>
            <br></br>
            <h2 id="val2">Amount:</h2>
            <input
              type="number"
              //value={amount}
              id={amount}
              //className="second"
              onChange={handleinput}
              required
            ></input>
            <br></br>
            <p className="d-flex">
              <input type="submit" onClick={myFunction}></input>
              <Button variant="danger" size="lg" onClick={myFunction2}>
                close
              </Button>{" "}
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
