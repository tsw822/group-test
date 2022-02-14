import readlineSync from 'readline-sync';

let formPattern = (nRowNum) => {
    let nWordNum = nRowNum;
    for(let n=0; n<nRowNum; n++){
        let sLine = "";
        for (let i=0;i<nWordNum;i++){
            sLine += '#';
        }
        console.log(sLine);
        nWordNum -= 1;
    }
    return "success";
};

let nInput = readlineSync.question("please input row number:");

let sOutput = formPattern(nInput);

console.log(sOutput);