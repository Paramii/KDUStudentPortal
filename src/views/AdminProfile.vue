<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <button class="btn right">Save</button>
            </div>
          </div>
          <div class="row">
            <div class="col s3 center">
              <img
                src="https://randomuser.me/api/portraits/women/6.jpg"
                class="responsive-img"
              />
            </div>
            <div class="col s9">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <textarea
                      id="fullName"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="fullName">Full Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <textarea
                      disabled
                      id="email"
                      class="materialize-textarea"
                      v-model="email"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      email: "",
    };
  },
  created() {
    this.email = user.email;
  },
};
</script>


<style scoped>
.card {
  border-radius: 2em;
  height: 82vh;
}

.valign-wrapper {
  height: 65vh;
}

img {
  border-radius: 1em;
}
.btn {
  background: #383838 !important;
  color: #5fe6f9;
}
</style>