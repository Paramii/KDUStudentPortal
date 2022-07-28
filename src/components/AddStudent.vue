<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <br />
              <p class="left"><b>New Student</b></p>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="row">
                <div class="col s12">
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="Reg_num"
                      class="materialize-textarea"
                      v-model="form.Reg_num"
                    ></textarea>
                    <label for="Reg_num">Index Number</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="NIC"
                      class="materialize-textarea"
                      v-model="form.NIC"
                    ></textarea>
                    <label for="NIC">NIC</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="fName"
                      class="materialize-textarea"
                      v-model="form.fName"
                    ></textarea>
                    <label for="fName">First Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="lName"
                      class="materialize-textarea"
                      v-model="form.lName"
                    ></textarea>
                    <label for="lName">Last Name</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="address"
                      class="materialize-textarea"
                      v-model="form.address"
                    ></textarea>
                    <label for="address">Address</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="country"
                      class="materialize-textarea"
                      v-model="form.country"
                    ></textarea>
                    <label for="country">Country</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="DOB"
                      class="materialize-textarea"
                      v-model="form.DOB"
                    ></textarea>
                    <label for="DOB">Date of Birth</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="email"
                      class="materialize-textarea"
                      v-model="form.email"
                    ></textarea>
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">edit</i>
                    <textarea
                      id="gender"
                      class="materialize-textarea"
                      v-model="form.gender"
                    ></textarea>
                    <label for="gender">Gender</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12">
              <button class="btn right" @click="onSubmit">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import axios from "axios";
const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      form: {
        Reg_num: "",
        NIC: null,
        fName: "",
        lName: "",
        address: "",
        country: "",
        DOB: null,
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios.post("http://localhost:3000/students", this.form, 
      ).then(this.$emit('toggle-card',true))
    },
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