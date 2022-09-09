import { Profile } from "./Profile/Profile";
import user from '../dataJson/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from "../dataJson/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../dataJson/friends.json";

export const App = () => {
  return (
    <div>
      < Profile
        avatar = {user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats = {user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />;
    </div>
  );
};
