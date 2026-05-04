import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";

function Home() {
  const [emps, setEmps] = useState([]);
  const [emp, setEmp] = useState({ id: 0, name: "", address: "" });

  useEffect(() => {
    var someArray = [
      { id: 1, name: "Prathamesh", address: "Pune" },
      { id: 2, name: "Ganesh", address: "Nanded" },
      { id: 3, name: "Nagesh", address: "Kandhar" },
      { id: 4, name: "Aditya", address: "Banglore" },
      { id: 5, name: "Janak", address: "China" },
    ];
    setEmps(someArray);
  }, []);

  const remove = (id) => {
    var copyOfEmps = [...emps];
    var filteredEmps = copyOfEmps.filter((e) => {
      return e.id != id;
    });
    setEmps(filteredEmps);
  };

  const OnTextChange = (args) => {
    var copyOfEmp = { ...emp };
    copyOfEmp[args.target.name] = args.target.value;
    setEmp(copyOfEmp);
  };

  const addrecord = () => {
    var copyOfEmps = [...emps];
    var copyOfEmp = { ...emp };

    copyOfEmps.push(copyOfEmp);

    setEmps(copyOfEmps);
    setEmp({ id: 0, name: "", address: "" });
  };

  return (
    <>
      <div className="container">
        <label>ID</label>
        <input
          type="text"
          name="id"
          className="form-control"
          value={emp.id}
          onChange={OnTextChange}
        />
        <hr></hr>

        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={emp.name}
          onChange={OnTextChange}
        />
        <hr></hr>

        <label>Address</label>
        <input
          type="text"
          name="address"
          className="form-control"
          value={emp.address}
          onChange={OnTextChange}
        />
        <hr></hr>

        <button onClick={addrecord} className="btn btn-primary">
          Add Record
        </button>
        <hr></hr>

        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {emps.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          remove(e.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
