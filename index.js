//function takes the string source of the desired image, 
//plus the value in px from the left and bottom

function newImage (imgSource, leftDistance, bottomDistance) {
    let x = document.createElement('img')
    x.src = imgSource
    x.style.position = 'fixed'
    x.style.left = String(leftDistance) + 'px'
    x.style.bottom = String(bottomDistance) + 'px'
    document.body.append(x) 
    return x
    }
//same as newImage but also adds click functionality
function newItem (imgSource, leftDistance, bottomDistance){
    let x = newImage(imgSource,leftDistance,bottomDistance)
    x.addEventListener('dblclick',function(){
        x.remove()
    })

}
newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300);
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)
newItem('assets/sword.png',500,405)
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)
