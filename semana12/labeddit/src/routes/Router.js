import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import AddPostPage from '../screens/AddPostPage/AddPostPage'
import AddComentPage from '../screens/AddComentPage/AddComentPage'
//import AddRegisterPage from '../screens/AddRegisterPage/AddRegisterPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import ListPostPage from '../screens/ListPostPage/ListPostPage'

const Router = () => {
  return(
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUpPage/>
        </Route>
        <Route exact path={['/post', '/']}>
          <AddPostPage/>
        </Route>
        <Route exact path={'/comentario/:id'}>
          <AddComentPage/>
        </Route>
        <Route exact path={'/list/:id'}>
          <ListPostPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router
