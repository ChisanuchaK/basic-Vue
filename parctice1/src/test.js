let test = [{
    name : 'kim' ,
    number : 1 
} ,
{
    name : 'ennie' ,
    number : 2
} ,
    {
        name : 'fu',
        number:3
    }

]

console.log(test)

    function deleteTest (index){
        delete test[index-1]
    }

     deleteTest(1)

     console.log(test)
