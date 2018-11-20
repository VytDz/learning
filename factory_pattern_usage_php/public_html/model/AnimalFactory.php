<?php
/**
 * Created by PhpStorm.
 * User: vytenis
 * Date: 18.11.5
 * Time: 11.40
 */

include_once __DIR__ . "Cat.php"
include_once __DIR__ . "Dog.php"
include_once __DIR__ . "Pigeon.php"

class AnimalFactory
{
    public function getAnimal($animal)
    {
        $result = null;

        switch ($animal) {
            case "dog":
                $result = new Dog();
                break;
            case "cat":
                $result = new Cat();
                break;
            case "pigeon":
                $result = new Pigeon();
                break;
        }
        return $result;
    }
}

?>