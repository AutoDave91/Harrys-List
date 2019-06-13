import React from 'react';
import {connect} from 'react-redux';

import {updateUsername, updatePassword} from '../../reducks/reducer';

function Header(){
    return(
        <main>
            <header>
                <h1>Header</h1>
            </header>
        </main>
    )
}

const mapStateToProps = state =>{
    const {} = ;
    return 
}

export default connect(mapStateToProps, {updateUsername, updatePassword})(Header)