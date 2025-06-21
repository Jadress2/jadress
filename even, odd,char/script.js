
    function classifyArrayElements(arr) {
      const result = {
        evens: [],
        odds: [],
        chars: []
      };

      arr.forEach(item => {
        if (typeof item === 'number' && Number.isInteger(item)) {
          if (item % 2 === 0) {
            result.evens.push(item);
          } else {
            result.odds.push(item);
          }
        } else if (typeof item === 'string' && item.length === 1) {
          result.chars.push(item);
        }
      });

      result.evens.sort((a, b) => a - b);
      result.odds.sort((a, b) => a - b);
      result.chars.sort();

      return result;
    }

    function processArray() {
      const input = document.getElementById("arrayInput").value;
      const parsed = input.split(",").map(item => {
        item = item.trim();
        if (item.startsWith('"') && item.endsWith('"')) {
          return item.slice(1, -1);
        } else if (!isNaN(item)) {
          return Number(item);
        } else {
          return item;
        }
      });

      const result = classifyArrayElements(parsed);
      document.getElementById("output").textContent = JSON.stringify(result, null, 2);
    }
  