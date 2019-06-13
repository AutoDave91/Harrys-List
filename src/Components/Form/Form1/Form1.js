import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import{updateTitle} from '../../../reducks/reducer'

function Form1(props){
    return(
        <main>
            <h1>Post Title</h1>
            <input value={props.postTitle} onChange={(e)=> props.updateTitle(e.target.value)}></input>
            <Link to='/Form2'>Next Step</Link>
        </main>
    )
}

const mapStateToProps = state =>{
    const {postTitle} = state
    return{postTitle}
}

export default connect(mapStateToProps, {updateTitle})(Form1)