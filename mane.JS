function couleur(page){
    if (page != "accueil"){
        document.body.classList.remove("colored");
        
    }
    else{
        document.body.classList.add("colored");
    }
}

/* if (document.body.classList.contains("colored")){
    document.body.classList.remove("colored");
    
}
else{
    document.body.classList.add("colored");
} */