import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import React, { PureComponent } from 'react';

class Post extends PureComponent {
    render() {
        const { title, author, id } = this.props.post;
        return <Card style={{marginBottom: '10px'}}>
            <CardHeader
                title={title}
                subtitle={author}
            />
        </Card>
    }
}

export default Post