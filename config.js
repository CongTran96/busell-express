require('dotenv').config();

//==============================================================================
// CONFIG INITIALIZATION
//==============================================================================

const CONFIG = {
  
  // REVISION_HASH when using the docker build will contain the build hash that
  // it was built at.
  REVISION_HASH: process.env.REVISION_HASH,

  //------------------------------------------------------------------------------
  // JWT based configuration
  //------------------------------------------------------------------------------

  // JWT_SECRET is the secret used to sign and verify tokens issued by this
  // application.
  JWT_SECRET: process.env.JWT_SECRET || null,

  // JWT_EXP is the time json expert
  JWT_EXP: process.env.JWT_EXP || 86400,


  //------------------------------------------------------------------------------
  // External database configuration
  //------------------------------------------------------------------------------

  // DB HOST
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 27017
}

module.exports = CONFIG;