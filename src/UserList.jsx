import { useState } from "react";

export default function UserList() {
  const [users , setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const showDetail = selectedUser !== null;

  const filteredUsers = users.filter((user) => {
      const  value = user.toLowerCase()
      return user.toLowerCase().includes(value)
    });

  const handleHover = (user) => {
    setTimeout(() => {
      console.log("Hovered over:", user);
    }, 1000);
  };const handleDelete = (index) => {
    setUsers((prevUser) => prevUser.filter((_, i) => i !== index))
  }

  return (
    <div className="mt-4 text-center gap-3">
      <h2 className="text-xl font-bold">Users</h2>

      <input 
      type="text" 
      placeholder="Enter user name"
      value={searchTerm }  
      onChange={(e) => {setSearchTerm(e.target.value)}} className="border p-2 mt-2" />

      <ul className=" flex items-center gap-3 my-10">
        {(filteredUsers.length > 0 ? filteredUsers : users).map(
          (user, index) => (
            <li
              key={`${user}-${index}`}
              onClick={() => {
                setSelectedUser(user);
              }}
              onMouseEnter={() => handleHover(user)}
              className="cursor-pointer hover:bg-gray-200 p-2"
            >
              {user}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newUsers = [...users];
                  newUsers.splice(index, 1);
                  setUsers(newUsers);
                }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {showDetail && (
        <div className="mt-2 p-2 bg-yellow-100">
          Selected: {selectedUser}
          <p>Name length: {selectedUser.length}</p>
        </div>
      )}
    </div>
  );
}
