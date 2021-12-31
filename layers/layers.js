var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_1 = format_ADMINISTRASIDESA_AR_1.readFeatures(json_ADMINISTRASIDESA_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_1.addFeatures(features_ADMINISTRASIDESA_AR_1);
var lyr_ADMINISTRASIDESA_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_1, 
                style: style_ADMINISTRASIDESA_AR_1,
                interactive: false,
    title: 'ADMINISTRASIDESA_AR<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_0.png" /> Aan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_1.png" /> Akah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_2.png" /> Bakas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_3.png" /> Bangbang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_4.png" /> Banjarangkan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_5.png" /> Batukandik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_6.png" /> Batumadeg<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_7.png" /> Batununggul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_8.png" /> Bebalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_9.png" /> Besan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_10.png" /> Bungamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_11.png" /> Bungbungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_12.png" /> Dawan Kaler<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_13.png" /> Dawan Kelod<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_14.png" /> Gelgel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_15.png" /> Getakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_16.png" /> Gunaksa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_17.png" /> Jehem<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_18.png" /> Jumpai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_19.png" /> Jungutbatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_20.png" /> Kamasan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_21.png" /> Kampung Gegel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_22.png" /> Kampung Kusamba<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_23.png" /> Kampung Toyapakeh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_24.png" /> Klumpu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_25.png" /> Kusamba<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_26.png" /> Kutampi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_27.png" /> Kutampi Kaler<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_28.png" /> Lembongan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_29.png" /> Manduang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_30.png" /> Negari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_31.png" /> Nyalian<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_32.png" /> Nyanglan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_33.png" /> Paksebali<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_34.png" /> Ped<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_35.png" /> Pejukutan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_36.png" /> Pesinggahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_37.png" /> Pikat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_38.png" /> Sakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_39.png" /> Sampalan Kelod<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_40.png" /> Sampalan Tengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_41.png" /> Satra<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_42.png" /> Sekartaji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_43.png" /> Selat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_44.png" /> Selisihan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_45.png" /> Semarapura Kaja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_46.png" /> Semarapura Kangin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_47.png" /> Semarapura Kauh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_48.png" /> Semarapura Klod<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_49.png" /> Semarapura Klod Kangin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_50.png" /> Semarapura Tengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_51.png" /> Suana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_52.png" /> Sulang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_53.png" /> Takmung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_54.png" /> Tamanbali<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_55.png" /> Tangkas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_56.png" /> Tanglad<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_57.png" /> Tegak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_58.png" /> Tembuku<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_59.png" /> Tihingan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_60.png" /> Timuhun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_61.png" /> Tohpati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_62.png" /> Tojan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_63.png" /> Tulikup<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_64.png" /> Tusan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_65.png" /> Undisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_1_66.png" /> <br />'
        });
var format_SUNGAI_AR_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_2 = format_SUNGAI_AR_25K_2.readFeatures(json_SUNGAI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_2.addFeatures(features_SUNGAI_AR_25K_2);
var lyr_SUNGAI_AR_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_25K_2, 
                style: style_SUNGAI_AR_25K_2,
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_AR_25K_2.png" /> SUNGAI_AR_25K'
            });
var format_RUMAHSAKIT_PT_25K_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_3 = format_RUMAHSAKIT_PT_25K_3.readFeatures(json_RUMAHSAKIT_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_3.addFeatures(features_RUMAHSAKIT_PT_25K_3);
var lyr_RUMAHSAKIT_PT_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_25K_3, 
                style: style_RUMAHSAKIT_PT_25K_3,
                interactive: false,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_3.png" /> RUMAHSAKIT_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_4 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_4 = format_PENDIDIKAN_PT_25K_4.readFeatures(json_PENDIDIKAN_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_4.addFeatures(features_PENDIDIKAN_PT_25K_4);
var lyr_PENDIDIKAN_PT_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_25K_4, 
                style: style_PENDIDIKAN_PT_25K_4,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_4.png" /> PENDIDIKAN_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_5 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_5 = format_PEMERINTAHAN_PT_25K_5.readFeatures(json_PEMERINTAHAN_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_5.addFeatures(features_PEMERINTAHAN_PT_25K_5);
var lyr_PEMERINTAHAN_PT_25K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_25K_5, 
                style: style_PEMERINTAHAN_PT_25K_5,
                interactive: false,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_5.png" /> PEMERINTAHAN_PT_25K'
            });
var format_GARISRPANTAI_LN_25K_6 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_25K_6 = format_GARISRPANTAI_LN_25K_6.readFeatures(json_GARISRPANTAI_LN_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_25K_6.addFeatures(features_GARISRPANTAI_LN_25K_6);
var lyr_GARISRPANTAI_LN_25K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GARISRPANTAI_LN_25K_6, 
                style: style_GARISRPANTAI_LN_25K_6,
                interactive: false,
                title: '<img src="styles/legend/GARISRPANTAI_LN_25K_6.png" /> GARISRPANTAI_LN_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_1.setVisible(true);lyr_SUNGAI_AR_25K_2.setVisible(true);lyr_RUMAHSAKIT_PT_25K_3.setVisible(true);lyr_PENDIDIKAN_PT_25K_4.setVisible(true);lyr_PEMERINTAHAN_PT_25K_5.setVisible(true);lyr_GARISRPANTAI_LN_25K_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_1,lyr_SUNGAI_AR_25K_2,lyr_RUMAHSAKIT_PT_25K_3,lyr_PENDIDIKAN_PT_25K_4,lyr_PEMERINTAHAN_PT_25K_5,lyr_GARISRPANTAI_LN_25K_6];
lyr_ADMINISTRASIDESA_AR_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_PENDIDIKAN_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_GARISRPANTAI_LN_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': '', 'WADMKK': 'TextEdit', 'WIADKK': '', 'WADMPR': 'TextEdit', 'WIADPR': '', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_AR_25K_2.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_PENDIDIKAN_PT_25K_4.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_GARISRPANTAI_LN_25K_6.set('fieldImages', {'NAMOBJ': '', 'DTMVER': '', 'KARGPN': '', 'FCODE': '', 'KODGPN': '', 'TIPGPN': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_1.set('fieldLabels', {'NAMOBJ': 'header label', 'METADATA': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_PENDIDIKAN_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_GARISRPANTAI_LN_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_GARISRPANTAI_LN_25K_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});