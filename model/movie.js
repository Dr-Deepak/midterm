var mongoose = require('mongoose');
//create a movie schema
var movieSchema = new mongoose.Schema(
                                        {
                                        title: {type :String, required: 'title cannot be blank' },

                                        studio : {type : String, required:'Studio cannot be blank'},

                                        year : {type : Number, required:'Year cannot be blank'}
                                      }
                                    );
//make schema public
module.exports = mongoose.model('movie', movieSchema);
