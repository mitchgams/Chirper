import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
    return (
        <React.Fragment>
            <Avatar url={props.user.avatarUrl} />
            <h5 className="mt-3 better-font" id="chirper-user">{props.user.name}</h5>
        </React.Fragment>
    );
}

export default UserInfo;