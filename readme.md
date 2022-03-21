####index.html

```html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tutorial VUE</title>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="app.js"></script>
  <script src="components/01_hola-mundo.js"></script>
</head>

<body>
  <div id="app">
    <hola-mundo/>
  </div>
  <script>
    app.mount('#app')
  </script>
</body>

</html>