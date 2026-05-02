import {  useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const [searchText, setsearchText] = useState("");
  const [emp, setEmp] = useState({ id: 0, name: "", address: "" });
  const [emps, setEmps] = useState([
    { id: 1, name: "ganesh", address: "pune" },
    { id: 2, name: "shubham", address: "jalgaon" },
    { id: 3, name: "yathesth", address: "indore" },
    { id: 4, name: "pawan", address: "vashim" },
    { id: 5, name: "vaibhav", address: "latur" },
  ]);

  const onTextChange = (args) => {
    var copyOfEmp = { ...emp };
    copyOfEmp[args.target.name] = args.target.value;
    setEmp(copyOfEmp);
  };

  const addRecord = () => {
    var copyOfEmps = [...emps];
    var copyOfEmp = { ...emp };
    copyOfEmps.push(copyOfEmp);
    setEmps(copyOfEmps);
    setEmp({ id: 0, name: "", address: "" });
  };

  const edit = (empToBeEdited) => {
    setEmp(empToBeEdited);
  };

  const updateRecord = () => {
    var copyOfEmps = [...emps];
    copyOfEmps.map((e) => {
      if (emp.id == e.id) {
        e.name = emp.name;
        e.address = emp.address;
      }
    });
    setEmps(copyOfEmps);
    setEmp({ id: 0, name: "", address: "" });
  };

  const remove = (id) => {
    var copyOfEmps = [...emps];
    var filteredArray = copyOfEmps.filter((e) => {
      return e.id != id;
    });
    setEmps(filteredArray);
  };

  const search = (args) => {
    var searchTextTypedInTextBox = args.target.value;
    setsearchText(searchTextTypedInTextBox);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <input
                  type="number"
                  name="id"
                  className="form-control"
                  value={emp.id}
                  onChange={onTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={emp.name}
                  onChange={onTextChange}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={emp.address}
                  onChange={onTextChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary ms-2" onClick={addRecord}>
                  Add
                </button>
                <button className="btn btn-success" onClick={updateRecord}>
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <label>Search (Address) : </label>
      <input type="text" onChange={search} value={searchText} />
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((e) => {
              if (searchText != "") {
                if (e.address.includes(searchText)) {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.address}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            edit(e);
                          }}
                        >
                          Edit
                        </button>
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
                }
              } else {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          edit(e);
                        }}
                      >
                        Edit
                      </button>

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
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
