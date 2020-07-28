'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilkaryawan')
        .get(jsonku.tampilkaryawan);

    app.route('/tampilhonda')
        .get(jsonku.tampilhonda);

    app.route('/tampilyamaha')
        .get(jsonku.tampilyamaha);

    app.route('/tampilkawasaki')
        .get(jsonku.tampilkawasaki);

    app.route('/tampilsuzuki')
        .get(jsonku.tampilsuzuki);

    app.route('/tampilsuplier')
        .get(jsonku.tampilsupliier);

    app.route('/tampilkaryawan/:id')
        .get(jsonku.tampilidkaryawan);

    app.route('/tampilhonda/:id')
        .get(jsonku.tampilidhonda);

    app.route('/tampilyamaha/:id')
        .get(jsonku.tampilidyamaha);

    app.route('/tampilkawasaki/:id')
        .get(jsonku.tampilidkawasaki);

    app.route('/tampilsuzuki/:id')
        .get(jsonku.tampilidsuzuki);

    app.route('/tampilsuplier/:id')
        .get(jsonku.tampilidsuplier);

    app.route('/tambahkaryawan')
        .post(jsonku.tambahkaryawan);

    app.route('/tambahhonda')
        .post(jsonku.tambahhonda);

    app.route('/tambahyamaha')
        .post(jsonku.tambahyamaha);

    app.route('/tambahkawasaki')
        .post(jsonku.tambahkawasaki);

    app.route('/tambahsuzuki')
        .post(jsonku.tambahsuzuki);

    app.route('/tambahsuplier')
        .post(jsonku.tambahsuplier);

    app.route('/ubahkaryawan')
        .put(jsonku.ubahkaryawan);

    app.route('/ubahhonda')
        .put(jsonku.ubahhonda);

    app.route('/ubahyamaha')
        .put(jsonku.ubahyamaha);

    app.route('/ubahsuzuki')
        .put(jsonku.ubahsuzuki);

    app.route('/ubahkawasaki')
        .put(jsonku.ubahkawasaki);

    app.route('/ubahsuplier')
        .put(jsonku.ubahsuplier);

    app.route('/hapuskaryawan')
        .delete(jsonku.hapuskaryawan);

    app.route('/hapushonda')
        .delete(jsonku.hapushonda);

    app.route('/hapusyamaha')
        .delete(jsonku.hapusyamaha);

    app.route('/hapuskawasaki')
        .delete(jsonku.hapuskawasaki);

    app.route('/hapussuzuki')
        .delete(jsonku.hapussuzuki);

    app.route('/hapussuplier')
        .delete(jsonku.hapussuplier);

}