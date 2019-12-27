import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.DECIMAL(10, 2),
        height: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Registration, { foreignKey: 'student_id' });
    this.hasMany(models.HelpOrder, { foreignKey: 'student_id' });
    this.hasMany(models.Checkin, { foreignKey: 'student_id' });
  }
}

export default Student;
