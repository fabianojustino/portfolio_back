module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('SoftSkills', {
    id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
   },
    desc: DataTypes.STRING,   
  },
  {
    timestamps: false,
    tableName: 'SoftSkills',
  }); 
 

  return Skill;
};