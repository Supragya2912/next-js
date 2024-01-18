

 async function UsersList (){
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = response.json();
      return data;
  
}

async function UserList () {
    let users = await UsersList();
    // console.log(users);
    return (
     <>
     <h1>Users List </h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
     </>
    )
 }
 
 export default UserList;