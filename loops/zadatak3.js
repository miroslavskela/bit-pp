var nums = [1, 15, true, 25, 29, 39];
var sum = 0;
var product = 1;

for (i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
        sum += nums[i];
        product *= nums[i];
    } else {
        console.log(nums[i] + " is not valid number" + " but " + typeof nums[i]);
    }
}
console.log("suma je " + sum + " a proizvod je " + product);