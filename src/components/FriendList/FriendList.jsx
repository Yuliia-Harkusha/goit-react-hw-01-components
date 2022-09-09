import PropTypes from 'prop-types';
import { FriendListContainer, FriendsListItem, FriendImg, FriendName, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListContainer>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendsListItem key={id}>
                        <Status isOnline={isOnline}>{isOnline ? '🟢' : '🔴' }</Status>
                        <FriendImg src={avatar} alt="User avatar" width="48" />
                        <FriendName>{name}</FriendName>
                    </FriendsListItem>
                )
            }
            )}
        </FriendListContainer>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired,
    )
}