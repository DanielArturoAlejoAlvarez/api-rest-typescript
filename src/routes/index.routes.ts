import {Router} from 'express';

import IndexCTRL from '../controllers/index.controller';

const router = Router();

router.route('/').get(IndexCTRL.index);

export default router;