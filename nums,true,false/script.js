 
    function containsDuplicate(nums) {
      let seen = new Set();
      for (let num of nums) {
        if (seen.has(num)) {
          return true;
        }
        seen.add(num);
      }
      return false;
    }

    function checkDuplicates() {
      const input = document.getElementById("nums").value;
      const numArray = input.split(",").map(n => parseInt(n.trim()));
      
      if (numArray.some(isNaN)) {
        document.getElementById("result").textContent = "Please enter valid integers.";
        return;
      }

      const hasDuplicate = containsDuplicate(numArray);
      document.getElementById("result").textContent = hasDuplicate 
        ? "✅ Duplicate found!" 
        : "✅ All elements are unique.";
    }
  