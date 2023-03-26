//////////////////////// EXAMPLE OF AN ARRAY INPUT ////////////////////////

// let questions = [
//     {
//         "question":"what is the capital city of Rwanda?",
//         "Answer":"KIGALI",
//         "wrong":"HUYE"
//     },
//     {
//         "question":"Who is the leader of RDB?",
//         "Answer":"CLARE AKAMANZI",
//         "wrong":"PHILIP LUCKY"
//     },
// ]

function textQuiz(input) {
    function generateIndex(arr,generatedIndices) {
        let randomIndex = Math.floor(Math.random()*arr.length)
        while (generatedIndices.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random()*arr.length)
        }
        generatedIndices.push(randomIndex)
        return randomIndex;
    }
    function ask(input) {
        let generatedIndices = [];
        let marks = 0;
        for (let i in input){
            let index = generateIndex(input,generatedIndices);
            let answer = prompt(input[index].question+" A. "+input[index].Answer+" B. "+input[index].wrong);
            if (answer.toUpperCase() === input[index].Answer) {
                marks++;
            }
        }
        alert("You got "+marks+"/"+input.length);
        let output = [{"marks":marks}]
        for(let i in input){
            output.push({"question":input[i].question,"Answer":input[i].Answer})
        }
        return output;
    }
    ask(input)
}

//////////////////////// EXAMPLE OF FUNCTION CALL ////////////////////////

// textQuiz(questions)