import React, { Component } from 'react'
import FolderContainer from './FolderContainer'

export default class FolderTree extends Component {
   
    render() {
       const folders = {
            directories: [
                {
                    type: 'filter',
                    name: 'app',
                    children: [
                        {
                            type: 'filter',
                            name: 'index.html'
                        },
                        {
                            type: 'filter',
                            name: 'js',
                            children: [
                                {
                                    type: 'sub-filter',
                                    name: 'main.js'
                                },
                                {
                                    type: 'sub-filter',
                                    name: 'app.js'
                                },
                                {
                                    type: 'sub-filter',
                                    name: 'misc.js'
                                },
                                {
                                    type: 'sub-filter',
                                    name: 'vendor',
                                    children: [
                                        {
                                            type: 'sub-filter',
                                            name: 'jquery.js'
                                        },
                                        {
                                            type: 'sub-filter',
                                            name: 'underscore.js'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'filter',
                            name: 'css',
                            children: [
                                {
                                    type: 'sub-filter',
                                    name: 'reset.css'
                                },
                                {
                                    type: 'sub-filter',
                                    name: 'main.css'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    
        return <FolderContainer data={folders.directories}/>
    }
}