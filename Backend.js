// Import necessary modules
const axios = require('axios');
const { expect } = require('chai');

// Base URL for reqres.in API
//const baseURL = 'https://reqres.in/api';

describe('Reqres API Tests', () => {
  // Test case 1: Validate a successful GET request
  it('should retrieve a list of users', async () => {
    const response = await axios.get(`https://reqres.in/api/users`);
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object').that.includes.keys('page', 'per_page', 'total', 'data');
    expect(response.data.data).to.be.an('array').that.is.not.empty;
  });

  // Test case 2: Validate a successful POST request
  it('should create a new user', async () => {
    const newUser = {
      name: 'John Doe',
      job: 'Software Engineer'
    };
    const response = await axios.post(`https://reqres.in/api/users`, newUser);
    expect(response.status).to.equal(201);
    expect(response.data).to.include.keys('name', 'job', 'id', 'createdAt');
    expect(response.data.name).to.equal(newUser.name);
    expect(response.data.job).to.equal(newUser.job);
  });
  // Test case 3: Validate a failed GET request
  it('should return 404 for non-existent resource', async () => {
    try {
      await axios.get(`https://reqres.in/api/users/23`);
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
    });
});
