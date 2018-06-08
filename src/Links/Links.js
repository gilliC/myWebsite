import React, {Component} from 'react';
import LinksList from './LinksList';
import ActiveList from './ActiveArticlesList';
import AnimatedWrapper from '../components/AnimatedWrapper';

import './Links.css';


class LinksComponent extends Component {


    render() {
        return (
            <div className="app">
                <div className="col-md-6 col-md-offset-3">

                    <table >

                        <tbody>
                        <tr className="row">
                            <td className="col link-list">
                                <LinksList/>
                            </td>
                            <td className="col active-list">
                                <ActiveList link={{title: "React",}} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

const Links = AnimatedWrapper(LinksComponent);
export default Links;
