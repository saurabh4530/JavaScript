fetch('test1.json')
      .then(response => response.json())
      .then(data => show(data));
      function show(data) {
        console.log( data.details);
}
