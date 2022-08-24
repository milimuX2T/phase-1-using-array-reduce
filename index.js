const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0

//totalBatteries = batteryBatches.reduce(function(a,b,c,d,e,f,j){
    // return a+b+c+d+e+f+j

//},0)
//totalBatteries = sum

totalBatteries = batteryBatches.reduce(function(total,num){return total + num})

// Code your solution here
