import ProfileEditor from "./ProfileEditor";
import UserList from "./UserList";
import Counter from "./Counter"
const App = () => {
  return (
<div className="p-4 h-screen flex items-center justify-between flex-col">
      <h1 className="text-3xl font-bold mb-4">Buggy Dashboard 🐛</h1>
      <ProfileEditor />
      <UserList />
      <Counter/>
      <footer className="mt-8 p-4 bg-gray-500 text-black w-full items-center text-center">
        Debugging Challenge 🧠
      </footer>
    </div>
  )
}

export default App