<template>
    <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card" >
          <div class="card-content">
            <div class="row">
              <div class="col s12 m4 course-list">
                <table class="responsive-table highlight">
                  <tbody>
                    <tr><th>DSA 1</th></tr>
                    <tr><th>DSA 2</th></tr>
                    <tr><th>FP</th></tr>
                  </tbody>
                </table>
              </div>
              <div class="col s1 m1" >
                <div class="divider-vertical"></div>
              </div>
              <div class="col s12 m8 content">
                <h6>DSA 2</h6>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1em;
  height: 82vh;
}
.container{
  margin-left: -1%;
}
.card-content{
  padding:5%;
}
.course-list{
  overflow-y: auto;
}
.divider-vertical{
  border-left: 1px solid rgb(196, 196, 196);
  height: 80%;
  position: absolute;
}
.content{
  padding-left: 5%;
  padding-right: 5%;
}
</style>