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

define({documentTypes:{data:{caption:"ISO 19115 (Données)",description:""},service:{caption:"ISO 19119 (Service)",description:""},gmi:{caption:"ISO 19115-2 (Données d'imagerie et de grille)",description:""}},general:{reference:"Référence"},sections:{metadata:"Métadonnées",identification:"Identification",distribution:"Répartition",quality:"Qualité",acquisition:"Acquisition"},metadataSection:{identifier:"Identifiant",contact:"Contact",date:"Date",standard:"Standard",reference:"Référence"},identificationSection:{citation:"Référence",description:"Description",contact:"Contact",thumbnail:"Miniature",keywords:"Mot-clé",constraints:"Contraintes",resource:"Ressource",resourceTab:{representation:"Représentation",language:"Langue",classification:"Classification",extent:"Étendue"},serviceResourceTab:{serviceType:"Type de service",extent:"Étendue",couplingType:"Type de couplage",operation:"Opération",operatesOn:"Fonctionnement"}},distributionSection:{},qualitySection:{scope:"Domaine d'applicabilité",conformance:"Conformité",lineage:"Lignée"},acquisitionSection:{requirement:"Exigences",objective:"Objectif",instrument:"Instrument",plan:"Plan",operation:"Opération",platform:"Plateforme",environment:"Environnement"},AbstractMD_Identification:{sAbstract:"Résumé",purpose:"Objet",credit:"Crédits",pointOfContact:"Point de contact",resourceMaintenance:"Maintenance",graphicOverview:"Vue d'ensemble graphique",descriptiveKeywords:"Collecte de mots-clés",resourceConstraints:"Contraintes"},CI_Address:{deliveryPoint:"Adresse postale",city:"Ville",administrativeArea:"Zone administrative",postalCode:"Code postal",country:"Pays",electronicMailAddress:"Adresse e-mail"},CI_Citation:{title:"Titre",alternateTitle:"Autre titre",identifier:"Identifiant de ressource unique",resource:{title:"Titre de ressource",date:"Date de ressource"},specification:{title:"Titre de spécification",date:"Date de spécification"}},CI_Contact:{phone:"Téléphone",address:"Adresse",onlineResource:"Ressource en ligne",hoursOfService:"Heures de service",contactInstructions:"Instructions de contact"},CI_Date:{date:"Date",dateType:"Type de date"},CI_DateTypeCode:{caption:"Type de date",creation:"Date de création",publication:"Date de publication",revision:"Date de révision"},CI_OnLineFunctionCode:{caption:"Fonction",download:"Téléchargement",information:"Informations",offlineAccess:"Accès Offline",order:"Commande",search:"Rechercher"},CI_OnlineResource:{caption:"Ressource en ligne",linkage:"URL",protocol:"Protocole",applicationProfile:"Profil d'application",name:"Nom",description:"Description",sFunction:"Fonction"},CI_ResponsibleParty:{caption:"Point de contact",individualName:"Nom de l'individu",organisationName:"Nom de l'organisation",positionName:"Nom du poste",contactInfo:"Coordonnées",role:"Rôle"},CI_RoleCode:{caption:"Rôle",resourceProvider:"Fournisseur de la ressource",custodian:"Dépositaire",owner:"Propriétaire",user:"Utilisateur",distributor:"Distributeur",originator:"Créateur",pointOfContact:"Point de contact",principalInvestigator:"Enquêteur principal",processor:"Processeur",publisher:"Editeur",author:"Auteur"},CI_Telephone:{voice:"Voix",facsimile:"Télécopie"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Services Web du serveur"},DQ_ConformanceResult:{caption:"Résultat de conformité",explanation:"Explication",degree:{caption:"Degré",validationPerformed:"Validation réalisée",conformant:"Conforme",nonConformant:"Non conforme"}},DQ_DataQuality:{report:"Rapport"},DQ_Scope:{level:"Champ d'application (des informations de qualité s'appliquent)",levelDescription:"Description de niveau"},EX_Extent:{caption:"Étendue",description:"Description",geographicElement:"Etendue spatiale",temporalElement:"Etendue temporelle",verticalElement:"Etendue verticale"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitude limite ouest",eastBoundLongitude:"Longitude limite est",southBoundLatitude:"Latitude limite sud",northBoundLatitude:"Latitude limite nord"},EX_GeographicDescription:{caption:"Description géographique"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Date de début",endPosition:"Date de fin"}},EX_VerticalExtent:{minimumValue:"Valeur minimale",maximumValue:"Valeur maximale",verticalCRS:"CRS vertical"},Length:{caption:"Longueur",uom:"Unités de mesure",km:"Kilomètres",m:"Mètres",mi:"Miles",ft:"Pieds"},LI_Lineage:{statement:"Instruction de lignée"},MD_BrowseGraphic:{fileName:"Parcourir l'URL du graphique",fileDescription:"Parcourir la légende graphique",fileType:"Parcourir le type graphique"},MD_ClassificationCode:{unclassified:"Non classé",restricted:"Restreint",confidential:"Confidentiel",secret:"Secret",topSecret:"Top Secret"},MD_Constraints:{caption:"Contraintes d'utilisation",useLimitation:"Limite d'utilisation"},MD_DataIdentification:{spatialRepresentationType:"Type de représentation spatiale",spatialResolution:"Résolution spatiale",language:"Langue de ressource",supplementalInformation:"Complémentaire"},MD_DigitalTransferOptions:{onLine:"En ligne"},MD_Distribution:{distributionFormat:"Format de distribution",transferOptions:"Options de transfert"},MD_Format:{name:"Nom du format",version:"Version du format"},MD_Identifier:{caption:"URI",identifierCaption:"Identifiant",code:"Code"},MD_Keywords:{delimitedCaption:"Mot-clé",thesaurusName:"Dictionnaire des synonymes associé"},MD_KeywordTypeCode:{caption:"Type de mot-clé",discipline:"Discipline",place:"Emplacement géographique",stratum:"Niveau",temporal:"Temporel",theme:"Thème"},MD_LegalConstraints:{caption:"Restrictions légales",accessConstraints:"Contraintes d'accès",useConstraints:"Contraintes d'utilisation",otherConstraints:"Autres contraintes"},MD_MaintenanceFrequencyCode:{caption:"Fréquence",continual:"Continu",daily:"Quotidienne",weekly:"Toutes les semaines",fortnightly:"Toutes les deux semaines",monthly:"Tous les mois",quarterly:"Trimestrielle",biannually:"Semestriel",annually:"Annuelle",asNeeded:"Si nécessaire",irregular:"Irrégulière",notPlanned:"Non planifié",unknown:"Inconnue"},MD_Metadata:{caption:"Métadonnées",fileIdentifier:"Identifiant de fichier",language:"Langue des métadonnées",hierarchyLevel:"Niveau de hiérarchie",hierarchyLevelName:"Nom du niveau de hiérarchie",contact:"Contacts de métadonnées",dateStamp:"Date des métadonnées",metadataStandardName:"Nom standard des métadonnées",metadataStandardVersion:"Version standard des métadonnées",referenceSystemInfo:"MD_ReferenceSystem",identificationInfo:"Identification",distributionInfo:"Répartition",dataQualityInfo:"Qualité"},MD_ProgressCode:{caption:"Code de progression",completed:"Complété",historicalArchive:"Archive d'historique",obsolete:"Obsolète",onGoing:"En cours",planned:"Planifié",required:"Obligatoire",underDevelopment:"Sous-développement"},MD_RepresentativeFraction:{denominator:"Dénominateur"},MD_Resolution:{equivalentScale:"Echelle équivalente",distance:"Distance"},MD_RestrictionCode:{copyright:"Copyright",patent:"Brevet",patentPending:"Brevet en instance",trademark:"Marque de commerce",license:"Licence",intellectualPropertyRights:"Droits de propriété intellectuelle",restricted:"Restreint",otherRestrictions:"Autres restrictions"},MD_ScopeCode:{attribute:"Attribut",attributeType:"Type d'attribut",collectionHardware:"Matériel de collecte",collectionSession:"Session de collecte",dataset:"Jeu de données",series:"Série",nonGeographicDataset:"Jeu de données non géographique",dimensionGroup:"Groupe de dimensions",feature:"Entité",featureType:"Type d'entité",propertyType:"Type de propriété",fieldSession:"Campagne de terrain",software:"Logiciel",service:"Service",model:"Modèle",tile:"Tuile"},MD_ScopeDescription:{attributes:"Attributs",features:"Entités",featureInstances:"Instances d'entités",attributeInstances:"Instances d'attributs",dataset:"Jeu de données",other:"Autre"},MD_SecurityConstraints:{caption:"Contraintes de sécurité",classification:"Classification",userNote:"Note de l'utilisateur",classificationSystem:"Système de classification",handlingDescription:"Description de la gestion"},MD_SpatialRepresentationTypeCode:{caption:"Type de représentation spatiale",vector:"Vecteur",grid:"Grille",textTable:"Tableau de texte",tin:"TIN",stereoModel:"Modèle stéréo",video:"Vidéo"},MD_TopicCategoryCode:{caption:"Catégorie",boundaries:"Limites administratives et politiques",farming:"Agriculture",climatologyMeteorologyAtmosphere:"Climatologie/Météorologie",biota:"Biologie et Ecologie",economy:"Economie",planningCadastre:"Cadastral",society:"Culture, Société et Démographie",elevation:"Alitimétrie et produits dérivées",environment:"Environnement et Protection des ressources",structure:"Construction, Equipement et Monuments",geoscientificInformation:"Sciences de la terre",health:"Santé",imageryBaseMapsEarthCover:"Imagerie et fonds de cartes",inlandWaters:"Ressources en eaux",location:"Localisation et Géodésie",intelligenceMilitary:"Militaire",oceans:"Océans et Estuaires",transportation:"Réseaux de transports",utilitiesCommunication:"Infrastructure et Réseaux de communication"},MI_ContextCode:{caption:"Contextuel",acquisition:"Acquisition",pass:"Réussite",wayPoint:"Point de cheminement"},MI_EnvironmentalRecord:{caption:"Conditions environnementales",averageAirTemperature:"Température moyenne de l'air",maxRelativeHumidity:"Humidité relative maximale",maxAltitude:"Altitude maximale",meterologicalConditions:"Conditions météorologiques"},MI_Event:{identifier:"Identifiant d'événement",time:"Temps",expectedObjectiveReference:"Objectif attendu (identifiant d'objectif)",relatedSensorReference:"Capteur associé (identifiant d'instrument)",relatedPassReference:"Admission associée (identifiant d'admission de plateforme)"},MI_GeometryTypeCode:{point:"point",linear:"Linéaire",areal:"Surfacique",strip:"Bande"},MI_Instrument:{citation:"Référence d'instrument",identifier:"Identifiant d'instrument",sType:"Type d'instrument",description:"Description d'instrument",mountedOn:"Monté sur",mountedOnPlatformReference:"Monté sur (identifiant de plateforme)"},MI_Metadata:{acquisitionInformation:"Acquisition"},MI_Objective:{caption:"Objectif",identifier:"Identifiant d'objectif",priority:"Priorité de la cible",sFunction:"Fonction de l'objectif",extent:"Étendue",pass:"Admission de plateforme",sensingInstrumentReference:"Instrument de détection (identifiant d'instrument)",objectiveOccurrence:"Evénements",sections:{identification:"Identification",extent:"Étendue",pass:"Réussite",sensingInstrument:"Instrument de détection",objectiveOccurrence:"Evénements"}},MI_ObjectiveTypeCode:{caption:"Type (technique de collecte pour l'objectif)",instantaneousCollection:"Collecte instantanée",persistentView:"Vue constante",survey:"Géomètre-expert"},MI_Operation:{caption:"Opération",description:"Description de l'opération",citation:"Référence d'opération",identifier:"Identifiant d'opération",status:"Statut d'opération",objectiveReference:"Objectif associé (identifiant d'objectif)",planReference:"Plan associé (identifiant de plan)",significantEventReference:"Evénement associé (identifiant d'événement)",platformReference:"Plateforme associée (identifiant de plateforme)",sections:{identification:"Identification",related:"Associé"}},MI_OperationTypeCode:{caption:"Type d'opération",real:"Réel",simulated:"Simulé",synthesized:"Synthétisé"},MI_Plan:{sType:"Rééchantillonnage de la géométrie pour la collecte de données",status:"Statut du plan",citation:"Référence de l'autorité demandant la collecte",satisfiedRequirementReference:"Exigence satisfaite (identifiant de l'exigence)",operationReference:"Opération associée (identifiant d'opération)"},MI_Platform:{citation:"Référence de plateforme",identifier:"Identifiant de plateforme",description:"Description de la plateforme prenant en charge l'instrument",sponsor:"Organisation de parrainage de la plateforme",instrument:"Instrument(s) monté(s) sur la plateforme",instrumentReference:"Identifiant d'instrument",sections:{identification:"Identification",sponsor:"Parrain",instruments:"Instruments"}},MI_PlatformPass:{identifier:"Identifiant d'admission de plateforme",extent:"Etendue d'admission de plateforme",relatedEventReference:"Evénement associé (identifiant d'événement)"},MI_PriorityCode:{critical:"Critique",highImportance:"Importance élevée",mediumImportance:"Moyenne importance",lowImportance:"Importance basse"},MI_RequestedDate:{requestedDateOfCollection:"Date de demande de la collecte",latestAcceptableDate:"Date acceptable au plus tard"},MI_Requirement:{caption:"Exigences",citation:"Référence du document de conseil sur les exigences",identifier:"Identifiant d'exigence",requestor:"Demandeur de l'exigence",recipient:"Destinataire des résultats de l'exigence",priority:"Priorité d'exigence",requestedDate:"Date de la demande",expiryDate:"Date d'expiration",satisifiedPlanReference:"Plan satisfait (identifiant de plan)",sections:{identification:"Identification",requestor:"Demandeur",recipient:"Destinataire",priorityAndDates:"Priorité et dates",satisifiedPlan:"Plan satisfait"}},MI_SequenceCode:{caption:"Séquence",start:"Départ",end:"Extrémité",instantaneous:"Instantané"},MI_TriggerCode:{caption:"Déclencheur",automatic:"Automatique",manual:"Manuel",preProgrammed:"Préprogrammé"},ObjectReference:{uuidref:"Référence UUID",xlinkref:"Référence URL"},RS_Identifier:{caption:"ID plus Espace de code",code:"Code",codeSpace:"Espace de code"},SV_CouplingType:{loose:"Lâche",mixed:"Mixte",tight:"Etroit"},SV_OperationMetadata:{operationName:"Nom d'opération",DCP:"DCP",connectPoint:"Connecter le point"},SV_ServiceIdentification:{serviceType:"ServiceType",couplingType:"Type de couplage",containsOperations:"Métadonnées de l'opération",operatesOn:"Fonctionnement"},TM_Primitive:{indeterminatePosition:"Position indéterminée",indeterminates:{before:"Avant",after:"Après",now:"Maintenant",unknown:"Inconnue"}},gemet:{concept:{gemetConceptKeyword:"Mot-clé de concept GEMET",tool:"Rechercher...",dialogTitle:"GEMET - Mot-clé de concept",searchLabel:"Rechercher :",searchTip:"Rechercher dans GEMET"},theme:{tool:"Rechercher...",dialogTitle:"GEMET - Thème des données Inspire"},ioerror:"Une erreur s'est produite lors de la communication avec le service GEMET : {url}",searching:"Recherche dans GEMET...",noMatch:"Aucun résultat n'a été trouvé.",languages:{bg:"Bulgare",cs:"Tchèque",da:"Danois",nl:"Néerlandais",en:"Anglais",et:"Estonien",fi:"Finlandais",fr:"Français",de:"Allemand",el:"Grec",hu:"Hongrois",ga:"Gaélique (Irlandais)",it:"Italien",lv:"Letton",lt:"Lituanien",mt:"Maltais",pl:"Polonais",pt:"Portugais",ro:"Roumain",sk:"Slovaque",sl:"Slovène",es:"Espagnol",sv:"Suédois"}}});