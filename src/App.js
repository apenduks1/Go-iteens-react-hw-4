import data from "./data.json";
import friends from "./friends.json";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

export default function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
