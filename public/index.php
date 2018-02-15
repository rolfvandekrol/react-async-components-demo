<?php

$stats = json_decode(file_get_contents(dirname(__FILE__) . '/webpack-stats.json'), TRUE);

$scripts = [];

foreach (array('js/vendor', 'js/generic', 'js/app') as $key) {
  if (empty($stats['js'][$key])) { continue; }
  foreach ($stats['js'][$key] as $path) {
    $scripts[] = $path;
  }
}

?><!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pruvo</title>

        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <div id="container"></div>

        <?php foreach ($scripts as $script): ?>
          <script src="/<?php print htmlspecialchars($script); ?>"></script>
        <?php endforeach; ?>
    </body>
</html>
