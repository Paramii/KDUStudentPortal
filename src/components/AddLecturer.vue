<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s6">
              <br/>
              <p class="left"> <b>New Lecturer</b></p>
            </div>
            <div class="col s6">
              <button class="btn right" >Save</button>
            </div>
          </div>
          <div class="row">
            <div class="col s12 ">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lecID"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lecID">Lecturer ID</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_NIC"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_NIC">NIC</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_fName"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_fName">First Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_lName"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_lName">Last Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_address"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_address">Address</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_country"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_country">Country</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_DOB"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_DOB">Date of Birth</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_email"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_email">Email</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lec_gender"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="lec_gender">Gender</label>
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