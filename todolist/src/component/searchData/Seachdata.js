import React from "react";
import { useState, useEffect } from "react";

const Seachdate = () => {
  const [value, setvalue] = useState([]);
  const [fliterval, setfilterval] = useState("");
  const [searchapiData, setsearchapiData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json().then((json) => {
          setvalue(json);
          setsearchapiData(json);
        })
      );
    };
    fetchData();
  }, []);
  const searchanyData = (e) => {
    if (e.target.value === "") {
      setvalue(searchapiData);
    } else {
      const fill = searchapiData.filter((iteam) =>
        iteam.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (fill.length > 0) {
        setvalue(fill);
      } else {
        setvalue([{ name: "NO_DATA" }]);
      }
    }
    setfilterval(e.target.value);
  };

  return (
    <>
      <div className="conatiner">
        <div>
          <input
            type="text"
            style={{
              backgroundColor: "#bfcbd3",
              justifyContent: "center",
              display: "flex",
            }}
            className="inpu"
            value={fliterval}
            onInput={(e) => searchanyData(e)}
          />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th className="thead">NAME</th>
              <th className="thead">USERNAME</th>
              <th className="thead">EMIAL_ID</th>
            </tr>
          </thead>
          {value.map((iteam) => {
            return (
              <tr>
                <th>{iteam.name}</th>
                <th>{iteam.username}</th>
                <th>{iteam.email}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Seachdate;
