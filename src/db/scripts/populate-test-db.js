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
    fullName: 'First Name',
    enrollmentNumber: 11,
    branch: 'Computer Science',
    startYear: 2022,
    currentSem: 4,
    userDetails: [
      { semester: 1, rollNo: 11, batch: 'A1' },
      { semester: 2, rollNo: 12, batch: 'A1' },
    ],
    isActivated: true,
  },
  {
    fullName: 'name second',
    enrollmentNumber: 12,
    branch: 'Mechanical Engineering',
    startYear: 2019,
    currentSem: 6,
    userDetails: [
      { semester: 1, rollNo: 21, batch: 'B1' },
      { semester: 2, rollNo: 22, batch: 'B1' },
    ],
    isActivated: false,
  },
];

const clearDatabase = async () => {
  await User.deleteMany({}); // Delete all documents from the User collection
};

// Define an asynchronous function to populate the database
const populateDatabase = async () => {
  await clearDatabase(); // Clear the database first 
  await User.insertMany(users); // Insert the predefined users into the database
  console.log('Database populated!'); // Log success 
  mongoose.connection.close(); //  connection close 
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
