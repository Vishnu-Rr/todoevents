var app = new Vue({
    el:'#next',
    data: {
        quew: [],
message:'',
     placeholder: '',
     placeholder1: '',
     theme:false,
     themek:false,
   
closed:false,

texted:''
    },
    methods :{
        getTime(quew) {
            let diff = quew.completed - quew.created
            return (diff / 1000) + ' seconds'
        },
    submit() {
     this.quew.push({
         id:this.quew.length+6  ,
         title:this.message,
         created: Date.now(),
         completed: null

        })

  this.message = ''
         
        },
 checkedstatus(quew){
quew.closed = !quew.closed;  

var cntime = new Date()
quew.completed = cntime;




 },


         
    cleartodo(index){
        this.quew.splice(index,1);


    },      
 
  

    
    alltodo(index){ 
this.quew.splice(index);

    }
},


    mounted:function(){
        var time= new Date;
        var hrs = time.getHours();
var min = time.getMinutes()

{
    if(hrs< 12){
        this.placeholder = 'good morning..'
     } else if(hrs>=12 && hrs<15){
        this.placeholder = 'good afternoon..'
     }else if (hrs>=15 && hrs<18){
        this.placeholder = 'good evening..'
     
     }else if  (hrs>=18 && hrs<24)
     this.placeholder = 'good night...'
    }    
   this.placeholder1 =(hrs)+"."+(min)+'....'
    {
   if (hrs>18 && hrs<6 ){
    this.theme=!this.theme

            
}
else{
    this.themek=!this.themek

}
}

 Notification.requestPermission()
 


Notification.permission
if(Notification.permission==='granted'){
    var notification =new Notification(this.placeholder)
}
else if(Notification.permission==='denied'){
    confirm('allow the permission')
}
window.navigator.onLine
window.addEventListener("online",()=>alert('you were online'))
window.addEventListener("offline",()=>alert('you were offline'))
}

    
 })
