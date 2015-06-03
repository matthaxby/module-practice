module.exports = {
  removeBadPeople: function(peeps) {
    peeps = peeps.filter(function (val) {
      return val.name;
    });
    return peeps;
  }
};
