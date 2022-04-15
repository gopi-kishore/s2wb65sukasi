var Engine = require('../models/engine'); 
 
// List of all Engines 
exports.engine_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine list'); 
}; 
 
// for a specific Engine. 
exports.engine_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.engine_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Engine(); 
    document.turboengine_name = req.body.turboengine_name; 
    document.size = req.body.size; 
    document.turboengine_cost = req.body.turboengine_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Engine delete form on DELETE. 
exports.engine_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id); 
}; 
 
// Handle Engine update form on PUT. 
exports.engine_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine update PUT' + req.params.id); 
}; 

// List of all Engine 
exports.engine_list = async function(req, res) { 
    try{ 
        theEngine = await Engine.find(); 
        res.send(theEngine); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.engine_view_all_Page = async function(req, res) { 
    try{ 
        theEngine = await Engine.find(); 
        res.render('engine', { title: 'Engine Search Results', results: theEngine }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 