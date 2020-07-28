'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku jadi!", res)
};

//menampilkan semua data 
exports.tampilkaryawan = function (req, res) {
    connection.query('SELECT * FROM t_karyawan', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilhonda = function (req, res) {
    connection.query('SELECT * FROM t_honda', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilyamaha = function (req, res) {
    connection.query('SELECT * FROM t_yamaha', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsuzuki = function (req, res) {
    connection.query('SELECT * FROM t_suzuki', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilkawasaki = function (req, res) {
    connection.query('SELECT * FROM t_kawasaki', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

exports.tampilsupliier = function (req, res) {
    connection.query('SELECT * FROM t_suplier', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampilidkaryawan = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_karyawan WHERE id_karyawan = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidhonda = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_honda WHERE id_honda = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidyamaha = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_yamaha WHERE id_yamaha = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidsuzuki = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_suzuki WHERE id_suzuki = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidkawasaki = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_kawasaki WHERE id_kawasaki = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

exports.tampilidsuplier = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_suplier WHERE id_suplier = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};




//menambahkan data 
exports.tambahkaryawan = function (req, res) {
    var nik = req.body.nik;
    var nama_karyawan = req.body.nama_karyawan;
    var email_karyawan = req.body.email_karyawan;
    var jenis_kelamin = req.body.jenis_kelamin;
    var jabatan_karyawan = req.body.jabatan_karyawan;
    var alamat_karyawan = req.body.alamat_karyawan;
    var password = req.body.password;

    connection.query('INSERT INTO t_karyawan (nik,nama_karyawan,email_karyawan,jenis_kelamin,jabatan_karyawan,alamat_karyawan,password) VALUES(?,?,?,?,?,?,?)',
        [nik, nama_karyawan ,email_karyawan,  jenis_kelamin, jabatan_karyawan, alamat_karyawan ,password],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

exports.tambahhonda = function (req, res) {
    var kode_honda = req.body.kode_honda;
    var nama_honda = req.body.nama_honda;
    var jumlah_honda = req.body.jumlah_honda;
    var harga_honda = req.body.harga_honda;

    connection.query('INSERT INTO t_honda (kode_honda,nama_honda,jumlah_honda,harga_honda) VALUES(?,?,?,?)',
        [kode_honda,nama_honda, jumlah_honda, harga_honda],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

exports.tambahyamaha = function (req, res) {
    var kode_yamaha = req.body.kode_yamaha;
    var nama_yamaha = req.body.nama_yamaha;
    var jumlah_yamaha = req.body.jumlah_yamaha;
    var harga_yamaha = req.body.harga_yamaha;

    connection.query('INSERT INTO t_yamaha (kode_yamaha,nama_yamaha,jumlah_yamaha,harga_yamaha) VALUES(?,?,?,?)',
        [kode_yamaha,nama_yamaha, jumlah_yamaha, harga_yamaha],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

exports.tambahkawasaki = function (req, res) {
    var kode_kawasaki = req.body.kode_kawasaki;
    var nama_kawasaki = req.body.nama_kawasaki;
    var jumlah_kawasaki = req.body.jumlah_kawasaki;
    var harga_kawasaki = req.body.harga_kawasaki;

    connection.query('INSERT INTO t_kawasaki (kode_kawasaki, nama_kawasaki,jumlah_kawasaki,Harga_kawasaki) VALUES(?,?,?,?)',
        [kode_kawasaki, nama_kawasaki, jumlah_kawasaki, harga_kawasaki],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

exports.tambahsuzuki = function (req, res) {
    var kode_suzuki = req.body.kode_suzuki;
    var nama_suzuki = req.body.nama_suzuki;
    var jumlah_suzuki = req.body.jumlah_suzuki;
    var harga_suzuki = req.body.harga_suzuki;

    connection.query('INSERT INTO t_suzuki (kode_suzuki, nama_suzuki, jumlah_suzuki, harga_suzuki) VALUES(?,?,?,?)',
        [kode_suzuki, nama_suzuki, jumlah_suzuki, harga_suzuki],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

exports.tambahsuplier = function (req, res) {
    var kode_suplier = req.body.kode_suplier;
    var nama_suplier = req.body.nama_suplier;
    var alamat_suplier = req.body.alamat_suplier;
    var no_tlp = req.body.no_tlp;

    connection.query('INSERT INTO t_suplier (kode_suplier, nama_suplier, alamat_suplier, no_tlp) VALUES(?,?,?,?)',
        [kode_suplier, nama_suplier, alamat_suplier, no_tlp],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Berhasil Ditambahkan!", res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahkaryawan = function (req, res) {
    var id = req.body.id_karyawan;
    var nik = req.body.nik;
    var nama_karyawan = req.body.nama_karyawan;
    var email_karyawan = req.body.email_karyawan;
    var jenis_kelamin = req.body.jenis_kelamin;
    var jabatan_karyawan = req.body.jabatan_karyawan;
    var alamat_karyawan = req.body.alamat_karyawan;
    var password = req.body.password;

    connection.query('UPDATE t_karyawan SET nik=?, nama_karyawan=?, email_karyawan=?, jenis_kelamin=? , jabatan_karyawan=?, alamat_karyawan=?, password=? WHERE id_karyawan=?', [nik, nama_karyawan,email_karyawan, jenis_kelamin, jabatan_karyawan, alamat_karyawan,password, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Ubah Data Sukses!", res)
            }
        });
}

exports.ubahhonda = function (req, res) {
    var id = req.body.id_honda;
    var kode_honda = req.body.kode_honda;
    var nama_honda = req.body.nama_honda;
    var jumlah_honda = req.body.jumlah_honda;
    var harga_honda = req.body.harga_honda;

    connection.query('UPDATE t_honda SET kode_honda=?, nama_honda=?, jumlah_honda=? , harga_honda=? WHERE id_honda=?', [kode_honda,nama_honda,jumlah_honda,harga_honda, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Ubah Data Sukses!", res)
            }
        });
}

exports.ubahyamaha = function (req, res) {
    var id = req.body.id_yamaha;
    var kode_yamaha = req.body.kode_yamaha;
    var nama_yamaha = req.body.nama_yamaha;
    var jumlah_yamaha = req.body.jumlah_yamaha;
    var harga_yamaha = req.body.harga_yamaha;

    connection.query('UPDATE t_yamaha SET kode_yamaha=?, nama_yamaha=?, jumlah_yamaha=? , harga_yamaha=? WHERE id_yamaha=?', [kode_yamaha,nama_yamaha,jumlah_yamaha,harga_yamaha, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Ubah Data Sukses!", res)
            }
        });
}

exports.ubahkawasaki = function (req, res) {
    var id = req.body.id_kawasaki;
    var kode_kawasaki = req.body.kode_kawasaki;
    var nama_kawasaki = req.body.nama_kawasaki;
    var jumlah_kawasaki= req.body.jumlah_kawasaki;
    var harga_kawasaki = req.body.harga_kawasaki;

    connection.query('UPDATE t_kawasaki SET kode_kawasaki=?, nama_kawasaki=?, jumlah_kawasaki=? , harga_kawasaki=? WHERE id_kawasaki=?', [kode_kawasaki,nama_kawasaki,jumlah_kawasaki,harga_kawasaki, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Ubah Data Sukses!", res)
            }
        });
}

exports.ubahsuzuki = function (req, res) {
    var id = req.body.id_suzuki;
    var nama_suzuki = req.body.nama_suzuki;
    var kode_suzuki = req.body.kode_suzuki;
    var jumlah_suzuki = req.body.jumlah_suzuki;
    var harga_suzuki = req.body.harga_suzuki;

    connection.query('UPDATE t_suzuki SET nama_suzuki=?, kode_suzuki=?, jumlah_suzuki=? , harga_suzuki=? WHERE id_suzuki=?', [nama_suzuki,kode_suzuki,jumlah_suzuki,harga_suzuki, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}

exports.ubahsuplier = function (req, res) {
    var id = req.body.id_suplier;
    var kode_suplier = req.body.kode_suplier;
    var nama_suplier = req.body.nama_suplier;
    var alamat_suplier = req.body.alamat_suplier;
    var no_tlp = req.body.no_tlp;

    connection.query('UPDATE t_suplier SET kode_suplier=?, nama_suplier=?, alamat_suplier=? , no_tlp=? WHERE id_suplier=?', [kode_suplier, nama_suplier,alamat_suplier,no_tlp, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Ubah Data Sukses!", res)
            }
        });
}

//Menghapus data berdasarkan id
exports.hapuskaryawan = function (req, res) {
    var id = req.body.id_karyawan;
    connection.query('DELETE FROM t_karyawan WHERE id_karyawan=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}

exports.hapushonda = function (req, res) {
    var id = req.body.id_honda;
    connection.query('DELETE FROM t_honda WHERE id_honda=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}

exports.hapusyamaha = function (req, res) {
    var id = req.body.id_oli;
    connection.query('DELETE FROM t_yamaha WHERE id_yamaha=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}

exports.hapuskawasaki = function (req, res) {
    var id = req.body.id_kawasaki;
    connection.query('DELETE FROM t_kawasaki WHERE id_kawasaki=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}

exports.hapussuzuki = function (req, res) {
    var id = req.body.id_suzuki;
    connection.query('DELETE FROM t_suzuki WHERE id_suzuki=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}

exports.hapussuplier = function (req, res) {
    var id = req.body.id_suplier;
    connection.query('DELETE FROM t_suplier WHERE id_suplier=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("DATA TERHAPUS !!!", res)
            }
        });
}





