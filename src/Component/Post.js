import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading"
                Post
            ></div>
            <div className="panel-body">
                <div className="jumbotrom">
                    <h2>Post Page</h2>
                    <p>Post Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>
            </div>
                               
        <h2>JavaScript</h2>
        <Link to="/posts/JavaScript">Details</Link>
        <h2>React</h2>
        <Link to="/posts/React">Details</Link>
        <h2>Node</h2>
        <Link to="/posts/Node">Details</Link>
        <h2>Angular</h2>
        <Link to="/posts/Angular">Details</Link>
        </div>
    )
}

export default Post;