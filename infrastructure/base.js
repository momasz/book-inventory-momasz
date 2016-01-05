module.exports = {
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  addons: {},
  features: {
    'runtime-dyno-metadata': {
      enabled: false
    },
    'log-runtime-metrics': {
      enabled: false
    },
    'http-session-affinity': {
      enabled: false
    },
    preboot: {
      enabled: false
    },
    'http-shard-header': {
      enabled: false
    },
    'http-end-to-end-continue': {
      enabled: false
    }
  },
  formation: [
    {
      process: 'web',
      quantity: 1,
      size: 'Free'
    }
  ],
  log_drains: []
};