window.addEventListener('load',()=>{
console.log("logged")
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.fillRect(20,20,180,90)
canvas.height=window.innerWidth;
canvas.width=window.innerHeight
var painting = false;
function startPainting(){
    painting=true;
    draw(e)
}
function endPainting(){
    painting=false;
    ctx.beginPath()
}

console.log(size)
function draw(e){
    if(!painting)
    {
        return
    }
    if(document.getElementById('pencil').checked){
        console.log(e.clientX,e.clientY)
        ctx.lineWidth=parseInt(document.getElementById('size').value)
        ctx.lineCap='round'
        ctx.strokeStyle=`${document.getElementById('color_selection').value}`
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY)
    }
    if(document.getElementById('pen').checked){
        console.log(e.clientX,e.clientY)
        ctx.lineWidth=parseInt(document.getElementById('size').value)
        ctx.lineCap='round'
        ctx.strokeStyle='#ddd'
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY)
    }
    
}
canvas.addEventListener('mousedown',startPainting)
canvas.addEventListener('mouseup',endPainting)
canvas.addEventListener('mousemove',draw)
document.getElementById('reset').addEventListener('click',()=>{
    ctx.fillStyle='#ddd';
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillRect(0,0,canvas.width,canvas.height)
})

})

