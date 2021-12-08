function decipher() {
    let str = document.getElementById('cipher').value.toUpperCase()
      let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let strArr = str.split("");
      let result = strArr.map(function(char) {
        let idxInAlp = alphabets.indexOf(char);
        console.log(idxInAlp)
        let resultIdx = (idxInAlp / 13) >=1? idxInAlp - 13: idxInAlp + 13;
        console.log(resultIdx)
        if(idxInAlp >= 0) {
          console.log(alphabets[resultIdx])
          return alphabets[resultIdx]  
        } else {
          console.log(char)
          return char
        }  
      })
      document.getElementById('h').innerHTML = result.join("");
    }
    
    
