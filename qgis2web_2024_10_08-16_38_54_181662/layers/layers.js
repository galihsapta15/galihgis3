var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shp_mlg_1 = new ol.format.GeoJSON();
var features_shp_mlg_1 = format_shp_mlg_1.readFeatures(json_shp_mlg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_mlg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_mlg_1.addFeatures(features_shp_mlg_1);
var lyr_shp_mlg_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_mlg_1, 
                style: style_shp_mlg_1,
                popuplayertitle: "shp_mlg",
                interactive: false,
                title: '<img src="styles/legend/shp_mlg_1.png" /> shp_mlg'
            });
var format_jalan_malang_2 = new ol.format.GeoJSON();
var features_jalan_malang_2 = format_jalan_malang_2.readFeatures(json_jalan_malang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_malang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_malang_2.addFeatures(features_jalan_malang_2);
var lyr_jalan_malang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_malang_2, 
                style: style_jalan_malang_2,
                popuplayertitle: "jalan_malang",
                interactive: false,
                title: '<img src="styles/legend/jalan_malang_2.png" /> jalan_malang'
            });
var format_bts_kmatan_3 = new ol.format.GeoJSON();
var features_bts_kmatan_3 = format_bts_kmatan_3.readFeatures(json_bts_kmatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bts_kmatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bts_kmatan_3.addFeatures(features_bts_kmatan_3);
var lyr_bts_kmatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bts_kmatan_3, 
                style: style_bts_kmatan_3,
                popuplayertitle: "bts_kmatan",
                interactive: false,
                title: '<img src="styles/legend/bts_kmatan_3.png" /> bts_kmatan'
            });
var format_point_mlg_4 = new ol.format.GeoJSON();
var features_point_mlg_4 = format_point_mlg_4.readFeatures(json_point_mlg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_mlg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_mlg_4.addFeatures(features_point_mlg_4);
var lyr_point_mlg_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_mlg_4, 
                style: style_point_mlg_4,
                popuplayertitle: "point_mlg",
                interactive: true,
                title: '<img src="styles/legend/point_mlg_4.png" /> point_mlg'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_shp_mlg_1.setVisible(true);lyr_jalan_malang_2.setVisible(true);lyr_bts_kmatan_3.setVisible(true);lyr_point_mlg_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_shp_mlg_1,lyr_jalan_malang_2,lyr_bts_kmatan_3,lyr_point_mlg_4];
lyr_shp_mlg_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', });
lyr_jalan_malang_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_bts_kmatan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_point_mlg_4.set('fieldAliases', {'x': 'x', 'y': 'y', 'Keterangan': 'Keterangan', 'Nama_Rumah': 'Nama_Rumah', 'Jalan': 'Jalan', 'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Kode_Pos': 'Kode_Pos', });
lyr_shp_mlg_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', });
lyr_jalan_malang_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_bts_kmatan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Nilai': 'TextEdit', 'bobot_kp': 'TextEdit', 'tb_kp': 'TextEdit', 'jumlah_SM': 'TextEdit', 'nilai_sm': 'TextEdit', 'bobot_sm': 'TextEdit', 'tb_sm': 'TextEdit', 'total': 'TextEdit', 'kelas': 'TextEdit', 'NAMA1': 'TextEdit', 'ID': 'TextEdit', 'Lembar': 'TextEdit', 'Skala': 'TextEdit', 'HEHEHEHE': 'TextEdit', 'FID_1': 'TextEdit', 'LUASAR': 'TextEdit', 'JMLHPEN': 'TextEdit', 'KPDTNPEN': 'TextEdit', });
lyr_point_mlg_4.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'Keterangan': 'TextEdit', 'Nama_Rumah': 'TextEdit', 'Jalan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Kode_Pos': 'TextEdit', });
lyr_shp_mlg_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', });
lyr_jalan_malang_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_bts_kmatan_3.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_point_mlg_4.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'Keterangan': 'header label - visible with data', 'Nama_Rumah': 'header label - visible with data', 'Jalan': 'header label - visible with data', 'Kecamatan': 'header label - visible with data', 'Kota': 'header label - visible with data', 'Provinsi': 'header label - visible with data', 'Kode_Pos': 'header label - visible with data', });
lyr_point_mlg_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});