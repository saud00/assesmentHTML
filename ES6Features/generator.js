const img = document.getElementById('img')
const left = document.getElementById('left')
const right = document.getElementById('right')




                    // let i = 1
                    // img.setAttribute('src', `https://picsum.photos/id/${i}/1200/300`)
                    
                    // left.addEventListener('click', function(){
                    //     const limit = generator(--i)
                    //     console.log(limit.next())
                    // })
                    
                    // right.addEventListener('click', function(){
                    //     const limit = generator(++i)
                    //     console.log(limit.next())
                    // })
                    
                    
                    // function* generator(i){
                    //     while(i< 5){
                    //         console.log(i)
                    //         img.setAttribute('src', `https://picsum.photos/id/${i}/1200/300`)
                    //         yield i
                    //     }
                    // }

                    
let i=0;                   
const arr = ['how' , 'are' , 'you', 'this', 'is', 'itrator']
                                        
 function* gen(a){
    yield a[++i]
}

right.addEventListener('click', function(){
    
    const display = gen(arr)
    console.log(display.next().value)
})


// Itereators are beneficial if you have a list and when ever you invoke it 
// it wil continue from where it left