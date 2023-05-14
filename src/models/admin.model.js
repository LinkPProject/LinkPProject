module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    // Admin.sync({alter:true});
    return Admin;
    
  };