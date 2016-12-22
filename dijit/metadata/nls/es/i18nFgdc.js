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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Ninguno",notComplete:"Sin completar",other:"Otro",present:"Presente",unknown:"Desconocido",unpublishedMaterial:"Material no publicado"},hints:{integerGreaterThanOne:"(introduzca un entero > 1)",integer0To100:"(introduce un entero de 0 a 100)"},citeinfo:{caption:"Información de cita",origin:"Creador",pubdate:"Fecha de publicación",pubtime:"Hora de publicación",title:"Título",edition:"Edición",geoform:{caption:"Formulario de Presentación de datos geoespaciales",atlas:"Atlas",audio:"Audio",diagram:"Diagrama",sDocument:"Documento",globe:"Globo",map:"Mapa",model:"Modelo",multiMediaPresentation:"Presentación multimedia",profile:"Perfil",rasterDigitalData:"Datos digitales de ráster",remoteSensingImage:"Imagen de teledetección",section:"Sección",spreadsheet:"Hoja de cálculo",tabularDigitalData:"Datos digitales tabulares",vectorDigitalData:"Datos digitales de vector",video:"Vídeo",view:"Ver"},serinfo:{caption:"Información de series",sername:"Nombre de serie",issue:"Identificación del problema"},pubinfo:{caption:"Información de publicación",pubplace:"Lugar de publicación",publish:"Editor"},othercit:"Otros detalles de cita",onlink:"Vínculo on-line (URL)"},cntinfo:{caption:"Información de contacto",section:{primary:"Principal",phoneAndEmail:"Teléfono y correo electrónico",hoursAndInstructions:"Horas e instrucciones"},cntorgp:{caption:"Por organización",cntorg:"Organización",cntper:"Persona"},cntperp:{caption:"Por persona",cntper:"Persona",cntorg:"Organización"},cntpos:"Posición",cntaddr:{caption:"Dirección",addrtype:{caption:"Tipo de dirección",mailing:"Correo electrónico",physical:"Postal",mailingAndPhysical:"Correo electrónico y postal"},address:"Dirección",city:"Ciudad",state:"Estatal",postal:"Código postal",country:"País"},cntvoice:"Voz",cnttdd:"Teléfono TDD/TTY (escucha imposibilitada)",cntfax:"Fax",cntemail:"Dirección de correo electrónico",hours:"Horario",cntinst:"Instrucciones"},dataqual:{caption:"Información de calidad de datos",section:{attributeAccuracy:"Exactitud de atributo",logicalConsistency:"Coherencia lógica",completeness:"Integridad",positionalAccuracy:"Precisión posicional",lineage:"Linaje",cloudCover:"Porcentaje de imagen oculta"},attracc:{caption:"Exactitud de atributo",attraccr:"Informe de exactitud de atributo",qattracc:{caption:"Evaluación cuantitativa de exactitud de atributos",attraccv:"Valor de exactitud de atributo",attracce:"Explicación de exactitud de atributo"}},logic:"Informe de consistencia lógica",complete:"Informe de completitud",posacc:"Precisión posicional",horizpa:{caption:"Exactitud posicional horizontal",horizpar:"Informe de exactitud posicional horizontal",qhorizpa:{caption:"Evaluación cuantitativa de exactitud posicional horizontal",horizpav:"Valor de exactitud posicional horizontal",horizpae:"Explicación de exactitud posicional horizontal"}},vertacc:{caption:"Exactitud posicional vertical",vertaccr:"Informe de exactitud posicional vertical",qvertpa:{caption:"Evaluación cuantitativa de exactitud posicional vertical",vertaccv:"Valor de exactitud posicional vertical",vertacce:"Explicación de exactitud posicional vertical"}},lineage:{caption:"Linaje"},srcinfo:{caption:"Información de fuente",srccite:"Citación de fuente",srcscale:"Denominador de escala de fuente",typesrc:{caption:"Tipo de medio de fuente",paper:"Papel",stableBaseMaterial:"Material de base estable",microfiche:"Microficha",microfilm:"Microfilm",audiocassette:"Casete de audio",chart:"Gráfico",filmstrip:"Banda de película",transparency:"Transparencia",videocassette:"Casete de video",videodisc:"Disco de video",videotape:"Cinta de video",physicalModel:"Modelo físico",computerProgram:"Programa de PC",disc:"Disco",cartridgeTape:"Cinta de cartucho",magneticTape:"Cinta magnética",online:"On-line",cdrom:"CD-ROM",electronicBulletinBoard:"Tabla de boletines electrónicos",electronicMailSystem:"Sistema de correo electrónico"},srctime:"Período de tiempo del contenido",srccurr:"Referencia de actualidad de fuente",srccitea:"Abreviatura de citación de fuente",srccontr:"Contribución de fuente"},procstep:{caption:"Paso de proceso",procdesc:"Descripción del proceso",srcused:"Abreviatura de citación de fuente utilizada",procdate:"Fecha de proceso",proctime:"Tiempo de proceso",srcprod:"Abreviatura de citación de fuente producida",proccont:"Contacto de proceso"},cloud:"Porcentaje de imagen oculta"},distinfo:{caption:"Información de distribución",section:{distributor:"Distribuidor",description:"Descripción",orderProcess:"Proceso de pedido",prerequisites:"Requisitos previos",availability:"Disponibilidad"},distrib:"Distribuidor",resdesc:{caption:"Descripción del recurso",liveData:"Datos y mapas en vivo",downloadableData:"Datos descargables",offlineData:"Datos fuera de línea",staticMapImages:"Imágenes de mapa estáticas",sDocument:"Otros documentos",application:"Aplicaciones",geographicService:"Servicios geográficos",clearingHouse:"Catálogos de datos",mapFiles:"Archivos de mapas",geographicActivies:"Actividades geográficas"},distliab:"Declaración de responsabilidad de distribución",custom:"Proceso de orden personalizado",techpreq:"Requisitos técnicos previos",availabl:"Disponibilidad"},eainfo:{caption:"Información de entidad y atributo",overview:"Descripción general",eaover:"Visión general de entidades y atributos",eadetcit:"Cita de detalles de entidades y atributos"},idinfo:{caption:"Información de identificación",section:{timeAndStatus:"Tiempo y estado",constraints:"Restricciones",contact:"Contacte",additional:"Adicional"},citeinfo:"Citación",descript:{caption:"Descripción",sAbstract:"Resumen",purpose:"Propósito",supplinf:"Información complementaria"},timeperd:{caption:"Período de tiempo del contenido",current:{caption:"Referencia de actualidad",groundCondition:"Condición base",publicationDate:"Fecha de publicación"}},status:{caption:"Estado",progress:{caption:"Progreso",complete:"Completado",inWork:"En trabajo",planned:"Planeado"},update:{caption:"Frecuencia de mantenimiento y actualización",continual:"Continuo",daily:"Diariamente",weekly:"Semanalmente",monthly:"Mensualmente",annually:"Anualmente",unknown:"Desconocido",asNeeded:"Según necesidad",irregular:"Irregular",nonePlanned:"Ninguno planeado"}},spdom:{caption:"Extensión",bounding:{caption:"Coordenadas de delimitación",westbc:"Longitud de delimitación hacia el oeste",eastbc:"Longitud de delimitación hacia el este",northbc:"Latitud de delimitación hacia el norte",southbc:"Latitud de delimitación hacia el sur"}},keywords:{caption:"Palabras Claves",theme:"Tema",place:"Lugar",stratum:"Estrato",temporal:"Temporal",thesaursus:"Diccionario asociado",delimited:"Palabras Claves",themektIsoTopicCategory:"Tema ISO...",themektIsoTopicDialog:"Tema de ISO",placektGnis:"Sistema de información de nombres geográficos"},accconst:"Restricciones de acceso",useconst:"Restricciones de uso",ptcontac:"Punto de contacto para el recurso",browse:{caption:"Gráfico de exploración",browsen:"Examinar URL de gráfico",browsed:"Descripción del archivo gráfico de exploración",browset:"Tipo de archivo gráfico de exploración"},datacred:"Crédito de dataset",secinfo:{caption:"Información de seguridad",secsys:"Sistema de clasificación de seguridad",secclass:{caption:"Clasificación de seguridad",topSecret:"Confidencial",secret:"Secreto",confidential:"Confidencial",restricted:"Restringido",unclassified:"Sin clasificar",sensitive:"Sensible"},sechandl:"Descripción de manejo de seguridad"},sNative:"Entorno de dataset nativo",crossref:"Referencia cruzada"},metadata:{idinfo:"Identificación",dataqual:"Calidad",spdoinfo:"Organización de datos espaciales",spref:"Referencia espacial",eainfo:"Entidad y atributo",distinfo:"Distribución",metainfo:"Metadatos"},metainfo:{caption:"Información de metadatos",section:{dates:"Fechas de metadatos",contact:"Contacto de metadatos",standard:"Estándar de metadatos",additional:"Adicional"},metd:"Fecha de metadatos",metrd:"Fecha de revisión de metadatos",metfrd:"Fecha de revisión futura de metadatos",metstdn:"Nombre estándar de metadatos",metstdv:"Versión estándar de metadatos",metac:"Restricciones de acceso a metadatos",metuc:"Restricciones de uso de metadatos",metsi:{caption:"Información de seguridad de metadatos",metscs:"Sistema de clasificación de seguridad de metadatos",metsc:"Clasificación de seguridad de metadatos",metshd:"Descripción de manejo de seguridad de metadatos"}},spref:{caption:"Información de referencia espacial",horizsys:{caption:"Sistema de coordenadas horizontal",geograph:{caption:"Geográfico",latres:"Resolución de latitud",longres:"Resolución de longitud",geogunit:{caption:"Unidades de coordenadas geográficas",decimalDegrees:"Grados decimales",decimalMinutes:"Minutos decimales",decimalSeconds:"Segundos decimales",degreesAndDecimalMinutes:"Grados y minutos decimales",degreesMinutesAndDecimalSeconds:"Grados, minutos y segundos decimales",radians:"Radianes",grads:"Grados centesimales"}},planar:{caption:"De Plano"},local:{caption:"Local",localdes:"Descripción local",localgeo:"Información de georreferencia local"},geodetic:{caption:"Modelo geodésico",horizdn:{caption:"Nombre de datum horizontal",nad83:"Datum norteamericano de 1983",nad27:"Datum de Norteamérica de 1927"},ellips:{caption:"Nombre de elipsoide",grs80:"Sistema de referencia geodésica 80",clarke1866:"Clarke 1866"},semiaxis:"Semieje mayor",denflat:"Denominador de índice de aplanamiento"}},vertdef:{caption:"Sistema de coordenadas verticales",altsys:{caption:"Sistema de altitud",altdatum:{caption:"Nombre de datum de altitud",navd88:"Datum vertical norteamericano de 1988",ngvd29:"Datum vertical geodésico nacional de 1929"},altres:"Resolución de altitud",altunits:{caption:"Unidades de distancia de altitud",meters:"Metros",feet:"Pies"},altenc:{caption:"Método de codificación de altitud",explicit:"Coordenada de elevación explícita con coordenadas horizontales",implicit:"Coordenada implícita",attribute:"Valores de atributos"}},depthsys:{caption:"Sistema de profundidad",depthdn:{caption:"Nombre de datum de profundidad",option1:"Superficie local",option2:"Datum de tabla; datum para la reducción de sondeo",option3:"Marea astronómica más baja",option4:"Marea astronómica más alta",option5:"Agua baja media",option6:"Agua alta media",option7:"Nivel del mar medio",option8:"Datum topográfico de tierra",option9:"Arroyos de agua bajos medios",option10:"Arroyos de agua altos medios",option11:"Agua muerta baja media",option12:"Agua muerta alta media",option13:"Agua muy baja media",option14:"Arroyos de agua muy bajos medios",option15:"Agua muy alta media",option16:"Agua baja muy alta media",option17:"Agua alta muy baja media",option18:"Marea viva",option19:"Agua muy baja tropical",option20:"Marea muerta",option21:"Agua alta",option22:"Agua muy alta",option23:"Agua baja",option24:"Datum de agua baja",option25:"Agua más baja",option26:"Agua muy baja",option27:"Agua baja normal más baja",option28:"Nivel medio de marea",option29:"Agua baja de arroyo indio",option30:"Agua alta completa y carga",option31:"Agua baja completa y carga",option32:"Datum de río Columbia",option33:"Datum de agua baja de costa del Golfo",option34:"Agua baja de arroyos ecuatoriales",option35:"Marea astronómica más baja aproximada",option36:"Sin corrección"},depthres:"Resolución de profundidad",depthdu:{caption:"Unidades de distancia de profundidad",meters:"Metros",feet:"Pies"},depthem:{caption:"Método de codificación de profundidad",explicit:"Coordenada de profundidad explícita con coordenadas horizontales",implicit:"Coordenada implícita",attribute:"Valores de atributos"}}}},timeinfo:{caption:"Información de período de tiempo",sngdate:"Fecha única",mdattim:"Varias fechas",rngdates:"Rango de datos",caldate:"fecha",time:"Hora",begdate:"Fecha de inicio",begtime:"Hora de inicio",enddate:"Fecha de fin",endtime:"Hora de fin"}});