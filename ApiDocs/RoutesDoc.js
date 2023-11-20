

/* --------------------->>> Users Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the user
 *         name:
 *           type: string
 *           example: John Doe
 *           description: Name of the user
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           default: user
 *           example: user
 *           description: Role of the user
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *           description: Email of the user
 *         phoneNumber:
 *           type: string
 *           pattern: "^\\d{10}$"
 *           example: "1234567890"
 *           description: Phone number of the user
 *       example:
 *         _id: "someId"
 *         name: John Doe
 *         email: john@example.com
 *         role: user
 *         phoneNumber: "1234567890"
 */



/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page routes
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get welcome message
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Welcome message
 *         content:
 *           text/plain:
 *             example: "welcome to Home Page"
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */



/**
 * @swagger
 * /user/AddUser:
 *   post:
 *     summary: Add a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User added successfully
 *       400:
 *         description: Bad Request. Check request body for missing or invalid fields.
 *       409:
 *         description: User already exists
 *       500:
 *         description: Internal Server Error
 */
 /**
 * @swagger
 * /user/AllUsers:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *       404:
 *         description: No users found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/SingleUser/{id}:
 *   get:
 *     summary: Get a particular user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
/**
 * @swagger
 * /user/RemoveUser/{id}: 
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
/**
 * @swagger
 * /user/UserUpdate/{id}: 
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User data updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
