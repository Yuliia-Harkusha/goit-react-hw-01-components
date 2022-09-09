import { Profile } from "./Profile/Profile";
import user from '../dataJson/user.json';

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
    </div>
  );
};
