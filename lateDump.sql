-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: adventure
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adventurelist`
--

DROP TABLE IF EXISTS `adventurelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adventurelist` (
  `adv_id` int(11) NOT NULL AUTO_INCREMENT,
  `countryName` varchar(20) NOT NULL,
  `placeName` varchar(50) NOT NULL,
  `advType` varchar(20) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `imgFile` varchar(355) DEFAULT NULL,
  `user_id` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`adv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adventurelist`
--

LOCK TABLES `adventurelist` WRITE;
/*!40000 ALTER TABLE `adventurelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `adventurelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dislikelist`
--

DROP TABLE IF EXISTS `dislikelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dislikelist` (
  `dislikeId` int(11) NOT NULL AUTO_INCREMENT,
  `imageId` varchar(100) NOT NULL,
  `userId` varchar(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`dislikeId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dislikelist`
--

LOCK TABLES `dislikelist` WRITE;
/*!40000 ALTER TABLE `dislikelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `dislikelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likelist`
--

DROP TABLE IF EXISTS `likelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likelist` (
  `likeId` int(11) NOT NULL AUTO_INCREMENT,
  `imageId` varchar(100) NOT NULL,
  `userId` varchar(10) NOT NULL,
  `userName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`likeId`)
) ENGINE=InnoDB AUTO_INCREMENT=398 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likelist`
--

LOCK TABLES `likelist` WRITE;
/*!40000 ALTER TABLE `likelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `likelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlist`
--

DROP TABLE IF EXISTS `userlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlist`
--

LOCK TABLES `userlist` WRITE;
/*!40000 ALTER TABLE `userlist` DISABLE KEYS */;
INSERT INTO `userlist` VALUES (128,'Admin','admin@gmail.com','$2b$10$3njMYXIiV5qxhFYHAQRh5uGlRV4RtdD5QGXP4msmz4jaK/fsWxuOe'),(129,'User','me@gmail.com','$2b$10$lgvO08cDLEJvah4BA2xRYelQOL3qAcAo9OZ7ZxNLt1L/u3q9ftV.C'),(130,'Abebe kebede','abebe@gmail.com','$2b$10$3WQTbU8DVqRacPjbZ4Os3.23Hq//Pd.6E0/hBPFXL1.46SZAyXCeG'),(131,'Abel','abel@gmail.com','$2b$10$XORg9uZTdEEVqeTctYKlr.C9/2knnp.lheZdCEFzfIB5/EoJ/C45q'),(132,'Abebe','abebe@gmail.com','$2b$10$0EqBlEW1S9hO6P8BBZ6g9uPwDB4Sn2Icmd6RAPEauEAcSpVO.pTam'),(133,'Abebe','asd@gmail.com','$2b$10$7ytnZ4PWIB5Rb2ZJZXW6l.2rsDa5oMDeaJT6g6oBwwVVlk9vvjA8m'),(134,'Abebe al2','scscs','$2b$10$JGRM.YYkHsA2/SnUGmpW.OtOkjvwPyoLMg3IsOXNBovSCpz9MnLo2'),(135,'Abel abel','abel@gmail.com','$2b$10$fJDRpMY3f7T0QOIsPw4QIOG6eOqOzBC0MWe3hVWwBc2P4D6D/UK6C');
/*!40000 ALTER TABLE `userlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-03 22:59:51
