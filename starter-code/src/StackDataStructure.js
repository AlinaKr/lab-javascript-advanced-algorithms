function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        if (this.stackControl.length === 0){
            return true;
        }
        else{
            return false;
        }
    }
    this.canPush = function(){
        if (this.stackControl.length < this.MAX_SIZE){
            return true;
        }
        else{
            return false;
        }
    }
    this.push = function(elem){
        if(this.canPush()){
            this.stackControl.push(elem);
            return this.stackControl;
        }
        else{
            return 'Stack Overflow';
        }
    }
    this.pop = function(){
        if(this.stackControl.length > 0){
            return this.stackControl.pop();
        }
        else{
            return 'Stack Underflow';
        }
    }

}

stack1 = new StackDataStructure();
stack1.push(102)

//this.stackControl.length > 0