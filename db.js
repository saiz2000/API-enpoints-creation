const mongoose = require( 'mongoose' );

const dbConection = async () => {
    try {
        await mongoose.connect( 'mongodb+srv://saizcortez5:Na4XoOmxSsIFXRs4@cluster0.9y4ryrz.mongodb.net/users', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log( 'Base de datos inicializada correctamente' );
    }
    catch( error ) {
        console.error( error );
        throw new Error( 'Error al inicializar la base de datos' );
    }

}


module.exports = {
    dbConection
};