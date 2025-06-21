
    function findSingleNumber() {
      const input = document.getElementById("numsInput").value;
      const nums = input.split(',').map(Number);
      let result = 0;

      for (let num of nums) {
        result ^= num; // XOR operation
      }

      document.getElementById("result").textContent = `The single number is: ${result}`;
    }
  