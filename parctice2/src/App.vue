<script setup>
import { reactive, ref } from 'vue';
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
  //cookie
  // remove All 
      let removeAll = ()=> {
        submitNotes.value.splice(0 , submitNotes.value.length)
      }
  //title
    document.title = "MY Note 🖋️"
    </script>
 
<template>
  <div class="container">
    <div>
       <h1>MY NOTE 🖋️</h1>
       <div class="row">
         <div class="col">

         </div>
      <div class="card col-8  ">
        New Note :<input  v-model="msgNote" type="text" placeholder="Input my note" @keyup="enterNote"> <br>
       <button  @click="addNote">Add Note</button>
         Filter Note : <input  type="text" placeholder="Filter Note input lower case " v-model="filterNotes" v-show="submitNotes.length">
       </div>
       <div class="col">
       </div>
       </div>
       <div class="card row d-flex justify-content-center">
         <div>
           <button class="remove-all"  @click="removeAll">Remove all lists</button>
              <dev class="head " v-for="(submitNote,  index) in submitNotes" :key="index" v-show="submitNote.toLocaleLowerCase().includes(filterNotes)" >
                  <p >                                 
                    {{index+1}}: {{submitNote}}
                  </p>
                <img @click="removeNote( index ,1)" class="icon-bin " src="./assets/bin.png" alt="trash">
              </dev> 
     
         </div>
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