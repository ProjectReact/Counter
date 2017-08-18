import React, { Component } from "react";

let nextTodoId = 0;

const addTodo = ( text ) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId,
        text
    }
}
export default addTodo;

const setVisibility = ( tilter ) => {
    return {
        type: "SET_VISIBILITY",
        filter
    }
}
export default setVisibility;

const toggleTodo = ( id ) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}
export default toggleTodo;