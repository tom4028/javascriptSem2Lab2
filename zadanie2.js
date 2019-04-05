class Palindrome{


    isPalindrome(w){
      return w.split("").reverse().join("") == w ? true : false;       
    }

    longestPalindrome(w){
        let maxP_length = 0;
        let maxp = '';
        for(let i=0;i<w.length;i++){
            let subs = w.substr(i,w.length);
            for(let j=subs.length;j>=0;j--){
                let sub_subs = subs.substr(0,j);
                if(sub_subs.length <= 1) continue;
                if(this.isPalindrome(sub_subs)){
                    if(sub_subs.length > maxP_length){
                        maxP_length = sub_subs.length;
                        maxp = sub_subs;
                    }
                }
            }
        }
        console.log(maxP_length,maxp);
        return maxp;
    }
    
}

const newPal = new Palindrome();

//console.log(newPal.isPalindrome('abcd'));
console.log(newPal.longestPalindrome('abracadabra'));