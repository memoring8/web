const Visitor = (Sequelize, DataTypes) => {
    // Sequelize는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize

    const model = Sequelize.define(
        'visitor',
        {
            // create ~~ (id int / not null /  primary key / auto_increment)
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                // name varchar(10) / not null
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                // comment mediumtext
                type: DataTypes.TEXT('medium'),
            }
            
        },
        {
            timestamps: false, //true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: 'visitor',
            freezeTableName: true,
        }
    );
    return model;
}

module.exports = Visitor;