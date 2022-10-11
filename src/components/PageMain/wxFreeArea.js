
const _wxFreeArea = {};
_wxFreeArea.style = (dom,style)=>{
    for(let key in style){
        dom.style[key] = style[key];
    }
}
_wxFreeArea.init = (dom)=>{
    let area = document.createElement("div");
    _wxFreeArea.style(area,{
        "height":"100%",
        "border":"solid 2px #000000",
        "position":"absolute",
        
    })
    dom.appendChild(area);
}
const wxFreeAreaClick = ()=>{

}

const wxFreeArea = (id)=>{
    let doms = document.querySelectorAll(id);
    for(let dom of doms){
        _wxFreeArea.init(dom);
        console.log(dom)
        dom.addEventListener("click",()=>{
            console.log("go")
        })
    }
   
    // document.querySelector("body").appendChild(dom);
    
    console.log(id);
}
export default wxFreeArea