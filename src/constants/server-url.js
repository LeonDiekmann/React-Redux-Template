/**
 * This module exports the ServerURL for the current environment based on "__[env]__" variables that becomes set with the webpack DefineTextPlugin.
 * @type {string}
 */

const DEV_URL = 'https://my-dev-api.com';
const STAGING_URL = 'https://my-staging-api.com';
const PROD_URL = 'https://my-live-api.com';

// eslint-disable-next-line no-nested-ternary
const SERVER_URL = __LIVE__ ? PROD_URL : (__STAGING__ ? STAGING_URL : DEV_URL);

export default SERVER_URL;
