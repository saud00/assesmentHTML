const img = document.getElementById('img')
const left = document.getElementById('left')
const right = document.getElementById('right')
const ul = document.getElementById('ul')

const arr = [{
    "id" : 1,
    "age" : "36",
    "name" : "saad",
    "location" : "Pakistan",
},{
    "id" : 2,
    "age" : "31",
    "name" : "saud",
    "location" : "USA",
   
},{
    "id" : 3,
    "age" : "23",
    "name" : "Mohaviz",
    "location" : "England",
   
},{
    "id" : 4,
    "age" : "33",
    "name" : "Mahaz",
    "location" : "Canada",
   
}]

 let i = -1
 moveRight()

left.addEventListener('click', moveLeft)

    function moveLeft(){
     const limit = generator(arr, --i)
     console.log(limit.next().value)
    }

right.addEventListener('click', moveRight)
    function moveRight(){
        const limit = generator(arr, ++i)
        console.log(limit.next().value)
    }


    function* generator(array, i){
       if(i< array.length &&  i>=0){
            console.log(i , array.length)
            ul.innerHTML = `
            <ul class='list-group'>
            <li class= 'list-group-item'>Name: ${array[i].name}</li>
            <li class= 'list-group-item'>From: ${array[i].location}</li>
            <li class= 'list-group-item'>age: ${array[i].age}</li>
            </ul>
            `
            img.setAttribute('src', `https://picsum.photos/id/${array[i].id}/300/300`)
            yield i
        }else{
            location.reload()
        }
    }
