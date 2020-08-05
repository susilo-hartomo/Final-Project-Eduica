'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = (sequelize, DataTypes) => {

  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class Teacher extends Model{}

  Teacher.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot be empty"
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email cannot be empty"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be empty"
        },
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Role cannot be empty"
        },
      }
    },
    kompetensi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Kompetensi cannot be empty"
        },
      }
    },
  }, {sequelize});


  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsToMany(models.Student, { through: 'Transaction'})
  };

  Teacher.beforeCreate((instance,options)=>{
    const hash=bcrypt.hashSync(instance.password,saltRounds)
    instance.password=hash
  })

  return Teacher;
};