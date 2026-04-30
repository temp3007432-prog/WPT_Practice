import { Component } from "react";

class Home extends Component {
    state = { emp: {name: "Ganesh", address: "Pune"}} 

    renameToPandejii =()=>{
        var copyOfEmp = {...this.state.emp}
        copyOfEmp.name = "Pandejii"

        this.setState({emp: copyOfEmp})
    }

    changeAddress =()=>{
        var copyOfEmp = {...this.state.emp}
        copyOfEmp.address = "Nanded"

        this.setState({emp: copyOfEmp})
    }

    render() { 
        return (
            <><h1>Welcome {this.state.emp.name}</h1>
            <h1>Address is {this.state.emp.address}</h1>
            <button onClick={this.renameToPandejii} >Rename to Pandejii</button>
            <button onClick={this.changeAddress} >Change address to Nanded</button>
            </>
        );
    }
}
 
export default Home;