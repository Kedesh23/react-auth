import React from 'react';


export default function Input(props){
    return (
        <input type = {props.type} placeholder={props.placeholder} id = {props.id} value = {props.value} className={props.className}/>
    )
}