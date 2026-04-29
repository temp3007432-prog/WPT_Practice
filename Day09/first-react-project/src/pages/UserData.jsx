export default function UserData() 
{
  var helper = new XMLHttpRequest();

  function f1() {
    if (helper.readyState == 4 && helper.status == 200) {
      var jsonObj = JSON.parse(helper.responseText);

      var refTotBody = document.getElementById("tBody");

      for (var i = 0; i < jsonObj.users.length; i++) {
        var user = jsonObj.users[i];
        var row = `
                  <tr>
                          <td>${user.id}</td>
                          <td>${user.firstName}</td>
                          <td>${user.lastName}</td>
                          <td>${user.phone}</td>
                          <td>${user.username}</td>
                          <td>${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}</td>
                          <td>${user.birthDate}</td>
                          <td>
                          <img
                              class="img-fluid"
                              src=${user.image}
                              height="70px"
                              width="70px"
                          />
                          </td>
                      </tr>
                  `;
        refTotBody.innerHTML = refTotBody.innerHTML + row;
      }
    }
  }

  function GetData() {
    helper.onreadystatechange = f1;
    helper.open("GET", "https://dummyjson.com/users");
    helper.send();
  }

  return (
    <>
      <input
        type="button"
        class="btn btn-primary"
        value="Get Data"
        onClick={GetData()}
      />
      <hr />
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Username</th>
              <th>Address</th>
              <th>Birth Date</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody id="tBody"></tbody>
        </table>
      </div>
    </>
  );
}
