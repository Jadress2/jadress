
    let count = 1;
    let number = 3;
    const list = document.getElementById("multiplesList");

    while (count <= 5) {
      const multiple = number * count;
      const listItem = document.createElement("li");
      listItem.textContent = multiple;
      list.appendChild(listItem);
      count++;
    }
 