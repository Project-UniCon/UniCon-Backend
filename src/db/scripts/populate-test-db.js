/**
 * populate-test-db.js
 * 
 * Requirements Met:
 * - The script uses the existing MongoDB connection logic from `db/index.js`.
 * - Data to be populated is defined as per the provided structure.
 * - The database is cleared before inserting new data to ensure clean and consistent test data.
 * - The script logs success and error messages on execution.
 * - No Express server is required to run this script.
 */
import mongoose from 'mongoose';
import { User } from '../../models/user.model.js'; // Import User model
import connectDB from '../index.js'; // Import connectDB function to connect to the database

const users = [
  {
    fullName: 'Vanraj Desai',
    enrollmentNumber: 22002170110023,
    branch: 'Computer Science',
    startYear: 2022,
    currentSem: 4,
    userDetails: [
      { semester: 1, rollNo: 101, batch: 'A1' },
      { semester: 2, rollNo: 102, batch: 'A2' },
      { semester: 3, rollNo: 103, batch: 'A3' },
      { semester: 4, rollNo: 104, batch: 'A2' },
    ],
    isActivated: true,
    avatar: 'path/to/Vanraj_avtar.jpg',
    password: 'password123', // Include password field but don't process it
  },
  {
    fullName: 'Het Shah',
    enrollmentNumber: 22002170110024,
    branch: 'Computer Science',
    startYear: 2023,
    currentSem: 2,
    userDetails: [
      { semester: 1, rollNo: 201, batch: 'ME1' },
      { semester: 2, rollNo: 202, batch: 'ME1' }
    ],
    isActivated: false,
    avatar: 'path/to/Het_avtar.jpg',
    password: 'Het123', // Include password field but don't process it
  },
];

// Function to clear the database
const clearDatabase = async () => {
  await User.deleteMany({}); // Delete all documents from the User collection
};

// Define an asynchronous function to populate the database
const populateDatabase = async () => {
  await clearDatabase(); // Clear the database first

  for (let user of users) {
    // Create a new user document without processing the password
    const newUser = new User(user);
    await newUser.save();
  }
  console.log('Database populated!'); // Log success
  mongoose.connection.close(); // Close the connection
};

// Connect to the database and populate it
connectDB()
  .then(() => {
    console.log('Connected to the database'); // Success message
    return populateDatabase();
  })
  .catch((error) => {
    console.error('Error populating database:', error); // Log error message
    mongoose.connection.close(); // Close the database connection in case of an error
  });
