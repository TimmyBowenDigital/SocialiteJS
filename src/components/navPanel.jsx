import React, {Suspense} from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import '../App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'react-bootstrap';

class NavPanel extends React.Component {
    render() {
        return (
            <container>
                <Nav
                    onLinkClick={_onLinkClick}
                    selectedKey="key3"
                    selectedAriaLabel="Selected"
                    ariaLabel="Navigation Panel"
                    styles={{
                        height: '100%',
                        root: {
                            width: 'auto',
                            boxSizing: 'border-box',
                            border: '1px solid #eee',
                            display: 'inline-flex',
                            overflowY: 'auto',
                            top: 0,
                            bottom: 0,
                            position: 'relative',
                            height: '100%'
                        }
                    }}
                    groups={[
                        {
                            links: [
                                {
                                    name: 'Home',
                                    url: '/',
                                    expandAriaLabel: 'Expand Home section',
                                    collapseAriaLabel: 'Collapse Home section',
                                },
                                {
                                    name: 'Messages',
                                    url: '/messages'
                                },
                                {
                                    name: 'Whats New?',
                                    url: '/features'
                                },
                                {
                                    name: 'Profile',
                                    url: '/profile'
                                }
                            ]
                        }
                    ]}
                />
            </container>
        );
    }
}

function _onLinkClick(event, item) {
    if (item && item.name === 'News') {
        alert('News link clicked');
    }
}

export default NavPanel
