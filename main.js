var app = new Vue({
    el:'#next',
    data:{
weekday:'',
weekdy: [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    
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
added:'',
lines:false,
count :0
    },

    mounted:function(){
    var weekdays = this.weekdy   [new Date().getDay()]
    var date= new Date().getDate();
    this.weekday =  weekdays + "," + date + "th"
     var mont = this.months[new Date().getMonth()]
     this.month = mont
},

methods:{
  
    
    
    submit(){
        this.lists.push({
       id:this.lists.length+1,
 title:this.message,
created:null,
completed:null
        })
        var created =new Date()
        var hrs=created.getHours();
        var min = created.getMinutes();
        if(hrs>12){
            var nan = 'P.M'
        }else{
            var nan = 'A.M'
        }
        var add = (hrs)%12+"."+min+' '+nan;
        this.added = add;

  
    
        
        this.message=''

    },

completed(lists) {
lists.lines = ! lists.lines;


},


clearfunction(index){
    this.lists.splice(index)
},

}
})