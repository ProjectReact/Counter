import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "../../components/Counter";

const RootApp = connect(
    ( state ) => {
        return {
            value: state
        }
    },
    ( dispatch ) => {
        return {
            onIncrement: () => dispatch({ type: "INCREMENT" }),
            onDecrement: () => dispatch({ type: "DECREMENT" })
        }
    }    
)( Counter )

export default RootApp;
