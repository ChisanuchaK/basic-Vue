<script setup>
import { ref } from "@vue/reactivity";
// add note
  let submitNotes = ref([])
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

  let filterNotes = ref("")
      let filter = ()=> submitNotes.value.filter(()=>{for(let i of submitNotes.value){ filterNotes.value = submitNotes.value[i]}})
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
              <p class="head" v-for="(submitNote, index) in submitNotes" :key="index">
                    {{index+1}} :  {{submitNote}}
              </p> 

            <p v-for="(f , index) in filter"  :key="index">
              {{index}} : {{f}}
            </p>
     
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