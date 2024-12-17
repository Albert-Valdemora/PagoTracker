import { types } from "../types/types"
import { auth, googleAuthProvider } from "../firebase/firebase-config";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from "firebase/auth";
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2'





export const startGoogleLogin = () => {
  return (dispatch) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, googleAuthProvider);
      })
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email));
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };
}


export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {

        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName, user.photoURL, user.email))


      })
      .catch((error) => {
        console.error("Error al registrar el usuario:", error);
        Swal.fire('Error', error.message, 'error')
      });
  };
};


export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {

    dispatch(startLoading())

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {

        dispatch(login(user.uid, user.displayName, user.photoURL, user.email))
        dispatch(finishLoading())

      })
      .catch((error) => {

        console.error("Error al inicial session:", error);
        dispatch(finishLoading())
        Swal.fire('Error', error.message, 'error')

      });
  }
}


export const login = (uid, displayName, photoURL, email) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL,
      email,
    }
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth)

    dispatch(logout())
  }
}

export const logout = () => {
  return {
    type: types.logout
  }

}