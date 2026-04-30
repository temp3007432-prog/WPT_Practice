import { Component } from "react";

class Home extends Component {
  state = { emps: [] };

  GetData = () => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var reply = JSON.parse(helper.responseText);
        this.setState({ emps: reply.users });
      }
    };
    helper.open("GET", "https://dummyjson.com/users");
    helper.send();
  };


  //
  remove = (id) => {
    var copyOfEmp = [...this.state.emps];
    var filterdAry = copyOfEmp.filter((emp)=>{return emp.id !=id})
    this.setState({emps:filterdAry});
  };
  //   componentDidMount() {
  //     this.GetData();
  //   }
  render() {
    return (
      <>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Username</th>
              <th>DOB</th>
              <th>City</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.emps.map((emp) => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.username}</td>
                  <td>{emp.birthDate}</td>
                  <td>{emp.address.city}</td>
                  <td>
                    <img src={emp.image} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.remove(emp.id);
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

        <button onClick={this.GetData}>Get Data</button>
      </>
    );
  }
}

export default Home;
