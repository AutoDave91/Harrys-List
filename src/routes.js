import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Post from './Components/Post/Post'
import Form1 from './Components/Form/Form1/Form1'
import Form2 from './Components/Form/Form2/Form2'



export default(
    <Switch>
        <Route path='/' exact component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/post/:id' component={Post}/>
        <Route path='/form1' component={Form1}/>
        <Route path='/form2' component={Form2}/>
    </Switch>
)