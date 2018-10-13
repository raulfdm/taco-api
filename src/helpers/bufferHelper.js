/*= =================== Inicialização ==================== */
const BufferHelper = function() {};

/* ====================== Métodos ====================== */

BufferHelper.prototype.toJson = function(buffer) {
  return JSON.parse(buffer);
};

/*= ====================== Export ======================= */
module.exports = new BufferHelper();
