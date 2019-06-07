import React, { Component } from 'react'
import File from './File'
import Folder from './Folder'

export default class FolderContainer extends Component {

    render() {
        const items = this.props.data;
        let folderItems = [];
        let index=0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type === 'dir') {
                folderItems.push(<Folder key={index++} name={items[i].name}/>);
            } else {
                folderItems.push(
                    <File key={index++} name={items[i].name}/>
                );
            }
            if (items[i].children) {
                folderItems.push(<FolderContainer key={index++} data={items[i].children}/>);
            }
        }

        return (
            <ul>
                {folderItems}
            </ul>
        );
    }
}
