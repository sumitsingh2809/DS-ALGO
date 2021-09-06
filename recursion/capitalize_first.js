function capitalizeFirst(arr) {
    let results = [];
    if (arr.length === 0) return [];

    results.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return results.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
