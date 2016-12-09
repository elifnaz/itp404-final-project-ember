module.exports = {
  description: 'Add bower dependencies for typed.js library',

  normalizeEntityName: function() {

  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'typed.js', target: '^1.1.1' }
    ]);
  }
};
