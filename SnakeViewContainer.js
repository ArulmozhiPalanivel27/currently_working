import React, { Component } from 'react';
import { connect } from 'react-redux';
import SnakeView from '../components/SnakeView'

class SnakeViewContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper list-section">
                <SnakeView />
            </div>
        );
    }
}
/* 
function mapStateToProps(state) {
    return {
        roles: state.commonReducer.roles
    };
}
 */
export default (SnakeViewContainer);