var Engine = require('../models/engine'); 
 
// List of all Engines 
exports.engine_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine list'); 
}; 
 
// for a specific Engine. 
exports.engine_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine detail: ' + req.params.id); 
}; 
 
// Handle Engine create on POST. 
exports.engine_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine create POST'); 
}; 
 
// Handle Engine delete form on DELETE. 
exports.engine_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id); 
}; 
 
// Handle Engine update form on PUT. 
exports.engine_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine update PUT' + req.params.id); 
}; 