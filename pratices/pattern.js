{
  function egyptianSlave(n) {
    let a = n;
    for (let i = 0; i <= n; i++) {
      let x = " ";
      let y = "* ";
      let z = x.repeat(a) + y.repeat(i);
      console.log(z);
      a--;
    }
  }
  egyptianSlave(10);
}