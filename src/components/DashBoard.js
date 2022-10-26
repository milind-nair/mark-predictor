import React, { useState } from "react";
import Card from "./Card";

function DashBoard() {
  const addClassroom = () => {
    classroom.push({ title: cname, desc: cno });
    setClassroom([...classroom]);
    // console.log(classroom);
  };

  const [classroom, setClassroom] = useState([]);
  const [cname, setCname] = useState("");
  const [cno, setCno] = useState("");
  return (
    <>
      <div className="container my-3 mx-3">
        <form
          className="row g-3"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="col-md-2">
            <label htmlFor="validationDefault01" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={cname}
              onChange={(event) => {
                setCname(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="validationDefault02" className="form-label">
              Class Number
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              value={cno}
              onChange={(event) => {
                setCno(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-2 mt-5">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addClassroom}
            >
              Add Classroom
            </button>
          </div>
        </form>
      </div>

      <div className="container"></div>
      <div className="row">
        {classroom.map((element) => {
          return (
            <div className="col-md-3" key={element + Math.random().toString()}>
              <Card title={element.title} desc= {element.desc}/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DashBoard;
