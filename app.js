let user_score=0;
let computer_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#mesg");
const user_scorepara= document.querySelector("#user-score");
const computer_scorepara=document.querySelector("#computer-score");
const gencompchoice=()=>{
    
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>{
    
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="blue";
}
const showwinner=(userwin,User_choice,compchoice)=>{
    if(userwin){
        user_score++;
        user_scorepara.innerText=user_score;
        msg.innerText='User won!';
        msg.style.backgroundColor="green";
    }else{
        computer_score++;
        computer_scorepara.innerText=computer_score;
        
        msg.innerText='User lose';
        msg.style.backgroundColor="red";
    }
}
const playgame=(User_choice)=>{
    
    //generate computer choice-modular programming.
    const compchoice=gencompchoice();
    
    if(User_choice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(User_choice==="rock"){
            userwin=compchoice==="paper"? false : true;

        }
        else if(User_choice==="paper"){
            userwin=compchoice==="scissors"? false : true;
            
        }else{
            userwin=compchoice==="rock"? false : true;
         
        }
        showwinner(userwin,User_choice,compchoice);
    }

};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",() =>{
        const User_choice=choice.getAttribute("id");
        playgame(User_choice);

    });
});