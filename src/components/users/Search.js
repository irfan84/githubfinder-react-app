import React, {Fragment, useState} from "react";
import { searchUser, setLoading } from "../../actions/github";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const Search = ({ searchUser }) => {
    const [formData, setFormData] = useState({
        text: ''
    });

    const { text } = formData;
    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        setLoading();
        searchUser(text);
    };

    return (
        <Fragment>
        <form onSubmit={e => onSubmit(e)} className="form">
            <input
                type='text'
                name='text'
                placeholder='Search Users...'
                value={text}
                onChange={onChange}
            />
            <input
                type='submit'
                value='Search'
                className='btn btn-dark btn-block'
            />
        </form>
        </Fragment>
    )
};

Search.propTypes = {
    searchUser: PropTypes.func.isRequired
};


export default connect(null, { searchUser })(Search);
