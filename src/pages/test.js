// // const merge = (nums1, m, nums2, n) =>{
// //     nums1=nums1.splice(0,m)
// //     nums2=nums2.splice(0,n)
// //     return nums1.concat(nums2).sort()
    
// // }


// // const merge = (nums1, m, nums2, n) =>{

// // nums1.splice(m,nums1.length - m)
// // nums2.splice(n,nums2.length - n)
// // nums1.push(...nums2)
// // return nums1.sort((a,b)=>a-b);

// // }

// // console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
// // console.log(merge([1],1,[],0)) //[1]
// // console.log(merge([0],0,[1],1)) //[1]


// var searchInsert = function(nums, target) {
//     let lastValue = nums[nums.length - 1]
//     let lastIndex = nums.length-1
        
//     for(let i=0; i<nums.length; i++){
//         if(target>nums[i]&&target<nums[i+1]){
//             nums.splice(1, 0, target);
//         }

//         if(i==lastIndex&&target>lastValue){
//             nums.splice(i+1, 0, target);
//             break;
//         }

//     }

//     if(nums.indexOf(target)==-1){
//         return 0
//     }else{
//         return nums.indexOf(target)
//     }
    
// };



// // var searchInsert = function(nums, target) {

// //     for(let i=0; i<nums.length;i++){

// //         if(nums[i]===target){
// //             console.log(i)
// //             break;
// //         }else{
// //             console.log('nope')
// //         }

// //         if(target>nums[i]&&target<nums[i+1]){
// //             nums.splice(1, 0, target);
// //         }

// //         if(i==lastIndex&&target>lastValue){
// //             nums.splice(i+1, 0, target);
// //             break;
// //         }

// //         // nums[i]===target?console.log(i):console.log('nope')
// //     }
// // }


// const meow = [1,2,3,4,5,6,7]
// let start = 0
// let end = meow.length-1

// console.log(start,end)

let searchInsert = function (arr, x) {
  
    let start=0, end=arr.length-1, answer
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
        console.log(`mid ${mid}`)
        // console.log(mid)
        // console.log(arr[mid])
        // If element is present at mid, return True
       
        if (arr[mid]===x) {
            return answer=mid
        }

        // Else look in left or right half accordingly
        else if (arr[mid] < x){
            start = mid + 1;
        }            
        else if (arr[mid] > x){
            answer = mid
            end = mid - 1;
        }

        if(arr[mid-1]<x && arr[mid+1]>x){
            return answer=arr[mid]
        }
        
       
    }
  
    return answer;
}

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))