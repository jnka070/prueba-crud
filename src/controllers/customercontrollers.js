
const primerobjeto = {};

primerobjeto.list = function (req, res) {
    req.getConnection(function (err, conn) {
        conn.query('select * from usuario', function (err, registros) {
            if (err) {
                res.json(command);
            }
            console.log(registros);
            res.render('registro', {
                dato: registros
            });
        });

    });
};

primerobjeto.save = function (req, res) {
    const dat = req.body;//aqui tengo todos los datos que viene del formulario
    req.getConnection(function (err, conn) {
        conn.query('INSERT INTO usuario SET ?', [dat], function (err, registers) {

            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    });
}
primerobjeto.edit = function (req, res) {
    const dat = req.params.id;
    req.getConnection(function (err, conn) {
        if (err) {
            console.log(err);
        }
        conn.query('SELECT * FROM usuario WHERE id = ?', [dat], function (err, result) {
            if (err) {
                console.log(err);
            }
            res.render('actualizar', {
                data: result[0]
            });
        });
    });
}
primerobjeto.update = function (req, res, next) {
    const { id } = req.params;
    const nuevodato = req.body;
    req.getConnection(function (err, conn) {
        conn.query('update usuario set ? where id = ?', [nuevodato, id], function (err, result) {
            if (result) {
                res.redirect('/');

            }
            next();//llamar a next para que cause Error [ERR_HTTP_HEADERS_SENT]:
        });
    });

}
primerobjeto.delete = function (req, res) {
    const dat = req.params.id;
    req.getConnection(function (err, conn) {
        conn.query('delete from usuario where id=?', [dat], function (err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
        
    })
}
module.exports = primerobjeto;
