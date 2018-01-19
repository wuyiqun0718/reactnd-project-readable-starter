import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';
import FontIcon from 'material-ui/FontIcon';
// import Post from './Post';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const voteStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1
}

function mapStateToProps(state) {
    return {};
  }
  
function mapDispatchToProps(dispatch) {
    return {
        selectCategory: tab => dispatch(selectCategory(tab))
    };
}

class Main extends Component {
    componentDidMount() {
        // const { style, selectCategory } = this.props;
        // selectCategory({ category: 'main'});
    }
    render() {
        const { style, posts } = this.props;
        posts.sort( (a, b) => a.timestamp - b.timestamp);
        const cards = posts.map(post => {
            const { id, title, author, voteScore, commentCount } = post;
            return <Card key={id} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <CardHeader
                        title={title}
                        subtitle={author}
                    />
                    <CardActions style={{display: 'flex', flexDirection: 'column', height: '75px', justifyContent: 'space-between'}}>
                        <div style={{ alignSelf: 'flex-end', display: 'flex', justifyContent: 'space-evenly', width: '100px' }}>
                            <div style={voteStyle}><span style={{ color: '#03a87c'}}>{voteScore > 0 ? voteScore : 0}</span> <FontIcon className="material-icons" color='#03a87c'>thumb_up</FontIcon></div>
                        <div style={voteStyle}><span style={{ color: '#f44336'}}>{voteScore < 0 ? -voteScore : 0}</span> <FontIcon className="material-icons" color='#f44336'>thumb_down</FontIcon></div>
                        </div>
                        <RaisedButton labelStyle={{ textTransform: 'none'}} label={commentCount + " Comments"} />
                    </CardActions>
                </div>
            </Card>
        })
        return <div style={style}>
            {cards.length > 0 && cards}
            {cards.length === 0 && <div>No Posts</div>}
            </div>
    }
}

export default Main;