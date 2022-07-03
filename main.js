
window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        //初期画面スクロールによって背景変更
        let scrolly = window.scrollY;
        if(scrolly > window.innerHeight/3){
            if(document.getElementById('mainBody').classList.contains("pagetop")){
                document.getElementById('mainBody').classList.remove("pagetop");
                document.getElementById('logo').classList.remove("pagetop");
            }
        }else{
            if(!(document.getElementById('mainBody').classList.contains("pagetop"))){
                document.getElementById('mainBody').classList.add("pagetop");
                document.getElementById('logo').classList.add("pagetop");
            }
        }
        //下線長さスクロールによって調整
        let consepts = document.getElementsByClassName("concept");
        for(let concept of consepts){
            if( scrolly + window.innerHeight*0.5 > concept.getBoundingClientRect().top && scrolly - window.innerHeight*1.2 < concept.getBoundingClientRect().top){
                if(!(concept.classList.contains("concept-disp"))){
                    concept.classList.add("concept-disp");
                }
            }else{
                if(concept.classList.contains("concept-disp")){
                    concept.classList.remove("concept-disp");
                }
            }
        }
    });
    //画面幅が変わったとき
    window.addEventListener('resize', resizeImg);
    resizeImg();
    function resizeImg(){
        if(window.innerWidth < 800){
            let imgAreas = document.getElementsByClassName("img-area");
            for(let imgArea of imgAreas){
                imgArea.style.fontSize = window.innerWidth/110+"px";
            }
        }
    }
    //ロード画面
    const loading = document.getElementById("loading");
    if(loading){
        console.log("Loaded");
        setTimeout(() =>{
            loading.classList.add("loaded");
        },1000);
        setTimeout(() =>{
            loading.style.display = "none";
        },2500);
    }
});