<template>
<div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card" >
          <div class="card-content">
            <button class="btn" @click="showAddLecturer=!showAddLecturer">Add Lecturer</button>
      <AddLecturer v-if="showAddLecturer" @toggle-card="updateTable"/> 

    <table class="striped responsive-table">
      <thead>
        <tr>
          <th>Lecturer ID</th>
          <th>NIC</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Gender</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="lecturers && lecturers.length">
        <tr v-for="lecturer in lecturers" :key="lecturer.lecID">
          <td>{{ lecturer.lecID }}</td>
          <td>{{ lecturer.lec_NIC }}</td>
          <td>{{ lecturer.lec_fName }}</td>
          <td>{{ lecturer.lec_lName }}</td>
          <td>{{ lecturer.lec_address }}</td>
          <td>{{ lecturer.lec_DOB }}</td>
          <td>{{ lecturer.lec_email }}</td>
          <td>{{ lecturer.lec_gender }}</td>
          <td>
            <i class="material-icons">edit</i
            ><i
              class="material-icons red-text"
              @click="deleteLecturer(lecturer.lecID)"
              >delete</i
            >
          </td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import axios from "axios";
import AddLecturer from "../components/AddLecturer.vue";
export default {
  data() {
    return {
      lecturers: [],
      showAddLecturer: false,
    };
  },
  components: { AddLecturer },
  methods: {
    async getLecturers() {
      await axios
        .get(`http://localhost:3000/lecturers`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.lecturers = response.data;
        })
        .catch((e) => {
          // this.errors.push(e);
        });
    },
    async deleteLecturer(lecID) {
      await axios.delete(`http://localhost:3000/lecturers/${lecID}`).then(
        setTimeout(() => {
          this.getLecturers();
        }, 100)
      );
    },
    async updateTable() {
      setTimeout(() => {
        this.getLecturers();
        this.showAddLecturer = false;
      }, 100);
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/lecturers`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.lecturers = response.data;
      })
      .catch((e) => {
        // this.errors.push(e);
      });
  },
};
</script>

<style scoped>
.btn {
  background: #383838 !important;
  color: #5fe6f9;
  margin-bottom: 3%;
}
.card {
  border-radius: 2em;
  height: 82vh;
}

.valign-wrapper {
  height: 65vh;
}
.card-content{
  padding:3%;
  overflow-y:auto
}
</style>