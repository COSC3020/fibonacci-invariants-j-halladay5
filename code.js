function fib(n) {
    var fibNums;            //array to store recursive values in

    if(n == 0)              //base case 1, assign 0 to fibNums and return
    {
        fibNums = [0]
        return fibNums;
    }

    fibNums= [0,1];         //base case 2/ recursion set up. This allows the base cases to work correctly with recursion. 

    if(n == 1)              //base case 2, returns fibNums which is now 0,1
    {
        return fibNums;
    }

    if (n > 1)
    {
        fibNums = fib(n-1);                             //change fibNums values to be set by recursion. This recurses down to base case 2
        fibNums[n] = (fibNums[n-1]+fibNums[n-2]);       //or [0,1], and adds top two elements and assigns to index n. Continues recursion
                                                        //until back to original call, adds the original call of n-1 and n-2 and assigns

    }         
    return fibNums;              //returns array 

}
console.log(fib(0));
console.log(fib(1));
console.log(fib(7));

