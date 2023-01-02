import { Router } from 'express';

import { authenticateRoutes } from './Authenticate.routes';
import { carsRoutes } from './Cars.routes';
import { categoriesRoutes } from './Categories.routes';
import { passwordRoutes } from './Password.routes';
import { rentalRoutes } from './Rental.routes';
import { specificationRoutes } from './Specifications.routes';
import { usersRoutes } from './Users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);
router.use('/rentals', rentalRoutes);
router.use('/password', passwordRoutes);
router.use(authenticateRoutes);

export { router };
