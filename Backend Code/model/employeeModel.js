const mongoose = require('mongoose');

var employeeSchema= mongoose.Schema( {
    emailId: { type: String, required: true ,unique: [true, "email already present"]},
    password:{ type: String, required: true},
    
})

module.exports=mongoose.model('employeeData', employeeSchema);

