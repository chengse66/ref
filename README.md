# ref
ref javascript like vue.js

var x=ref(12);

//watch target newvalue,oldvalue

var wh=x.watch((n,o)=>{

    console.log(n);
    
});

x.value=13.0; //set value 13

wh();  //stop watch

x.value=14.0; //test new value
