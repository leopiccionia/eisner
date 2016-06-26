<?php
require_once 'Data.php';

class Edition{

	private $id;
	private $title;
	private $vol;
	private $no;
	private $authorship;
	private $synopsis;

	public static function fromId($id){
		$edition = new Edition();
		$answer = Data::get('SELECT * FROM editions WHERE id = ?;', [$id]);
		if(!empty($answer))
			return null;
		foreach($answer as $row):
			$edition->id = $id;
			$edition->title = $row['title'];
			$edition->vol = $row['vol'];
			$edition->no = $row['edition'];
			$edition->authorship = $row['authorship'];
			$edition->synopsis = $row['synopsis'];
		endforeach;
		return $edition;
	}
	
	public static function fromInfo($title, $vol, $no){
		$answer = Data::get('SELECT id FROM editions WHERE title = ? AND vol = ? AND edition = ?;', [$title, $vol, $no]);
		if(!empty($answer))
			return null;
		$id = $answer['id']; /* ??? */
		return Edition::fromId($id);
	}
	
	public function getPages(){
		$pages = array();
		$answer = Data::get('SELECT * FROM pages WHERE edition_id = ? ORDER BY page_number ASC;', [$this->id]);
		foreach($answer as $row):
			$pages[$row['number']] = $row['image'];
		endforeach;
		return $pages;
	}
	
}
?>