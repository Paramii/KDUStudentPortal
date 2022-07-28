<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <table class="responsive-table striped" style="width: 30%">
              <thead>
                <tr>
                  <th>Current year:</th>
                  <td>{{ this.student.currentYear }}</td>
                </tr>
                <tr>
                  <th>Current semester:</th>
                  <td>{{ this.student.currentSemester }}</td>
                </tr>
                <tr>
                  <th>GPA:</th>
                  <td>{{ this.student.gpa }}</td>
                </tr>
              </thead>
            </table>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossorigin="anonymous"
            />
            <select
              class="form-select"
              aria-label="Default select example"
              style="width: 30%; margin-top: 3%"
              v-model="selectedSem"
              @change="getGrades()"
            >
              <option selected :value="4">Semester 4</option>
              <option :value="3">Semester 3</option>
              <option :value="2">Semester 2</option>
              <option :value="1">Semester 1</option>
            </select>
            
            <table class="responsive-table highlight" style="margin-top: 2%">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Assignment 1</th>
                  <th>Assignment 2</th>
                  <th>Assignment 3</th>
                  <th>Examination</th>
                  <th>Final</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(grade, index) in grades" :key="index">
                  <td>{{ grade.course_name }}</td>
                  <td>{{ grade.assignment1_mark }}</td>
                  <td>{{ grade.assignment2_mark }}</td>
                  <td>{{ grade.assignment3_mark }}</td>
                  <td>{{ grade.Examination }}</td>
                  <td>{{ grade.final }}</td>
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
// import AddLecturer from "../components/AddLecturer.vue"
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
export default {
  data() {
    return {
      student: {},
      grades: [],
      selectedSem: 4,
      // showAddLecturer: false
    };
  },
  // components: { AddLecturer
  // },
  created() {
    this.getStudentById(user.uid);
  },
  watch: {
    student() {
      this.getGrades();
    },
  },
  methods: {
    async getStudentById(Reg_num) {
      await axios
        .get(`http://localhost:3000/students/${Reg_num}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.student = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    async getGrades() {
      await axios
        .get(`http://localhost:3000/grades/${user.uid}/${this.student.currentYear}/${this.selectedSem}`)
        .then((response) => {
          // JSON responses are automatically parsed.
          this.grades = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1em;
  height: 42em;
}
.container {
  margin-left: -1%;
}
.card-content {
  padding: 5%;
  overflow-y: auto;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(248, 245, 255);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #5a5ecf;
  border-radius: 20em;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
