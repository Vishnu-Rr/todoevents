var app = new Vue({
    el:'#next',
    data:{
weekday:'',
weekdy: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    
],
month:'',
months:[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
   "September",
   "October",
   "November",
   "December",
],
message:'',
lists:[],

class:false    },

    mounted:function(){
    var weekdays = this.weekdy   [new Date().getDay()]
    var date= new Date().getDate();
    this.weekday =  weekdays + "," + date + "th"
     var mont = this.months[new Date().getMonth()]
     this.month = mont;
    },

methods:{
    submit(lists){ 
        if(new Date().getHours()>12){
var noon = 'P.M'

    }else{
var noon = 'A.M'    
    }

        this.lists.push({
       id:this.lists.length+1,
 title:this.message,
 lines:false,

time: new Date().getHours()%12+'.'+new Date().getMinutes()  +noon  

        })
      
        this.message=''
    },

completed(lists) {
lists.lines = ! lists.lines;
var audio = new Audio('applause8.mp3')
if(lists.lines===true)
{
    audio.play();
}

},


clearfunction(index){
    this.lists.splice(index)
    
},

}
})