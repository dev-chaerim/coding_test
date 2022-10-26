

const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
      const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
};
  
  const arr = [0,1,1];
  let arr2 = [];
  let result;
  
  for(let i=1; i<=arr.length; i++) {
    result = getPermutations(arr, i).map((v)=> Number(v.join('')));
    arr2.push(...result)
    // console.log(answer)
  }
  arr2 = Array.from(new Set(arr2));
  console.log(arr2)
  const answer = arr2.filter((v)=> {
    if(v<=1) return false;
	  else if(v % 2 !== 0 && v % 3 !== 0) return true;
    
  })
  console.log(answer)
    