import React from 'react';
import { connect } from 'react-redux';
import Users from './Users'
import axios from 'axios';
import { addUser, updateNextUrl, userFetching } from '../redux/actions';

class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.userFetching(true)
        axios.get(this.props.url).then(response => {
            this.props.userFetching(false)
            response.data.users.map(user => this.props.addUser(user.id, user.name, user.email, user.phone,
                user.position, user.position_id, user.registration_timestamp, user.photo))
        })
    }

    updateNextUrl = () => {
        this.props.userFetching(true)
        axios.get(this.props.url).then(response => {
            this.props.userFetching(false)
            this.props.updateNextUrl(response.data.links.next_url)
            response.data.users.map(user => this.props.addUser(user.id, user.name, user.email, user.phone,
                user.position, user.position_id, user.registration_timestamp, user.photo))
        })
    }

    render() {
        return <>
            <Users
                updateNextUrl={this.updateNextUrl}
                users={this.props.users}
                url={this.props.url}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        url: state.users.url,
        isFetching: state.users.isFetching
    }
}

export default connect(mapStateToProps, { addUser, updateNextUrl, userFetching })(UsersContainer)