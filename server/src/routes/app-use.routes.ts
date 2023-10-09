// // src/routes/users.ts

// import { Router } from 'express';
// import asyncHandler from 'express-async-handler';

// const router = Router();

// /**
//  * @description:    Get all users
//  * @route:          GET /api/users
//  * @access:         Private/Admin
//  */
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const users: User[] = await knex('users');
//     res.status(200).json({ message: 'Users retrieved successfully', users });
//   })
// );

// /**
//  * @description:    Get current user
//  * @route:          GET /api/users/:id
//  * @access:         Private
//  */
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const user: Partial<User> = req.user;

//     res
//       .status(200)
//       .json({ message: 'User details retrieved successfully', user });
//   })
// );

// export default router;
