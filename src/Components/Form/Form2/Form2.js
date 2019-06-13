import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {updateDescription, updateImage} from '../../../reducks/reducer'

function Form2(props){
    const {postDescription, postImage, postTitle} = props
    return(
        <main>
            <h1>Post Description</h1>
            <input placeholder='Description' value={postDescription} onChange={(e)=> props.updateDescription(e.target.value)}></input>
            <input placeholder='Image URL' value={postImage} onChange={(e)=> props.updateImage(e.target.value)}></input>
            <Link to='/Form1'>Previous Step</Link>
            <button onClick={()=>{
                axios.post('/api/create', {title: postTitle, desc: postDescription, image: postImage})
                    .then(response =>{
                        props.history.push('/dashboard')
                    })}
            }>Submit</button>
        </main>
    )
}
const mapStateToProps = state =>{
    const {postDescription, postImage, postTitle} = state
    return{postDescription, postImage, postTitle}
}

export default connect(mapStateToProps, {updateDescription, updateImage})(Form2)