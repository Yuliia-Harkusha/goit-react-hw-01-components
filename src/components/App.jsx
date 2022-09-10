import { Profile } from "./Profile/Profile";
import user from '../dataJson/user.json';
import { Statistics } from "./Statistics/Statistics";
import data from "../dataJson/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../dataJson/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../dataJson/transactions.json";
import { Section } from "./Section.styled";

export const App = () => {
  return (
    <div>
      <Section>
        < Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Section>
      
      <Section>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>
      
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
