import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import PostDetailsPage from '../screens/CreateCommentPage/PostDetailsPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FeedPage from '../screens/CreateCommentPage/FeedPage'

const Router = () => {
  return(
      <Switch>
        <Route exact path={'/'}>
          <LoginPage/>
        </Route>
        <Route exact path={'/signup'}>
          <SignUpPage/>
        </Route>
        <Route exact path={'/post/:postId'}>
          <PostDetailsPage/>
        </Route>
        <Route exact path={'/feed'}>
          <FeedPage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router
