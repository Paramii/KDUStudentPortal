<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <div class="background valign-wrapper">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l5">
          <form @submit.prevent="signIn">
            <div class="card">
              <div class="card-content">
                <br />
                <span class="card-title center"
                  ><b> WELCOME TO KDU STUDENT SPACE!</b>
                </span>
                <p style="font-size: 16px">
                  Please enter your KDU email address and the password
                </p>
                <br />

                <div class="row" style="padding-top: 6%">
                  <label for="email" class="label">Email address</label>
                  <div class="col s12">
                    <input
                      type="email"
                      placeholder="Email address..."
                      v-model="email"
                      class="input-field"
                      id="email"
                    />
                  </div>
                </div>
                <div class="row">
                  <label for="password" class="label">Password</label>
                  <div class="col s12">
                    <input
                      type="password"
                      placeholder="Password..."
                      v-model="password"
                      class="input-field"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div style="text-align: center">
                <div class="progress transparent" v-if="authenticated">
                  <div class="indeterminate indigo"></div>
                </div>
                <button type="submit" class="btn">Sign In</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col s12 m6 l7 hide-on-small-only">
          <img src="@/assets/login.png" class="responsive-img" />
        </div>
      </div>
    </div>
    <Dialog />
  </div>
</template>

<script>
import Header from "../components/SHeader.vue";
import Footer from "../components/Footer.vue";
import Dialog from "../components/Dialog.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      authenticated: false,
    };
  },
  props: {
    title: String,
  },
  mounted() {
    $(".sidenav").sidenav("close");
    $(".modal").modal();
  },
  components: {
    Header,
    Footer,
    Dialog,
  },
  methods: {
    signIn() {
      this.authenticated = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user
            .getIdTokenResult()
            .then((idTokenResult) => {
              // Confirm the user is an Admin.
              if (!!idTokenResult.claims.admin) {
                // Show admin UI.
                this.$router.push("/admin");
              } else if (!!idTokenResult.claims.lecturer) {
                // Show regular user UI.
                this.$router.push("/lecturer");
              } else {
                // Show regular user UI.
                this.$router.push("/user");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          //Handle error
          this.authenticated = false;
          var content =
            '<div id="sign-in-modal" class="modal modal-fixed-footer"><div class="modal-content"><h4>{{ title }}</h4><p>{{ message }}</p></div><div class="modal-footer"><a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a> </div></div>';
          $(".modal").append(content);
          $(".modal").modal("open");
        });
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #dfd7f1;
}

.card {
  border-radius: 2em;
  width: 100%;
  min-height: 80vh;
  box-shadow: 6px 6px 20px #bebdfa;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 10%;
  padding-bottom: 10%;
}

.card-content {
  height: 65vh;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

.valign-wrapper {
  height: 100vh;
}

.card-content p {
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;
  color: #707070;
  line-height: 25px;
}

.card-title {
  color: #5e5acf;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 22px;
}

.input-field {
  width: 60% !important;
  height: 2.8em !important;
  box-sizing: border-box !important;
  border: 1px solid #a7a7a7 !important;
  border-radius: 1em !important;
  padding: 1em !important;
  font-family: "Open Sans", sans-serif !important;
  font-size: 13px !important;
  color: #505050 !important;
}
input:focus {
  border: 2px solid #a9a6ff !important;
  box-shadow: 0px 0px 8px 0px #c1c1f7 !important;
  transition-duration: 0.5s;
}
input:focus::placeholder {
  color: transparent !important;
  transition-duration: 0.2s;
}
::placeholder {
  color: #a7a7a7 !important;
  text-align: center;
}
.label {
  color: #6965f3;
  font-size: 12px;
  padding-bottom: 5px;
}
.btn {
  width: 35%;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 2px;
}
img {
  padding-top: 15%;
  padding-left: 5%;
}
</style>