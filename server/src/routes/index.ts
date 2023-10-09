// src/routes/index.ts

import { Router } from 'express';
import asyncHandler from 'express-async-handler';
// import appUserRoutes from './app-use.routes';

const router = Router();

/**
 * @description:    Fetch Root
 * @route:          GET /api
 * @access:         Public
 */
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    res.status(200).send('Server Running...');
  })
);

router.get(
  '/private',
  asyncHandler(async (req, res, next) => {
    res.status(200).send({ message: 'This is a private route' });
  })
);

export default router;
