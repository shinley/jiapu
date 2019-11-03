let config = {
    dev: require('./dev.config').default,
    prod: require('./prod.config').default,
};

export default  config[process.env.VUE_APP_ENV_TYPE || 'beta'];