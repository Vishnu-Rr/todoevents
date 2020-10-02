var app = new Vue({
    el:'#next',
    data: {
        quew: [],
message:'',
     placeholder: '',
     placeholder1: '',
     theme:false,
     themek:false,
     
    },
    methods: {
        
    submit() {
     this.quew.push({
         id:this.quew.length+1,
         title:this.message,
         complete: false,
        createdtime:Date.now(),
checkeddate:null,
               })
if(quew.complete=!quew.completed){
    alert (createdtime)
}
         this.message = '';

        },
    cleartodo(index){
        this.quew.splice(index,1);

    },      
    completeTask: function(quew){
        quew.complete = !quew.complete;
    },
    alltodo(index){
this.quew.splice(index)
    },
    edittodo(title){
        this.title=title;
    },
    
    togglefunc(){
        var times = new Date
        var hrs= times.getHours()
        if(hrs>=6 && hrs<=18){
            this.theme=!this.theme
        }else {
            this.themek=!this.themek

        }
    }
},

    mounted:function() {
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
