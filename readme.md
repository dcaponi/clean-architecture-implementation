## Getting Started
1. [Install Docker]([https://docs.docker.com/v17.09/engine/installation/)
2. Clone this repository
3. (Optional) [Install MongoDb Compass](https://www.mongodb.com/products/compass) So we can see things getting saved to the MongoDB cluster on your local
4. Create a .env file and add a connection string for your local
	* `DATABASE_CONNECTION=mongodb://mongo:27017/student`
5. Run `docker-compose build`
4. Run `docker-compose up`
