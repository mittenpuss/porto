// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
    
//     let notDup=[]
//     let dup=0
    
//     for(let i=0; i<nums.length; i++){
//         dup=dup^nums[i]
//         console.log(dup)    
//     }

//     return dup
// };


// singleNumber([2,2,1]) //1
// console.log(singleNumber([1])) //1


var singleNumber = function(nums) {
    nums.sort()
    for(let i=0; i<nums.length; i++){
        if(nums[i]==nums[i+1]){
            i++
        }else{
            return nums[i]
        }
    }

};

console.log(singleNumber([4,1,2,1,2])) //4
console.log(singleNumber([1,1,2,2,4])) //4

