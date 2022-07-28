<template>
  <div class="container">
      <div class="row">
        <div class="col s12 m12">
          <div class="card" >
            <div class="card-content">
              <button class="btn" @click="showAddStudent = !showAddStudent">
      Add student
    </button>
    <AddStudent v-if="showAddStudent" @toggle-card="updateTable" />

    <table class="striped responsive-table">
      <thead>
        <tr>
          <th>Index Number</th>
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
      <tbody v-if="students && students.length">
        <tr v-for="student in students" :key="student.Reg_num">
          <td>{{ student.Reg_num }}</td>
          <td>{{ student.NIC }}</td>
          <td>{{ student.fName }}</td>
          <td>{{ student.lName }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.DOB }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.gender }}</td>
          <td>
            <i class="material-icons">edit</i
            ><i
              class="material-icons red-text"
              @click="deleteStudent(student.Reg_num)"
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
import AddStudent from "../components/AddStudent.vue";
export default {
  data() {
    return {
      students: [],
      showAddStudent: false,
    };
  },
  components: { AddStudent },
  methods: {
    async getStudents() {
      await axios
        .get(`http://localhost:3000/students`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.students = response.data;
        })
        .catch((e) => {
          // this.errors.push(e);
        });
    },
    async deleteStudent(Reg_num) {
      await axios.delete(`http://localhost:3000/students/${Reg_num}`).then(
        setTimeout(() => {
          this.getStudents();
        }, 100)
      );
    },
    async updateTable() {
      setTimeout(() => {
        this.getStudents();
        this.showAddStudent = false;
      }, 100);
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/students`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.students = response.data;
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