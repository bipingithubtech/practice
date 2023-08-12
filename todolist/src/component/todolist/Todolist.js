import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [value, setvalue] = useState("");
  const [add, setadd] = useState([""]);
  const addvalue = () => {
    if (!value) {
    } else {
      setadd([...add, value]);
      setvalue("");
    }
  };
  const deleteIteam = (id) => {
    const update = add.filter((val, ind) => {
      return ind !== id;
    });
    setadd(update);
  };
  const removeAll = () => {
    return setadd([]);
  };

  return (
    <>
      <div className="main-div">
        <form>
          <div className="child-name">
            <label style={{ color: "black", fontSize: "20px" }}>
              ADD YOUR ITEAMS
            </label>
          </div>
          <div className="additeams">
            <input
              type="text"
              className="inputText"
              placeholder="addIteams.."
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <i
              className="bi bi-plus-lg"
              title="aad iteams"
              onClick={addvalue}
            ></i>
          </div>
          <div className="showiteam">
            {add.map((val, ind) => {
              return (
                <div className="eachiteams">
                  <h2 key={ind}>{val}</h2>
                  <i
                    className="bi bi-trash-fill"
                    onClick={() => deleteIteam(ind)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="deleteall">
            <button className="third" onClick={removeAll}>
              check list
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Todolist;
