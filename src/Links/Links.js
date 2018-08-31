import React, {Component} from 'react';
import LinksList from './LinksList';
import ActiveList from './ActiveArticlesList';
import AnimatedWrapper from '../components/AnimatedWrapper';

import './LinksStylesheet.css';

class LinksComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 link-list">
                        <LinksList/>
                    </div>
                    <div className="col-md-6 active-list">
                        <ActiveList link={{title: "React",}}/>
                    </div>
                </div>
            </div>
        );
    }
}

const Links = AnimatedWrapper(LinksComponent);
export default Links;
