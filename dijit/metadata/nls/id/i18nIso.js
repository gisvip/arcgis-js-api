// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"ISO 19115 (Data)",description:""},service:{caption:"ISO 19119 (Layanan)",description:""},gmi:{caption:"ISO 19115-2 (Data Citra dan Grid)",description:""}},general:{reference:"Referensi"},sections:{metadata:"Metadata",identification:"Identifikasi",distribution:"Distribusi",quality:"Kualitas",acquisition:"Akuisisi"},metadataSection:{identifier:"Pengidentifikasi",contact:"Kontak",date:"Tanggal",standard:"Standar",reference:"Referensi"},identificationSection:{citation:"Sitasi",description:"Deskripsi",contact:"Kontak",thumbnail:"Gambar mini",keywords:"Kata kunci",constraints:"Batasan",resource:"Sumber Daya",resourceTab:{representation:"Representasi",language:"Bahasa",classification:"Klasifikasi",extent:"Jangkauan"},serviceResourceTab:{serviceType:"Tipe Layanan",extent:"Jangkauan",couplingType:"Tipe Gabungan",operation:"Operasi",operatesOn:"Berjalan Di"}},distributionSection:{},qualitySection:{scope:"Cakupan",conformance:"Kepatuhan",lineage:"Garis Turunan"},acquisitionSection:{requirement:"Persyaratan",objective:"Objektif",instrument:"Instrumen",plan:"Rencana",operation:"Operasi",platform:"Platform",environment:"Lingkungan"},AbstractMD_Identification:{sAbstract:"Abstrak",purpose:"Tujuan",credit:"Kredit",pointOfContact:"Titik Kontak",resourceMaintenance:"Pemeliharaan",graphicOverview:"Ikhtisar Grafis",descriptiveKeywords:"Koleksi Kata Kunci",resourceConstraints:"Batasan"},CI_Address:{deliveryPoint:"Titik Antar",city:"Kota",administrativeArea:"Daerah Administratif",postalCode:"Kode Pos",country:"Negara",electronicMailAddress:"Alamat Email"},CI_Citation:{title:"Judul",alternateTitle:"Judul Alternatif",identifier:"Pengidentifikasi Sumber Daya Unik",resource:{title:"Judul Sumber Daya",date:"Tanggal Sumber Daya"},specification:{title:"Judul Spesifikasi",date:"Tanggal Spesifikasi"}},CI_Contact:{phone:"Telepon",address:"Alamat",onlineResource:"Sumber Daya Online",hoursOfService:"Jam Layanan",contactInstructions:"Instruksi Kontak"},CI_Date:{date:"Tanggal",dateType:"Tipe Data"},CI_DateTypeCode:{caption:"Tipe Data",creation:"Tanggal Pembuatan",publication:"Tanggal Publikasi",revision:"Tanggal Revisi"},CI_OnLineFunctionCode:{caption:"Fungsi",download:"Unduhan",information:"Informasi",offlineAccess:"Akses Offline",order:"Urutkan",search:"Cari"},CI_OnlineResource:{caption:"Sumber Daya Online",linkage:"URL",protocol:"Protokol",applicationProfile:"Profil Aplikasi",name:"Nama",description:"Deskripsi",sFunction:"Fungsi"},CI_ResponsibleParty:{caption:"Titik Kontak",individualName:"Nama Individual",organisationName:"Nama Organisasi",positionName:"Nama Posisi",contactInfo:"Info Kontak",role:"Peran"},CI_RoleCode:{caption:"Peran",resourceProvider:"Penyedia Sumber Daya",custodian:"Wali",owner:"Pemilik",user:"Pengguna",distributor:"Distributor",originator:"Orisinator",pointOfContact:"Titik Kontak",principalInvestigator:"Peneliti Utama",processor:"Prosesor",publisher:"Penerbit",author:"Penulis"},CI_Telephone:{voice:"Suara",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Layanan Web"},DQ_ConformanceResult:{caption:"Hasil Kepatuhan",explanation:"Penjelasan",degree:{caption:"Derajat",validationPerformed:"Validasi yang Dilakukan",conformant:"Kepatuhan",nonConformant:"Non Kepatuhan"}},DQ_DataQuality:{report:"Laporan"},DQ_Scope:{level:"Cakupan (infomasi yang berkualitas yang berlaku)",levelDescription:"Deskripsi Level"},EX_Extent:{caption:"Jangkauan",description:"Deskripsi",geographicElement:"Jangkauan Spasial",temporalElement:"Jangkauan Temporal",verticalElement:"Jangkauan Vertikal"},EX_GeographicBoundingBox:{westBoundLongitude:"Garis Bujur Barat",eastBoundLongitude:"Garis Bujur Timur",southBoundLatitude:"Garis Lintang Selatan",northBoundLatitude:"Garis Lintang Utara"},EX_GeographicDescription:{caption:"Deskripsi Geografis"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Tanggal Mulai",endPosition:"Tanggal Akhir"}},EX_VerticalExtent:{minimumValue:"Nilai Minimal",maximumValue:"Nilai Maksimal",verticalCRS:"CRS Vertikal"},Length:{caption:"Panjang",uom:"Unit Ukur",km:"Kilometer",m:"Meter",mi:"Mil",ft:"Kaki"},LI_Lineage:{statement:"Pernyataan Garis Turunan"},MD_BrowseGraphic:{fileName:"Telusuri URL Grafis",fileDescription:"Telusuri Keterangan Grafis",fileType:"Telusuri Tipe Grafis"},MD_ClassificationCode:{unclassified:"Tidak diklasifikasikan",restricted:"Terbatas",confidential:"Rahasia",secret:"Rahasia",topSecret:"Sangat Rahasia"},MD_Constraints:{caption:"Batasan Pemakaian",useLimitation:"Batasan Penggunaan"},MD_DataIdentification:{spatialRepresentationType:"Tipe Representasi Spasial",spatialResolution:"Resolusi Spasial",language:"Bahasa Sumber Daya",supplementalInformation:"Suplemen"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Format Distribusi",transferOptions:"Opsi Transfer"},MD_Format:{name:"Nama Format",version:"Versi Format"},MD_Identifier:{caption:"URI",identifierCaption:"Pengidentifikasi",code:"Kode"},MD_Keywords:{delimitedCaption:"Kata kunci",thesaurusName:"Tata Bahasa Terkait"},MD_KeywordTypeCode:{caption:"Tipe Kata Kunci",discipline:"Disiplin",place:"Tempat",stratum:"Stratum",temporal:"Temporal",theme:"Tema"},MD_LegalConstraints:{caption:"Batasan Hukum",accessConstraints:"Batasan Akses",useConstraints:"Gunakan Batasan",otherConstraints:"Batasan Lainnya"},MD_MaintenanceFrequencyCode:{caption:"Frekuensi",continual:"Berkesinambungan",daily:"Harian",weekly:"Mingguan",fortnightly:"Per dua minggu",monthly:"Bulanan",quarterly:"Triwulanan",biannually:"Per dua tahun",annually:"Tahunan",asNeeded:"Apabila Diperlukan",irregular:"Tidak reguler",notPlanned:"Tidak Direncanakan",unknown:"Tidak diketahui"},MD_Metadata:{caption:"Metadata",fileIdentifier:"Pengidentifikasi File",language:"Bahasa Metadata",hierarchyLevel:"Level Hierarki",hierarchyLevelName:"Nama Level Hierarki",contact:"Kontak Metadata",dateStamp:"Tanggal Metadata",metadataStandardName:"Nama Standar Metadata",metadataStandardVersion:"Versi Standar Metadata",referenceSystemInfo:"Sistem Referensi",identificationInfo:"Identifikasi",distributionInfo:"Distribusi",dataQualityInfo:"Kualitas"},MD_ProgressCode:{caption:"Kode Progres",completed:"Selesai",historicalArchive:"Arsip Historis",obsolete:"Kuno",onGoing:"Berlangsung",planned:"Direncanakan",required:"Diperlukan",underDevelopment:"Masih Dikembangkan"},MD_RepresentativeFraction:{denominator:"Bilangan Penyebut"},MD_Resolution:{equivalentScale:"Skala Ekuivalen",distance:"Jarak"},MD_RestrictionCode:{copyright:"Hak cipta",patent:"Paten",patentPending:"Paten Tertunda",trademark:"Merek Dagang",license:"Lisensi",intellectualPropertyRights:"Hak Kekayaan Intelektual",restricted:"Terbatas",otherRestrictions:"Larangan Lainnya"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Tipe atribut",collectionHardware:"Hardware Koleksi",collectionSession:"Sesi Koleksi",dataset:"Dataset",series:"Rangkaian",nonGeographicDataset:"Dataset non geografis",dimensionGroup:"Grup Dimensi",feature:"Fitur",featureType:"Tipe fitur",propertyType:"Tipe Properti",fieldSession:"Sesi kolom",software:"Perangkat Lunak",service:"Layanan",model:"Model",tile:"Tile"},MD_ScopeDescription:{attributes:"Atribut",features:"Fitur",featureInstances:"Contoh Fitur",attributeInstances:"Contoh Atribut",dataset:"Dataset",other:"Lainnya"},MD_SecurityConstraints:{caption:"Batasan Keamanan",classification:"Klasifikasi",userNote:"Catatan Pengguna",classificationSystem:"Sistem Klasifikasi",handlingDescription:"Deskripsi Penanganan"},MD_SpatialRepresentationTypeCode:{caption:"Tipe Representasi Spasial",vector:"Vektor",grid:"Grid",textTable:"Tabel Teks",tin:"TIN",stereoModel:"Model Stereo",video:"Video"},MD_TopicCategoryCode:{caption:"Kategori Topik",boundaries:"Batas Administratif dan Politis",farming:"Agrikultur dan Pertanian",climatologyMeteorologyAtmosphere:"Atmosfir dan Iklim",biota:"Biologi dan Ekologi",economy:"Bisnis dan Ekonomi",planningCadastre:"Kadastral",society:"Kebudayaan, Sosial, dan Demografi",elevation:"Elevasi dan Produk Turunan",environment:"Lingkungan dan Konservasi",structure:"Fasilitas dan Struktur",geoscientificInformation:"Geologis dan Geofisika",health:"Kesehatan dan Penyakit Manusia",imageryBaseMapsEarthCover:"Pencitraan dan Peta Dasar",inlandWaters:"Sumber daya Perairan Darat",location:"Lokasi dan Jaringan Geodesi",intelligenceMilitary:"Militer",oceans:"Samudera dan Daerah Muara",transportation:"Jaringan Transportasi",utilitiesCommunication:"Utilitas dan Komunikasi"},MI_ContextCode:{caption:"Konteks",acquisition:"Akuisisi",pass:"Pass",wayPoint:"Titik jalan"},MI_EnvironmentalRecord:{caption:"Kondisi Lingkungan",averageAirTemperature:"Suhu Udara Rata-Rata",maxRelativeHumidity:"Kelembapan Relatif Maksimal",maxAltitude:"Ketinggian Maksimal",meterologicalConditions:"Kondisi Meteorologis"},MI_Event:{identifier:"Pengidentifikasi Peristiwa",time:"Waktu",expectedObjectiveReference:"Objektif yang Diharapkan (Pengidentifikasi Objektif)",relatedSensorReference:"Sensor Terkait (Pengidentifikasi Instrumen)",relatedPassReference:"Pass Terkait (Pengidentifikasi Platform Pass)"},MI_GeometryTypeCode:{point:"Titik",linear:"Linear",areal:"Area",strip:"Strip"},MI_Instrument:{citation:"Kutipan",identifier:"Pengidentifikasi Instrumen",sType:"Tipe Instrumen",description:"Deskripsi Instrumen",mountedOn:"Dipasang Pada",mountedOnPlatformReference:"Dipasang Pada (Pengidentifikasi Platform)"},MI_Metadata:{acquisitionInformation:"Akuisisi"},MI_Objective:{caption:"Objektif",identifier:"Pengidentifikasi Objektif",priority:"Prioritas Target",sFunction:"Fungsi Objektif",extent:"Jangkauan",pass:"Platform Pass",sensingInstrumentReference:"Instrumen Penginderaan (Pengidentifikasi Instrumen)",objectiveOccurrence:"Acara",sections:{identification:"Identifikasi",extent:"Jangkauan",pass:"Pass",sensingInstrument:"Instrumen Penginderaan",objectiveOccurrence:"Acara"}},MI_ObjectiveTypeCode:{caption:"Tipe (Teknik Pengumpulan untuk Objektif)",instantaneousCollection:"Pengumpulan Instan",persistentView:"Tampilan Persisten",survey:"Survei"},MI_Operation:{caption:"Operasi",description:"Deskripsi Operasi",citation:"Sitasi Operasi",identifier:"Pengidentifikasi Operasi",status:"Status Operasi",objectiveReference:"Objektif Terkait (Pengidentifikasi Objektif)",planReference:"Rencana Terkait (Pengidentifikasi Rencana)",significantEventReference:"Peristiwa Terkait (Pengidentifikasi Peristiwa)",platformReference:"Platform Terkait (Pengidentifikasi Platform)",sections:{identification:"Identifikasi",related:"Terkait"}},MI_OperationTypeCode:{caption:"Tipe Operasi",real:"Asli",simulated:"Disimulasikan",synthesized:"Sintesis"},MI_Plan:{sType:"Sampling Geometri untuk Pengumpulan Data",status:"Status Rencana",citation:"Sitasi Koleksi Permintaan Kewenangan",satisfiedRequirementReference:"Persyaratan yang Dipenuhi (Pengidentifikasi Persyaratan)",operationReference:"Operasi Terkait (Pengidentifikasi Operasi)"},MI_Platform:{citation:"Sitasi Platform",identifier:"Pengidentifikasi Platform",description:"Deskripsi Platform yang Mendukung Instrumen",sponsor:"Organisasi Sponsor untuk Platform",instrument:"Instrumen yang terpasang pada platform",instrumentReference:"Pengidentifikasi Instrumen",sections:{identification:"Identifikasi",sponsor:"Sponsor",instruments:"Instrumen"}},MI_PlatformPass:{identifier:"Pengidentifikasi Platform Pass",extent:"Jangkauan Platform Pass",relatedEventReference:"Peristiwa Terkait (Pengidentifikasi Peristiwa)"},MI_PriorityCode:{critical:"Kritis",highImportance:"Tingkat Kepentingan Tinggi",mediumImportance:"Tingkat Kepentingan Menengah",lowImportance:"Tingkat Kepentingan Rendah"},MI_RequestedDate:{requestedDateOfCollection:"Tanggal Yang Diminta Untuk Pengumpulan",latestAcceptableDate:"Tanggal Terakhir Yang Diterima"},MI_Requirement:{caption:"Persyaratan",citation:"Sitasi Material Pedoman Persyaratan",identifier:"Pengidentifikasi Persyaratan",requestor:"Pemohon Persyaratan",recipient:"Penerima Hasil Persyaratan",priority:"Prioritas Persyaratan",requestedDate:"Tanggal yang Diminta",expiryDate:"Tanggal Kedaluwarsa",satisifiedPlanReference:"Rencana yang Dipenuhi (Pengidentifikasi Rencana)",sections:{identification:"Identifikasi",requestor:"Pemohon",recipient:"Penerima",priorityAndDates:"Prioritas Dan Tanggal",satisifiedPlan:"Rencana Terpenuhi"}},MI_SequenceCode:{caption:"Urutan",start:"Mulai",end:"Akhir",instantaneous:"Instan"},MI_TriggerCode:{caption:"Pemicu",automatic:"Otomatis",manual:"Manual",preProgrammed:"Praprogram"},ObjectReference:{uuidref:"Referensi UUID",xlinkref:"Referensi URL"},RS_Identifier:{caption:"Ruang Kode ID Plus",code:"Kode",codeSpace:"Ruang Kode"},SV_CouplingType:{loose:"Longgar",mixed:"Gabungan",tight:"Ketat"},SV_OperationMetadata:{operationName:"Nama Operasi",DCP:"DCP",connectPoint:"Titik Hubung"},SV_ServiceIdentification:{serviceType:"Tipe Layanan",couplingType:"Tipe Gabungan",containsOperations:"Metadata Operasi",operatesOn:"Berjalan Di"},TM_Primitive:{indeterminatePosition:"Posisi Tidak Tentu",indeterminates:{before:"Sebelum",after:"Setelah",now:"Sekarang",unknown:"Tidak Diketahui"}},gemet:{concept:{gemetConceptKeyword:"Kata Kunci Konsep GEMET",tool:"Pencarian...",dialogTitle:"GEMET - Kata Kunci Konsep",searchLabel:"Cari:",searchTip:"Mencari GEMET"},theme:{tool:"Pencarian...",dialogTitle:"GEMET - Tema Data Inspirasi"},ioerror:"Terdapat kesalahan komunikasi dengan layanan GEMET: {url}",searching:"Mencari GEMET...",noMatch:"Tidak ditemukan hasil yang sesuai.",languages:{bg:"Bulgaria",cs:"Ceko",da:"Denmark",nl:"Belanda",en:"Inggris",et:"Estonia",fi:"Finlandia",fr:"Perancis",de:"Jerman",el:"Yunani",hu:"Hongaria",ga:"Gaelik (Irlandia)",it:"Italia",lv:"Latvia",lt:"Lituania",mt:"Malta",pl:"Polandia",pt:"Portugis",ro:"Rumania",sk:"Slovakia",sl:"Slovenia",es:"Spanyol",sv:"Swedia"}}});