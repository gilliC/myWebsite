import React, {Component} from 'react';
import {connect} from 'react-redux';

import ArticleItem from './ArticlesListItem';
import {fetchList} from './actions';

class LinksList extends Component {
    constructor(props) {
        super(props);
        fetchList();

    }
    render() {
        return (
            <div className="app">
                {
                    this.props.list.map(link=>{
                        return <ArticleItem item={link} key={link.title}/>
                    })
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,

    };
    //return the chartData in state (reducer). vocabulary as a prop under the key vocabulary

};
export default connect(mapStateToProps,)(LinksList);

