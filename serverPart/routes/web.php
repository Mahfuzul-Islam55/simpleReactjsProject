<?php

$router->get('/', function(){
    
    return "<h1>React Site API</h1>";
});

$router->get('/chartData','ChartDataController@onAllSelect');