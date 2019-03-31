
/* Create and use the burger db */
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE  burger_db;
USE burger_db;


/* Create a table for burger types*/

CREATE TABLE burgers (
	id INT NOT NULL AUTO _INCREMENT,
	burger_name VARCHAR( 255) NOT NULL,
	finish BOOLEAN NOT NULL DEFAULT FALSE,
	
	/* Set ID as primary key */
	PRIMARY KEY ( id )
);
