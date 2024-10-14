let res = document.querySelector(".top #res");
res.addEventListener("click",()=>{
    res.href ="https://drive.google.com/file/d/18mjsOuKARG-hzxdlQ1Nl9CTprGSMiNAK/view?usp=drivesdk";
})
let opt = document.querySelector("#OPT");
opt.addEventListener("change",function(){
    let option = this.value;
    if (option === "Skills"){
        window.location.href = "#skills";
    }else if (option === "Academic_Profile"){
        window.location.href = "#container";
    }else if (option === "About_me"){
        window.location.href = "#";
    }
})