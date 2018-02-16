
/*
 * GET groups page.
 */

var data = require('../data.json');

exports.view = function(req, res) {

  var groupid = String(req.params.groupid);

  var groupdata = data.groups[groupid];

  groupdata["memberinfo"] = {}

  groupdata.members.forEach(function(element) {
    groupdata.memberinfo[element] = (data.friends[element]);
  });

  groupdata["pages"] = data.pages;

  console.log(groupdata);

  res.render('groupInfo', groupdata);
};