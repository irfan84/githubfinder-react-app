import React, { Fragment } from "react";
import { PropTypes } from 'prop-types';
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
return (
    <Fragment>
        {repos.map(repo => (
    <RepoItem key={repo.id} repo={repo} />
    ))}
    </Fragment>
)
};

Repos.propTypes = {
    repos: PropTypes.object.isRequired
};

export default Repos;