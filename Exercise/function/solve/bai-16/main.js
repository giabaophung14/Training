function multiplication(n) {
    if (n === 11) return 11;
  
    return n * multiplication(n - 11);
  }

  document.getElementById("multiplication").innerHTML = multiplication(55)