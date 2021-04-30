function alphabetPosition(text) {
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    let stringResult = ""
    
    for (let posText in text) {
        for (let posAlphabet in alphabetUpper) {
            if (text[parseInt(posText)] === alphabetUpper[parseInt(posAlphabet)] || text[parseInt(posText)] === alphabetLower[parseInt(posAlphabet)]) {
                stringResult += parseInt(posAlphabet) + 1 + " ";
            }
        }
    }
    stringResult = stringResult.substring(0, stringResult.length - 1);
    return stringResult;
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))