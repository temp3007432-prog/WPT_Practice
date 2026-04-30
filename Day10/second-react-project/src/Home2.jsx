import { Component } from "react";

class Home extends Component {
    state = { emps : [{id : 11, firstName :"Emily1",lastName : "Johnson1" },
                     {id : 12, firstName :"Emily2",lastName : "Johnson2" },
                     {id : 13, firstName :"Emily3",lastName : "Johnson3" },
                     {id : 14, firstName :"Emily4",lastName : "Johnson4" }]
             } 
    render() { 
        return (
            <>
            <table border = "1">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.emps.map((emp)=>{
                            return(
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            </>
        );
    }
}
 
export default Home;