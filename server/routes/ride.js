import express from 'express';
import rideController from '../controllers/ride';
import authMiddleware from '../middleware';

const route = express.Router();

route.get('/', authMiddleware, rideController.getAllRides);
route.get('/:rideId', rideController.getSingleRide);
route.post('/:rideId/requests', authMiddleware, rideController.joinRide);
route.post('/', authMiddleware, rideController.createRide);

export default route;
