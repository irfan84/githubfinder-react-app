import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import UserItem from "./UserItem";

const Users = ({github: {users, loading}}) => {
    return <Fragment>{loading ? (<Spinner />)
        : (<Fragment>
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
            </Fragment>)
        }
    </Fragment>

};

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

Users.propTypes = {
    github: PropTypes.object.isRequired
};

const mapStateToProps = state  => ({
    github: state.github
});

export default connect(mapStateToProps) (Users);