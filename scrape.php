<?php
	$mobil = shell_exec("phantomjs.exe scrape.js");
	$data = json_decode($mobil);

	var_dump($data);
?>
