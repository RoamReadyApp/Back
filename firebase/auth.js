import { router } from "expo-router";
import { auth } from "./Config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  signInWithCredential,
  FacebookAuthProvider,
  signOut
} from "firebase/auth";
// Listen for authentication state to change.
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function register(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred;
}

async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

async function logout() {
  await signOut(auth);
  // router.navigate('/account/login');
  // console.log("you are log out");
}
let Userid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    Userid = user.uid;
    console.log(user);
  }
});
const getCurrentUserUuid = () => {
  return Userid;
}
async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}
export { register, login, logout ,resetPassword,getCurrentUserUuid};
