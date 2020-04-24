const paymentApi = require('./stripeCtrl')

const configureRoutes = app => {
  paymentApi(app);
}

module.exports = configureRoutes;