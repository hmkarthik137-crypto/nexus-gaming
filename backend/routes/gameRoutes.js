import express from "express";
import Game from "../models/game.js";

const router = express.Router();

// GET ALL GAMES
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();

    console.log("Games Count:", games.length);
    console.log("Games:", games);

    res.status(200).json(games);
  } catch (error) {
    console.error("Get Games Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET SINGLE GAME
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({
        success: false,
        message: "Game not found",
      });
    }

    res.status(200).json(game);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ADD GAME
router.post("/", async (req, res) => {
  try {
    const game = await Game.create(req.body);

    res.status(201).json({
      success: true,
      data: game,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// UPDATE GAME
router.put("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(game);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE GAME
router.delete("/:id", async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Game deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
