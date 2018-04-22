import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

export const LoginPage = ({ firebase, auth }) => (
    <div className="">
      <button // <GoogleButton/> button can be used instead
        onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
      >Login With Google</button>
      <div>
        <h2>Auth</h2>
        {
          !isLoaded(auth)
          ? <span>Loading...</span>
          : isEmpty(auth)
            ? <span>Not Authed</span>
            : <pre>{JSON.stringify(auth, null, 2)}</pre>
        }
      </div>
    </div>
  )

  export default firebaseConnect()(LoginPage)
