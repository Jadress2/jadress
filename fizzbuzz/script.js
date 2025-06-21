 
    function FizBuzz(str1, str2) {
      const totalLength = str1.length + str2.length;

      if (totalLength % 3 === 0 && totalLength % 5 === 0) {
        return "FizzBuzz";
      } else if (totalLength % 3 === 0) {
        return "Flizz";
      } else if (totalLength % 5 === 0) {
        return "Buzz";
      } else {
        return "None";
      }
    }

    function checkFizBuzz() {
      const str1 = document.getElementById("str1").value;
      const str2 = document.getElementById("str2").value;
      const result = FizBuzz(str1, str2);
      document.getElementById("result").innerText = "Result: " + result;
    }
  