import PropTypes from 'prop-types';
import {
  AiOutlineUsergroupAdd,
  AiOutlineEye,
  AiOutlineStar,
} from 'react-icons/ai';
import {
  ProfileWrapper,
  Img,
  Description,
  UserName,
  UserInfo,
  Stats,
  ListItem,
  ListItemText,
  ListItemNumber,
} from './Profile.styled';

export const Profile = ({
  username = 'User name',
  tag,
  location = 'Location',
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <Description>
        <Img src={avatar} alt="User avatar" width={200} />

        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <ListItem>
          <ListItemText>
            <AiOutlineUsergroupAdd />
            Followers
          </ListItemText>
          <ListItemNumber>{followers}</ListItemNumber>
        </ListItem>
        <ListItem>
          <ListItemText>
            <AiOutlineEye /> Views
          </ListItemText>
          <ListItemNumber>{views}</ListItemNumber>
        </ListItem>
        <ListItem>
          <ListItemText>
            <AiOutlineStar /> Likes
          </ListItemText>
          <ListItemNumber>{likes}</ListItemNumber>
        </ListItem>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
