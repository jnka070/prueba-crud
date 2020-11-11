const logincontroller = {};

logincontroller.paginainicio = function(req, res, next) {
    res.render('login');
}
logincontroller.listar = function(req, res, next) {
    req.getConnection((err, conn) => {
        if (err) {
            next(err);
        } else {
            conn.query('select * from login', (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.render('registrousers', {
                        dato: result
                    });

                }
            });
        }
    });

}

logincontroller.guardarusuario = function(req, res, next) {
    const data = req.body;
    // res.send(data);
    if (data != {}) {
        req.getConnection((err, conn) => {
            if (err) {
                next(err);
            } else {
                conn.query('INSERT INTO login SET ?', [data], (err, result) => {
                    res.redirect('/registraruser');

                });
            }
        });
    } else {
        alert('llenar todos los campos')
    }

}

logincontroller.ediUser = function(req, res, next) {
    const dat = req.params.id;
    req.getConnection(function(err, conn) {
        if (err) {
            console.log(err);
        }
        conn.query('SELECT * FROM login WHERE id = ?', [dat], function(err, result) {
            if (err) {
                next(err);
            }
            res.render('actualizarUser', {
                data: result[0]
            });
        });
    });
}
logincontroller.actualizarUser = function(req, res, next) {
    const { id } = req.params;
    const nuevodato = req.body;
    req.getConnection(function(err, conn) {
        conn.query('update login set ? where id = ?', [nuevodato, id], function(err, result) {
            if (result) {
                res.redirect('/registraruser');

            }
            next(); //llamar a next para que cause Error [ERR_HTTP_HEADERS_SENT]:
        });
    });

}

logincontroller.borrar = function(req, res, next) {
    const dat = req.params.id;
    req.getConnection(function(err, conn) {
        conn.query('delete from login where id=?', [dat], function(err, result) {
            if (err) {
                next(err);
            }
            res.redirect('/registraruser');
        });

    })

}
logincontroller.logearse = function(req, res, next) {
    const dato1 = req.body.id;
    const dato2 = req.body.id;
    req.getConnection((err, conn) => {
        if (err) {
            next(err);
        } else {
            conn.query('select * from login where usuario = ? AND contraseña = ?', [dato1, dato2], (err, result) => {
                if (err) {
                    next(err);
                } else {
                    if (result) {
                        res.render('registro');
                    }

                }
            });
        }
    });

}
module.exports = logincontroller;