'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = (sequelize, DataTypes) => {

  const Sequelize=sequelize.Sequelize
  const Model=Sequelize.Model

  class Student extends Model{}

  Student.init({
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
    jenjangsekolah: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Jenjang Sekolah cannot be empty"
        },
      }
    },
    telp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Telp cannot be empty"
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Address cannot be empty"
        },
      }
    },
  }, {sequelize});

  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsToMany(models.Teacher, { through: 'Transaction'})
  };

  Student.beforeCreate((instance,options)=>{
    const hash=bcrypt.hashSync(instance.password,saltRounds)
    instance.password=hash
  })

  
  return Student;
};