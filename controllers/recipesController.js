const express = require("express");
const router = express.Router();

// Add recipe model
const Recipe = require("../models").Recipe;
const User = require("../models").User;
const Category = require("../models").Category;

// NEW ROUTE - SEND EMPTY FORM
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//INDEX ROUTE - GET ALL THE RECIPES
router.get("/", (req, res) => {
  Recipe.findAll().then((recipes) => {
    res.render("index.ejs", {
      recipes: recipes,
    });
  });
});

// NEW ROUTE - SEND EMPTY FORM
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// SHOW ROUTE - GET ONE RECIPE
router.get("/:id", (req, res) => {
  Recipe.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Category,
      },
    ],
    attributes: ["title", "description", "category", "owner", "ingredients", "instructions"],
  }).then((Recipe) => {
    res.render("show.ejs", {
      recipe: recipe,
    });
  });
});

//POST ROUTE - TAKES THE FORM DATA AND CREATES A NEW RECIPE
router.post("/", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  Fruit.create(req.body).then((newFruit) => {
    res.redirect("/fruits");
  });
});

router.get("/:id/edit", function (req, res) {
  Fruit.findByPk(req.params.id).then((foundFruit) => {
    Season.findAll().then((allSeasons) => {
      res.render("edit.ejs", {
        fruit: foundFruit,
        seasons: allSeasons,
      });
    });
  });
});

//UPDATE Route
router.put("/:id", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((updatedFruit) => {
    Season.findByPk(req.body.season).then((foundSeason) => {
      Fruit.findByPk(req.params.id).then((foundFruit) => {
        foundFruit.addSeason(foundSeason);
        res.redirect("/fruits");
      });
    });
  });
});

// DELETE A RECIPE
router.delete("/:id", (req, res) => {
  Fruit.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/fruits");
  });
});

module.exports = router;



