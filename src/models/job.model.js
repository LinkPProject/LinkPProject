module.exports = (sequelize, Sequelize) => {
    const job = sequelize.define("job", {
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "companyName is Required" },
          },
      },      
      description: {
        type: Sequelize.STRING(3000),
        allowNull: false,
        validate: {
            notNull: { msg: "description is Required" },
          },
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "designation is Required" },
          },
      },
      salaryRange: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastDateToApply: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      jobLink:{
        type: Sequelize.STRING,
        allowNull: true,
      }


    });
    // job.sync({alter:true});
    return job;
    
  };