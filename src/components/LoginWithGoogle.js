import React from 'react'
import { Button } from 'react-bootstrap'
import firebaseApp from '../config/firebase'
import * as firebase from "firebase/app";

export default function LoginWithGoogle() {

    const handleOnGoogleSignIn = (e)=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebaseApp.auth().signInWithPopup(provider).then(function(result) {
         alert('Google login Success, Can now uploud pics')
          }).catch(function(error) {
              alert(error.message)

          });
    }


    return (
        <div>
            <Button onClick={handleOnGoogleSignIn}>Sign in with Google</Button>
        </div>
    )
}
