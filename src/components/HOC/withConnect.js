import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

const withConnect = (Component, selectors, actions) => {
    const WrappedComponent = (props) => {
        return (
            <Component {...props} />
        )
    }

    const mapStateToProps = (state) => {
        return R.values({...selectors}).reduce((prev, item) => {
            return {...prev, [item.name]: item(state)}
        }, {})
    }

    const mapDispatchToProps = (dispatch) => {
        return R.values({...actions}).reduce((prev, item) => {
            let name = item.name

            const dispatched = (fn) => {
                return (...args) => dispatch(fn(...args))
            }

            return  {...prev, [name]: dispatched(item)}
        }, {})
    }

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}

export default withConnect;
