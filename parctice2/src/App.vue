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

  // filter
  let filterNotes =ref("")
       
</script>
 
<template>
  <div>
    <h1>MY NOTE 🖋️</h1>
     <div class="card" style="width: 22rem;">
      New Note :<input v-model="msgNote" type="text" placeholder="Input my note"> <br>
       <button @click="addNote">Add Note</button>
       Filter Note : <input type="text" placeholder="Filter Note" v-model="filterNotes">
       </div>
       <div class="card" style="width: 50rem;">
         <div>
              <dev class="head" v-for="(submitNote,  index) in submitNotes" :key="index" v-show="submitNote.toLowerCase().includes(filterNotes)" >
                  <p>
                    {{index+1}}: {{submitNote}}
                  </p>
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
 
</style>