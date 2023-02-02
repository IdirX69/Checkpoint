SET foreign_key_checks = 0;

DROP TABLE IF EXISTS `Category`;
CREATE TABLE IF NOT EXISTS `Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;


INSERT INTO `Category` (name) VALUES
("Famille"),
("Amis");

DROP TABLE IF EXISTS `user` ;
CREATE TABLE IF NOT EXISTS`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70) NULL,
  `email` VARCHAR(100) NULL,
  `hashedPassword` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



DROP TABLE IF EXISTS `contacts` ;
CREATE TABLE IF NOT EXISTS`contacts` (
    `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `phone_number` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_contacts_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `checkpoint`.`category` (`id`),
  CONSTRAINT `fk_contacts_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `checkpoint`.`user` (`id`)
  )
ENGINE = InnoDB;



SET foreign_key_checks = 1;