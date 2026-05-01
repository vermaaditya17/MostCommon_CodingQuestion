function SquarePattern(){
    for(let i=1;i<=4; i++){
        let star = ""
        for(let j=0; j<=4; j++){
            star+="* "
    }
    console.log(star)
}
}

function RightTriangle(){
    for(let i=1; i<=4; i++){
        let star = ""
        for(let j=1; j<=i; j++){
            star+="* "
        }
        console.log(star)
    }
}

function invertedTriangle(){
    for(let i=4; i>0; i--){
        let star=""
        for(let j=1;j<=i; j++){
            star+="* "
        }
        console.log(star)
    }
}

function numPrintTriangle(){
    for(let i=1; i<=4; i++){
        let num = ""
        for(let j=1; j<=i;j++){
            num+=j + " "
        }
        console.log(num)
    }
}

function pyramidPattern(){
    
}