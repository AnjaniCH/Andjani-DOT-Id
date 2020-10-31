<?php
$yaml = '
storages:
    database:
        client: ${$SQL_CLIENT}
        connection:
            host: ${$SQL_HOST}
            port: ${$SQL_PORT}
            user: ${$SQL_USER}
            password: ${$SQL_PASSWORD}
            database: ${$SQL_DATABASE}
';

$data = yaml_parse($yaml);

$output = [];
foreach ( $data as $key => $entry ) {
    resolveConfig($output, $key, $entry);
}

function resolveConfig(&$arr, $path, $value, $separator='.') {
    $keys = explode($separator, $path);
    foreach ($keys as $key) {
        $arr = &$arr[$key];
    }
    $arr = $value;
}

echo json_encode($output, JSON_PRETTY_PRINT);
?>