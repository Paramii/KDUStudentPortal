<template>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

    <div class="container">
    <div class="row">
      <div class="col s2 m3" >
         <nav>
            <div class="nav-wrapper">
            <form>
                <div class="input-field">
                <input id="search" type="search" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
        <!-- <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search...">
                </div> -->
        <table class="responsive-table highlight">
              <tbody>
                <tr>
                    <td style="width:20px;text-align:center"><a href="#user"><img class="circle"  src="../assets/avatar1.png"></a></td>
                    <td>KH Perera</td>
                </tr>
                <tr>
                    <td style="width:20px;text-align:center"><a href="#user"><img class="circle"  src="../assets/avatar4.jpg"></a></td>
                    <td>HIG Aluthge</td>
                </tr>
                <tr>
                    <td style="width:20px;text-align:center"><a href="#user"><img class="circle"  src="../assets/avatar2.jpg"></a></td>
                    <td>SMJ Wijeratne</td>
                </tr><tr>
                    <td style="width:20px;text-align:center"><a href="#user"><img class="circle"  src="../assets/avatar3.jpg"></a></td>
                    <td>RC Soysa</td>
                </tr>
              </tbody>
        
        </table>
      </div>
      <div class="col s1 m1" >
        <div class="divider-vertical"></div>
      </div>
      <div class="col s10 m9" >
        <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                <img class="circle"  src="../assets/avatar4.jpg">
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">HIG Aluthge</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div>
                        <!-- <div class="col-lg-6 hidden-sm text-right">
                            <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                            <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                        </div> -->
                    </div>
                </div>
                <div class="chat-history">
                    <ul class="m-b-0">
                        <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">10:10 AM, Today</span>
                            </div>
                            <div class="message other-message float-right"> Hello, How is the project coming along? </div>
                        </li>                            
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:15 AM, Today</span>
                            </div>
                            <div class="message my-message">Project has been already finished and I have results to show you.</div>
                        </li>
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:16 AM, Today</span>
                            </div>
                            <div class="message my-message">Shall I schedule a meeting for tommorrow?.</div>
                        </li>
                        <li class="clearfix">
                            <div class="message-data">
                                <span class="message-data-time">10:16 AM, Today</span>
                            </div>
                            <div class="message my-message">Please let me know the time if you're available.</div>
                        </li>
                        
                    </ul>
                </div>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <form id="message-form">
                        <input id="message-input" type="text" class="form-control" placeholder="Enter text here..."> 
                        <button class="btn right"><i class="fa fa-send"></i></button>
                        </form>                                   
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        mounted() {
            let externalScript1 = document.createElement('script')
            externalScript1.setAttribute('src', 'https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js')
            document.head.appendChild(externalScript1)

            let externalScript2 = document.createElement('script')
            externalScript2.setAttribute('src', 'https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js')
            document.head.appendChild(externalScript2)
        },
        
    }
</script>

<style scoped>


.circle {
    width: 3em;
}
.divider-vertical{
  border-left: 1px solid rgb(196, 196, 196);
  height: 90%;
  position: absolute;
}

.card {
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.material-icons{
    color: black;
}
nav{
    background: rgb(255, 255, 255);
    height: 4em;
}
.input-field{
    background: rgb(255, 255, 255);
  box-sizing: border-box !important;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 13px !important;
  color: #505050 !important;
  box-shadow: none !important;
  height: 4em !important;

}
.chat-app .people-list {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 7
}

.chat-app .chat {
    margin-left: 280px;
    border-left: 1px solid #eaeaea
}

.people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list .chat-list li {
    padding: 10px 15px;
    list-style: none;
    border-radius: 3px
}

.people-list .chat-list li:hover {
    background: #efefef;
    cursor: pointer
}

.people-list .chat-list li.active {
    background: #efefef
}

.people-list .chat-list li .name {
    font-size: 15px
}

.people-list .chat-list img {
    width: 45px;
    border-radius: 50%
}

.people-list img {
    float: left;
    border-radius: 50%
}

.people-list .about {
    float: left;
    padding-left: 8px
}

.people-list .status {
    color: #999;
    font-size: 13px
}

.chat .chat-header {
    padding: 15px 20px;
    border-bottom: 2px solid #f4f7f6
}

.chat .chat-header img {
    float: left;
    border-radius: 40px;
    width: 40px
}

.chat .chat-header .chat-about {
    float: left;
    padding-left: 10px
}

.chat .chat-history {
    padding: 20px;
    border-bottom: 2px solid #fff;
    height: 25em;
    overflow-y:auto
}

.chat .chat-history ul {
    padding: 0
}

.chat .chat-history ul li {
    list-style: none;
    margin-bottom: 30px
}

.chat .chat-history ul li:last-child {
    margin-bottom: 0px
}

.chat .chat-history .message-data {
    margin-bottom: 15px
}

.chat .chat-history .message-data img {
    border-radius: 40px;
    width: 40px
}

.chat .chat-history .message-data-time {
    color: #434651;
    padding-left: 6px
}

.chat .chat-history .message {
    color: #444;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    display: inline-block;
    position: relative
}

.chat .chat-history .message:after {
    bottom: 100%;
    left: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .my-message {
    background: #efefef
}

.chat .chat-history .my-message:after {
    bottom: 100%;
    left: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #efefef;
    border-width: 10px;
    margin-left: -10px
}

.chat .chat-history .other-message {
    background: #e8f1f3;
    text-align: right
}

.chat .chat-history .other-message:after {
    border-bottom-color: #e8f1f3;
    left: 93%
}

.chat .chat-message {
    padding: 20px
}

.online,
.offline,
.me {
    margin-right: 2px;
    font-size: 8px;
    vertical-align: middle
}

.online {
    color: #86c541
}

.offline {
    color: #e47297
}

.me {
    color: #1d8ecd
}

.float-right {
    float: right
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

@media only screen and (max-width: 767px) {
    .chat-app .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .chat-app .people-list.open {
        left: 0
    }
    .chat-app .chat {
        margin: 0
    }
    .chat-app .chat .chat-header {
        border-radius: 0.55rem 0.55rem 0 0
    }
    .chat-app .chat-history {
        height: 300px;
        overflow-x: auto
    }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
    .chat-app .chat-list {
        height: 650px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: 600px;
        overflow-x: auto
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
    .chat-app .chat-list {
        height: 480px;
        overflow-x: auto
    }
    .chat-app .chat-history {
        height: calc(100vh - 350px);
        overflow-x: auto
    }
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