module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5575027078f6d8692ba46dbda6d26e79'),
  },
});
