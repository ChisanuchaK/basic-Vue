<script setup>
import { ref } from 'vue';
// add note
  let submitNotes = ref([])
  console.log(submitNotes.value)
  let msgNote = ref("")
  let addNote = ()=> {
    if(msgNote.value.length != 0){
      submitNotes.value.push(msgNote.value)
    }
    else{
      alert("Please input text to add list")
    }
  }

  let enterNote = (event)=> {
    if ( event.which === 13) {
       submitNotes.value.push(msgNote.value)
}
  } 
  // filter
  let filterNotes =ref("")
      
   // remove note 
  let removeNote  = (start , number)=> {
   
      submitNotes.value.splice( start , number)
  }

    document.title = "MY Note 🖋️"
    </script>
 
<template >
  <div class=" max-width">
    <h1 class="col-md-auto">MY NOTE 🖋️</h1>
     <div class="card col-md-auto" style="width: 22rem;">
      New Note :<input class="col-md-auto" v-model="msgNote" type="text" placeholder="Input my note" @keydown="enterNote"> <br>
       <button class="col-md-auto" @click="addNote">Add Note</button>

       Filter Note : <input class="col-md-auto" type="text" placeholder="Filter Note" v-model="filterNotes">
       </div>
       <div class="card col-md-auto" style="width: 50rem;">
         <div>
              <dev class="head col-md-auto"  v-for="(submitNote,  index) in submitNotes" :key="index" v-show="submitNote.toLowerCase().includes(filterNotes)" >
                  <p class="col-md-auto">                                 
                    {{index+1}}: {{submitNote}}
                  </p>
                <img @click="removeNote( index ,1)" class="icon-bin col-md-auto" src="./assets/bin.png" alt="trash">
              </dev> 

     
         </div>
       </div>
  </div>
</template>
 
<style>
      
  h1{
    text-align: center;
    margin-top: 30%;
    text-decoration: underline;
  }
 p
{
      text-align: center; 
}
  .card{
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  input {
        text-align: center;
      }
 .icon-bin{
    width: 20px;
    height: 20px;
    position: static;
    float: right;
    margin-top: -35px;
   
 }
 .head{
   color: midnightblue;
   font-weight: bold ;
 }
</style>