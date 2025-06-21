
    function twoSum(nums, target) {
      const seen = {};
      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.hasOwnProperty(complement)) {
          return [seen[complement], i];
        }
        seen[nums[i]] = i;
      }
      return []; // fallback, though the problem says a solution always exists
    }

    function handleTwoSum() {
      const numsStr = document.getElementById("numsInput").value;
      const target = parseInt(document.getElementById("targetInput").value);

      const nums = numsStr.split(',').map(Number);

      const result = twoSum(nums, target);

      if (result.length === 2) {
        document.getElementById("result").textContent = 
          `Indices: ${result[0]} and ${result[1]}`;
      } else {
        document.getElementById("result").textContent = 
          "No valid pair found.";
      }
    }
