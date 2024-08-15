//divide And Conqueror teachnique 
//find the index fo given no in a shorted array 7 
//[1,2,3,4,5,6,7,8,9,10.11,12,13,14,15,] ==> index 6->output.


// min=0 ,              element = 1 
// max=array.length-1 , element = 15
// midIndex(min+max) /2 => (0+14) => 7 (Index) , element = 8
// if array[minIndex (8)] < number (7)
// min = midIndex(8) + 1 ;
// array[midIndex(8)] > number (7)
// max=midIndex-1 , min=0 , max=6 {1,2,3,4,5,6}
//(min + max)/2 => 3
// index+1 =>4 (min) , max=6  {5,6,7}
// (min + max )/2 => 5 +1 =>(min 6) => (max=6)
// (min+max)/2 => 6
// else midIndex => 6 , element => 7
// function SearchAlgo(array,number){
//     let min = 0;
//     let max = array.length - 1;
//     while(min <= max){
//         let midIndex = Math.floor((min+max)/2);
//     if (array[midIndex] > number){
//         min=midIndex+1;
//     } else if (array[midIndex] < number){
//         max=midIndex-1;
//     }else{
//     return midIndex
//     }
//     }
//     return -1; // number not found
// } 
// const result = SearchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],7 );
// console.log(result);

function SearchAlgo(array, number) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);

        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    }

    return -1; 
}

const result = SearchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 9);
console.log(result); 
