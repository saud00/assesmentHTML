const mapObj = new Map()

const str = 'hello medora',
    obj = {},
    Arr = [5,554,223]

mapObj.set(str, 'yo u r medora')
mapObj.set(obj, 'this is obj value')

// console.log(mapObj.get(str))

mapObj.forEach(function(val, key){
    console.log( key + '=' + val )
})


//////////////////////////////////////////////////////

//        SETS = constain seperate keys for each data in set

const set = new Set([22, 'string', true , function hello(){console.log('yo yo')}, {obj : 'value of obj'}])

// another way to insert value to set is 
set.add(555)

set.forEach(function(val, keys){
    console.log(val, keys)
})

const setArr = Array.from(set)

console.log(setArr)

setArr.forEach(function(val, keys){
    console.log(val, keys)
})