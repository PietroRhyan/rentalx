"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecifications1667774583845 = void 0;
var _typeorm = require("typeorm");
class CreateSpecifications1667774583845 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'specifications',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'description',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }
  async down(queryRunner) {
    queryRunner.dropTable('specifications');
  }
}
exports.CreateSpecifications1667774583845 = CreateSpecifications1667774583845;