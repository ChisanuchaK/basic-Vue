<script setup>
let textTotal = "Next Total :"
  const bgGreen = 'background-color: green;'
  const bgRed = '  background-color: red;'
  const center = 'text-align:center'

  let lists = [
    {   
     
        Name : 'salary' ,
        Amount : 10000
    } ,
    {   
      
        Name : 'rent' ,
        Amount : -2500
    } ,
    {   
    
        Name : 'parking fee' ,
        Amount : 0
    } ,
    {   
       
        Name : 'car fuel' ,
        Amount : -600
    } ,
    {   
        Name : 'commission' ,
        Amount : 5500
    }
]
let caltotal = lists.reduce((amount , value)=> amount + value.Amount ,0);


</script>

<template>
<div>
      <h1 v-bind:style="center">MY ACCOUNT</h1>
    <table class="body-table">
      <tr class="all-section">
        <th class="sectionName">Name</th>
        <th class="sectionAmount">Amount</th>
      </tr>   
    </table>
    <table class="body-list">
           <tr class="list-myAccount">
        <td  class="Name-list" v-for="(list , index) in lists" :key="index"  >
            {{index+1}} . {{list.Name}}     <!-- Name -->
        </td>
           </tr>

      
    </table>
     <table class="body-listA">
        
           <tr>
        <td class="Amount-list"  v-for="(list , index) in lists" :key="index"  >
            <span v-if="list.Amount >0" v-bind:style="bgGreen">{{list.Amount}} BATH</span>
            <span v-else-if="list.Amount < 0" v-bind:style="bgRed">{{list.Amount}} BATH</span>
            <span v-else>{{list.Amount}} BATH</span>           
        </td>
      </tr>
     </table>
     <h1 style="text-align: right; " v-if="caltotal<0" >
       {{textTotal}} <span style="color :red">{{caltotal}} BATH   </span> </h1>
         <h1 style="text-align: right;" v-else >
       {{textTotal}} <span style="color :green">{{caltotal}}   BATH  </span> </h1>
</div>

 
</template>
 
<style>
 .Name-list{
  width: 500px;
 }
 .Amount-list{
   float: right;
    width: 500px;
     text-align: right
 }
  tr td {
    display: block;
 
  }
  .body-table{
    border : 1px solid slategray;
    width: 100%;
    background: wheat;
  } 
  .body-list {
    float: left;
    width: 50%;
    border : 0.5px solid black;
  }
  .body-listA{
    float: right;
        width: 50%;
    border : 0.5px solid black;
  }
</style>