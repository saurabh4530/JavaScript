fetch('test.json')
      .then(response => response.json())
      .then(data => show(data));
      function show(data) {
        console.table(data.details);
}