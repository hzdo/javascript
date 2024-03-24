function calculateSum() {
    let a = 12;
    console.log(a);
    const x = parseInt(document.getElementById('field1').value);
    const y = parseInt(document.getElementById('field2').value);
    const result = document.getElementById('result');
    console.log(x + y + a);
    result.value = x + y + a;
  }