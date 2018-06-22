import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchActiveItem} from './actions';
import ArticleLink from './ArticleLink';

class ActiveArticlesList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchActiveItem();
    }

    render() {
        return (
            <div>
                <h1>{this.props.activeItem.title}</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            {this.props.activeItem.articles.map(article => {
                                return <ArticleLink article={article} key={article.title}/>
                            })}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeItem: state.activeItem.item,
    };
};
export default connect(mapStateToProps, {fetchActiveItem})(ActiveArticlesList);