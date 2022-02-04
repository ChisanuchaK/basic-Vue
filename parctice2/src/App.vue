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
 
<template>
  <div>
    <h1>MY NOTE 🖋️</h1>
     <div class="card" style="width: 22rem;">
      New Note :<input v-model="msgNote" type="text" placeholder="Input my note" @keydown="enterNote"> <br>
       <button @click="addNote">Add Note</button>

       Filter Note : <input type="text" placeholder="Filter Note" v-model="filterNotes">
       </div>
       <div class="card" style="width: 50rem;">
         <div>
              <dev class="head" v-for="(submitNote,  index) in submitNotes" :key="index" v-show="submitNote.toLowerCase().includes(filterNotes)" >
                  <p>                                 
                    {{index+1}}: {{submitNote}}
                  </p>
                <img @click="removeNote( index ,1)" class="icon-bin" src="./assets/bin.png" alt="trash">
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