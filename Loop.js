const dot = []
for(let i = 0; i < 10; i++){
    dot.push(function(){
        console.log(i)
    })
}
dot[2]()
dot[8]()