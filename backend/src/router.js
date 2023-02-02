const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken } = require("../auth");
const contactControllers = require("./controllers/contactControllers");
const categoryControllers = require("./controllers/categoryControllers");
const userControllers = require("./controllers/userControllers");
const authControllers = require("./controllers/authControllers");

// Gestion des users
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", hashPassword, userControllers.add);
router.put("/users/:id", verifyToken, userControllers.edit);
router.delete("/users/:id", verifyToken, userControllers.destroy);

// Auth
router.post("/register", hashPassword, userControllers.add);

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// gestions des contact
router.get("/contacts", contactControllers.browse);
router.get("/contacts/:id", contactControllers.read);
router.put("/contacts/:id", contactControllers.edit);
router.post("/contacts", contactControllers.add);
router.delete("/contacts/:id", contactControllers.destroy);

// gestion des groupe de contacts
router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.put("/category/:id", categoryControllers.edit);
router.post("/category", categoryControllers.add);
router.delete("/category/:id", categoryControllers.destroy);
module.exports = router;
