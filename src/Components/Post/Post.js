import React, {Component} from 'react';

class Post extends Component{
    constructor(){
        super()
        this.state = {

        }
    }



    render(){
        // console.log(this.props.match)
        return(
            <main>
                Post # {this.props.match.params.id}
            </main>
        )
    }
}

export default Post;