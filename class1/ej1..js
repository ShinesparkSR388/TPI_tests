const number1 = 3;
const number2 = 5;
const number3 = 1;

function whois(number1, number2, number3){
    if(number1 >= number2 && number1 >= number3){
        this.hig = number1;
        if(number2 >= number3){
            this.mid = number2;
            this.low = number3;
        }else{
            this.mid = number3;
            this.low = number2;
        }
    }else if(number2 >= number1 && number2 >= number3){
        this.hig = number2;
        if(number1 >= number3){
            this.mid = number1;
            this.low = number3;
        }else{
            this.mid = number3;
            this.low = number1;
        }
    }else{
        this.hig = number3;
        if(number2 >= number1){
            this.mid = number2;
            this.low = number1;
        }else{
            this.mid = number1;
            this.low = number2;
        }
    }

    this.cadena = function (){
        return ("mayor: " + this.hig + " medio: " + this.mid + " low: " + this.low);
    }

}

var nn = new whois(number1, number2, number3);
console.log(nn.cadena());