import React, { Component } from 'react'

export default class Folder extends Component {
    render=()=>{

        return (
            <li className='folder-item'>{this.props.name}</li>
        );
    };
}