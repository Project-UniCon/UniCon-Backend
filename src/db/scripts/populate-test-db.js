/**
 * populate-test-db.js
 * 
 * Requirements Met:
 * - The script uses the existing MongoDB connection logic from `db/index.js`.
 * - Data to be populated is defined as per the provided structure.
 * - As required,the database is cleared before inserting new data to ensure clean and consistent test data.
 * - The script logs success and error messages on the execution.
 * - No Express server is required to run this script.
 * 
 * Usage:
 * To run the script, execute the following command in your terminal:
 * 
 *   node src/db/scripts/populate-test-db.js
 * 
 * Ensure that the environment variable `MONGODB_URI` is set.
 * 
 
 * Author: Nirajan1-droid
 * Date: 06 july-2024
 */

import mongoose from 'mongoose';
import { User } from '../../models'; 
import connectDB from '../index'; 

const users = [
  {
    fullName: 'name first',
    enrollmentNumber: 11,
    branch: 'Computer Science',
    startYear: 2020,
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
      { semester: 1, rollNo: 201, batch: 'B1' },
      { semester: 2, rollNo: 202, batch: 'B1' },
    ],
    isActivated: false,
  },
];

const clearDatabase = async () => {
  await User.deleteMany({});
};

const populateDatabase = async () => {
  await clearDatabase();
  await User.insertMany(users);
  console.log('Database populated!');
  mongoose.connection.close();//after populating the data connection is closed.
};


connectDB()
  .then(() => {
    console.log('Connected to the database');
    return populateDatabase();//after connection being made, then populate the data to db.
  })
  .catch((error) => {
    console.error('Error populating database:', error);
    mongoose.connection.close();
  });
