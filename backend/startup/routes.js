const bodyParser = require('body-parser');
const transactions = require('../routes/transactions');
const logger = require('../startup/logging')
const jsonResponse = require('../middlewares/json');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(jsonResponse);
    app.use('/transactions', transactions);
    app.use('*', (req, res) => {
        logger.warn('user sent request to unknown page', { page: req.originalUrl });
        return res.status(404).send(JSON.stringify({ result: 'Page not found' }));
    })
}