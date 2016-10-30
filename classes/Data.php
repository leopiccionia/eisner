<?php
/* Common data access utils */
class Data{
	
	private $host = 'http://localhost';
	private $username = 'admin';
	private $password = '123';
	
	private static function connect(){
		$connection = new PDO("mysql:host=$host;dbname=EisnerDB", $username, $password);
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $connection;
	}
	
	/* Non-executable queries, e.g. SELECT */
	static function get($statement, $params){
		$answer = null;
		try{
			$connection = self::connect();
			$query = $connection->prepare($statement);
			$result = $query->execute($params);
			$answer = $result->fetch(PDO::FETCH_ASSOC);
		}
		catch(Exception $e){
			$answer = null;
		}
		finally{
			$connection = null;
			return $answer;
		}
	}
	
	/* Executable queries, e.g. UPDATE, INSERT, DELETE */
	static function set($statement, $params){
		$success = false;
		try{
			$connection = self::connect();
			$query = $connection->prepare($statement);
			$success = $query->execute($params);
		}
		catch(PDOException $e){
			/* echo $e->getMessage(); */
		}
		finally{
			$connection = null;
			return $success;
		}
	}
	
}
?>