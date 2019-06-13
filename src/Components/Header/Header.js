import React from 'react';
import {connect} from 'react-redux';

import {updateUsername, updatePassword, register, login, logout} from '../../reducks/reducer';

function Header(props){
    // TESTING GROUND
    // console.log(props.loggedIn)
    // console.log(props)

    return(
        <main>
            <header>
                <h1>Harry's List</h1>
            </header>
            {props.loggedIn
            ?
                <section>
                    <h2>Username</h2>
                    {/* <button onClick={props.logout()}>Logout</button> */}
                </section>
            :
                <section>
                    <input placeholder='username' onChange={(e)=> props.updateUsername(e.target.value)}/>
                    <input placeholder='password' onChange={(e)=> props.updatePassword(e.target.value)}/>
                    <button onClick={()=> props.login(props.username, props.password)}>Login</button>
                    <button onClick={()=> props.register(props.username, props.password)}>Register</button>
                </section>
            }
        </main>
    )
}

const mapStateToProps = state =>{
    const {loggedIn, username, password, user} = state;
    return {loggedIn, username, password, user}
}

export default connect(mapStateToProps, {updateUsername, updatePassword, register, login, logout})(Header)