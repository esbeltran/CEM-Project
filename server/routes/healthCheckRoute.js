import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  try {
    return res.status(200).json({
      message: "Conection established",
      status: true,
      timeStamp: new Date(),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
