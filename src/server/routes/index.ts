import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({ message: "Hello World!" });
});

export { router };

