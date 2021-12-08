import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AddBusinessMutation = {
  __typename?: 'AddBusinessMutation';
  businessOwner?: Maybe<OwnerType>;
};

export type AddLoanPortlioMutation = {
  __typename?: 'AddLoanPortlioMutation';
  portfolio?: Maybe<LoanPortfolioType>;
};

export type AddressInput = {
  id?: Maybe<Scalars['ID']>;
  locality?: Maybe<LocalityInput>;
  route?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
};

export type AssignPortfolioManagerMutation = {
  __typename?: 'AssignPortfolioManagerMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** An enumeration. */
export enum BusinessBusinessType {
  /** Limited Liability Company */
  LimitedLiabilityCompany = 'LIMITED_LIABILITY_COMPANY',
  /** Limited Liability Partnership */
  LimitedLiabilityPartnership = 'LIMITED_LIABILITY_PARTNERSHIP',
  /** Partnership */
  Partnership = 'PARTNERSHIP',
  /** Society */
  Society = 'SOCIETY',
  /** Sole Proprietorship */
  SoleProprietorship = 'SOLE_PROPRIETORSHIP',
}

/** An enumeration. */
export enum BusinessCategory {
  /** Accounting */
  Accounting = 'ACCOUNTING',
  /** Agents */
  Agents = 'AGENTS',
  /** Agriculture */
  Agriculture = 'AGRICULTURE',
  /** Antiques and Collectables */
  AntiquesAndCollectables = 'ANTIQUES_AND_COLLECTABLES',
  /** Arts and Crafts */
  ArtsAndCrafts = 'ARTS_AND_CRAFTS',
  /** Assets Management */
  AssetManagement = 'ASSET_MANAGEMENT',
  /** Automotive */
  Automotive = 'AUTOMOTIVE',
  /** Beverages */
  Beverages = 'BEVERAGES',
  /** Brokers */
  Brokers = 'BROKERS',
  /** Business Services */
  BusinessServices = 'BUSINESS_SERVICES',
  /** Child Care */
  ChildCare = 'CHILD_CARE',
  /** Cleaning Services */
  CleaningServices = 'CLEANING_SERVICES',
  /** Design */
  Design = 'DESIGN',
  /** Distributor */
  Distributor = 'DISTRIBUTOR',
  /** Ecommerce */
  Ecommerce = 'ECOMMERCE',
  /** Education and Training */
  EducationAndTraining = 'EDUCATION_AND_TRAINING',
  /** Entertainment */
  Entertainment = 'ENTERTAINMENT',
  /** Fashion */
  Fashion = 'FASHION',
  /** Food Sevices */
  FoodServices = 'FOOD_SERVICES',
  /** Gardening and Landscaping */
  GardeningAndLandscaping = 'GARDENING_AND_LANDSCAPING',
  /** Health and Beauty */
  HealthAndBeauty = 'HEALTH_AND_BEAUTY',
  /** Information Technology */
  InformationTechnology = 'INFORMATION_TECHNOLOGY',
  /** Legal Services */
  LegalServices = 'LEGAL_SERVICES',
  /** Maintenance and Repair */
  MaintenanceAndRepair = 'MAINTENANCE_AND_REPAIR',
  /** Management Services */
  ManagementServices = 'MANAGEMENT_SERVICES',
  /** Manufacturing */
  Manufacturing = 'MANUFACTURING',
  /** Marketing Services */
  MarketingServices = 'MARKETING_SERVICES',
  /** Media */
  Media = 'MEDIA',
  /** Medical Practitioners */
  MedicalPractitioners = 'MEDICAL_PRACTITIONERS',
  /** Music */
  Music = 'MUSIC',
  /** Nightlife */
  Nightlife = 'NIGHTLIFE',
  /** Personal Services */
  PersonalServices = 'PERSONAL_SERVICES',
  /** Pet Services */
  PetServices = 'PET_SERVICES',
  /** Photography */
  Photography = 'PHOTOGRAPHY',
  /** Professional Services */
  ProfessionalServices = 'PROFESSIONAL_SERVICES',
  /** Publishing */
  Publishing = 'PUBLISHING',
  /** Recruiting and Staffing */
  RecruitingAndStaffing = 'RECRUITING_AND_STAFFING',
  /** Rental and Leasing */
  RentalAndLeasing = 'RENTAL_AND_LEASING',
  /** Research Services */
  ResearchServices = 'RESEARCH_SERVICES',
  /** Retail */
  Retail = 'RETAIL',
  /** Shipping and Delivery */
  ShippingAndDelivery = 'SHIPPING_AND_DELIVERY',
  /** Sports and Recreation */
  SportsAndRecreation = 'SPORTS_AND_RECREATION',
  /** Toys and Hobbies */
  ToysAndHobbies = 'TOYS_AND_HOBBIES',
  /** Transportation */
  Transportation = 'TRANSPORTATION',
  /** Travel and Tourism */
  TravelAndTourism = 'TRAVEL_AND_TOURISM',
  /** Value Added Reseller */
  ValueAddedReseller = 'VALUE_ADDED_RESELLER',
  /** Warehousing and Storage */
  WarehousingAndStorage = 'WAREHOUSING_AND_STORAGE',
  /** Wholesale */
  Wholesale = 'WHOLESALE',
}

/** An enumeration. */
export enum BusinessDailySalesCurrency {
  /** Andorran Peseta */
  Adp = 'ADP',
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani (1927–2002) */
  Afa = 'AFA',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek (1946–1965) */
  Alk = 'ALK',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Angolan Kwanza (1977–1991) */
  Aok = 'AOK',
  /** Angolan New Kwanza (1990–2000) */
  Aon = 'AON',
  /** Angolan Readjusted Kwanza (1995–1999) */
  Aor = 'AOR',
  /** Argentine Austral */
  Ara = 'ARA',
  /** Argentine Peso Ley (1970–1983) */
  Arl = 'ARL',
  /** Argentine Peso (1881–1970) */
  Arm = 'ARM',
  /** Argentine Peso (1983–1985) */
  Arp = 'ARP',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Austrian Schilling */
  Ats = 'ATS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat (1993–2006) */
  Azm = 'AZM',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia-Herzegovina Dinar (1992–1994) */
  Bad = 'BAD',
  /** Bosnia-Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Bosnia-Herzegovina New Dinar (1994–1997) */
  Ban = 'BAN',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Belgian Franc (convertible) */
  Bec = 'BEC',
  /** Belgian Franc */
  Bef = 'BEF',
  /** Belgian Franc (financial) */
  Bel = 'BEL',
  /** Bulgarian Hard Lev */
  Bgl = 'BGL',
  /** Bulgarian Socialist Lev */
  Bgm = 'BGM',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bulgarian Lev (1879–1952) */
  Bgo = 'BGO',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudan Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Bolivian Boliviano (1863–1963) */
  Bol = 'BOL',
  /** Bolivian Peso */
  Bop = 'BOP',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian New Cruzeiro (1967–1986) */
  Brb = 'BRB',
  /** Brazilian Cruzado (1986–1989) */
  Brc = 'BRC',
  /** Brazilian Cruzeiro (1990–1993) */
  Bre = 'BRE',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Brazilian New Cruzado (1989–1990) */
  Brn = 'BRN',
  /** Brazilian Cruzeiro (1993–1994) */
  Brr = 'BRR',
  /** Brazilian Cruzeiro (1942–1967) */
  Brz = 'BRZ',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Burmese Kyat */
  Buk = 'BUK',
  /** Botswanan Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble (1994–1999) */
  Byb = 'BYB',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble (2000–2016) */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss Franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Chilean Escudo */
  Cle = 'CLE',
  /** Chilean Unit of Account (UF) */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Yuan (offshore) */
  Cnh = 'CNH',
  /** Chinese People’s Bank Dollar */
  Cnx = 'CNX',
  /** Chinese Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Colombian Real Value Unit */
  Cou = 'COU',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Serbian Dinar (2002–2006) */
  Csd = 'CSD',
  /** Czechoslovak Hard Koruna */
  Csk = 'CSK',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Cypriot Pound */
  Cyp = 'CYP',
  /** Czech Koruna */
  Czk = 'CZK',
  /** East German Mark */
  Ddm = 'DDM',
  /** German Mark */
  Dem = 'DEM',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Ecuadorian Sucre */
  Ecs = 'ECS',
  /** Ecuadorian Unit of Constant Value */
  Ecv = 'ECV',
  /** Estonian Kroon */
  Eek = 'EEK',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Spanish Peseta (A account) */
  Esa = 'ESA',
  /** Spanish Peseta (convertible account) */
  Esb = 'ESB',
  /** Spanish Peseta */
  Esp = 'ESP',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Finnish Markka */
  Fim = 'FIM',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Islands Pound */
  Fkp = 'FKP',
  /** French Franc */
  Frf = 'FRF',
  /** British Pound */
  Gbp = 'GBP',
  /** Georgian Kupon Larit */
  Gek = 'GEK',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Ghanaian Cedi (1979–2007) */
  Ghc = 'GHC',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guinean Syli */
  Gns = 'GNS',
  /** Equatorial Guinean Ekwele */
  Gqe = 'GQE',
  /** Greek Drachma */
  Grd = 'GRD',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Portuguese Guinea Escudo */
  Gwe = 'GWE',
  /** Guinea-Bissau Peso */
  Gwp = 'GWP',
  /** Guyanaese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Dinar */
  Hrd = 'HRD',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Irish Pound */
  Iep = 'IEP',
  /** Israeli Pound */
  Ilp = 'ILP',
  /** Israeli Shekel (1980–1985) */
  Ilr = 'ILR',
  /** Israeli New Shekel */
  Ils = 'ILS',
  /** IMP */
  Imp = 'IMP',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna (1918–1981) */
  Isj = 'ISJ',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Italian Lira */
  Itl = 'ITL',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgystani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Hwan (1953–1962) */
  Krh = 'KRH',
  /** South Korean Won (1945–1953) */
  Kro = 'KRO',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Laotian Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Lithuanian Litas */
  Ltl = 'LTL',
  /** Lithuanian Talonas */
  Ltt = 'LTT',
  /** Luxembourgian Convertible Franc */
  Luc = 'LUC',
  /** Luxembourgian Franc */
  Luf = 'LUF',
  /** Luxembourg Financial Franc */
  Lul = 'LUL',
  /** Latvian Lats */
  Lvl = 'LVL',
  /** Latvian Ruble */
  Lvr = 'LVR',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moroccan Franc */
  Maf = 'MAF',
  /** Monegasque Franc */
  Mcf = 'MCF',
  /** Moldovan Cupon */
  Mdc = 'MDC',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Malagasy Franc */
  Mgf = 'MGF',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Macedonian Denar (1992–1993) */
  Mkn = 'MKN',
  /** Malian Franc */
  Mlf = 'MLF',
  /** Myanmar Kyat */
  Mmk = 'MMK',
  /** Mongolian Tugrik */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (1973–2017) */
  Mro = 'MRO',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Maltese Lira */
  Mtl = 'MTL',
  /** Maltese Pound */
  Mtp = 'MTP',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rupee (1947–1981) */
  Mvp = 'MVP',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Mexican Silver Peso (1861–1992) */
  Mxp = 'MXP',
  /** Mexican Investment Unit */
  Mxv = 'MXV',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Escudo */
  Mze = 'MZE',
  /** Mozambican Metical (1980–2006) */
  Mzm = 'MZM',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (1988–1991) */
  Nic = 'NIC',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Dutch Guilder */
  Nlg = 'NLG',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Inti */
  Pei = 'PEI',
  /** Peruvian Sol */
  Pen = 'PEN',
  /** Peruvian Sol (1863–1965) */
  Pes = 'PES',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Piso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Zloty */
  Pln = 'PLN',
  /** Polish Zloty (1950–1995) */
  Plz = 'PLZ',
  /** Portuguese Escudo */
  Pte = 'PTE',
  /** Paraguayan Guarani */
  Pyg = 'PYG',
  /** Qatari Rial */
  Qar = 'QAR',
  /** Rhodesian Dollar */
  Rhd = 'RHD',
  /** Romanian Leu (1952–2006) */
  Rol = 'ROL',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Russian Ruble (1991–1998) */
  Rur = 'RUR',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Dinar (1992–2007) */
  Sdd = 'SDD',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Sudanese Pound (1957–1998) */
  Sdp = 'SDP',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** St. Helena Pound */
  Shp = 'SHP',
  /** Slovenian Tolar */
  Sit = 'SIT',
  /** Slovak Koruna */
  Skk = 'SKK',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** Surinamese Guilder */
  Srg = 'SRG',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé & Príncipe Dobra (1977–2017) */
  Std = 'STD',
  /** São Tomé & Príncipe Dobra */
  Stn = 'STN',
  /** Soviet Rouble */
  Sur = 'SUR',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Ruble */
  Tjr = 'TJR',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat (1993–2009) */
  Tmm = 'TMM',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Timorese Escudo */
  Tpe = 'TPE',
  /** Turkish Lira (1922–2005) */
  Trl = 'TRL',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad & Tobago Dollar */
  Ttd = 'TTD',
  /** TVD */
  Tvd = 'TVD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ukrainian Karbovanets */
  Uak = 'UAK',
  /** Ugandan Shilling (1966–1987) */
  Ugs = 'UGS',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** US Dollar */
  Usd = 'USD',
  /** US Dollar (Next day) */
  Usn = 'USN',
  /** US Dollar (Same day) */
  Uss = 'USS',
  /** Uruguayan Peso (Indexed Units) */
  Uyi = 'UYI',
  /** Uruguayan Peso (1975–1993) */
  Uyp = 'UYP',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uruguayan Nominal Wage Index Unit */
  Uyw = 'UYW',
  /** Uzbekistani Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar (1871–2008) */
  Veb = 'VEB',
  /** Venezuelan Bolívar (2008–2018) */
  Vef = 'VEF',
  /** Venezuelan Bolívar */
  Ves = 'VES',
  /** Vietnamese Dong */
  Vnd = 'VND',
  /** Vietnamese Dong (1978–1985) */
  Vnn = 'VNN',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** Central African CFA Franc */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account (XBC) */
  Xbc = 'XBC',
  /** European Unit of Account (XBD) */
  Xbd = 'XBD',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** European Currency Unit */
  Xeu = 'XEU',
  /** French Gold Franc */
  Xfo = 'XFO',
  /** French UIC-Franc */
  Xfu = 'XFU',
  /** West African CFA Franc */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP Franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** RINET Funds */
  Xre = 'XRE',
  /** Sucre */
  Xsu = 'XSU',
  /** Testing Currency Code */
  Xts = 'XTS',
  /** ADB Unit of Account */
  Xua = 'XUA',
  /** The codes assigned for transactions where no currency is involved */
  Xxx = 'XXX',
  /** Yemeni Dinar */
  Ydd = 'YDD',
  /** Yemeni Rial */
  Yer = 'YER',
  /** Yugoslavian Hard Dinar (1966–1990) */
  Yud = 'YUD',
  /** Yugoslavian New Dinar (1994–2002) */
  Yum = 'YUM',
  /** Yugoslavian Convertible Dinar (1990–1992) */
  Yun = 'YUN',
  /** Yugoslavian Reformed Dinar (1992–1993) */
  Yur = 'YUR',
  /** South African Rand (financial) */
  Zal = 'ZAL',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha (1968–2012) */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zairean New Zaire (1993–1998) */
  Zrn = 'ZRN',
  /** Zairean Zaire (1971–1993) */
  Zrz = 'ZRZ',
  /** Zimbabwean Dollar (1980–2008) */
  Zwd = 'ZWD',
  /** Zimbabwean Dollar (2009) */
  Zwl = 'ZWL',
  /** ZWN */
  Zwn = 'ZWN',
  /** Zimbabwean Dollar (2008) */
  Zwr = 'ZWR',
}

export type BusinessInput = {
  businessType: Scalars['String'];
  category?: Maybe<Scalars['String']>;
  currentLocation?: Maybe<AddressInput>;
  dailySales?: Maybe<Scalars['Decimal']>;
  dailySalesCurrency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  operatingCapital?: Maybe<Scalars['Decimal']>;
  operatingCapitalCurrency?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  yearsInCurrentLocation?: Maybe<Scalars['Int']>;
};

/** An enumeration. */
export enum BusinessOperatingCapitalCurrency {
  /** Andorran Peseta */
  Adp = 'ADP',
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani (1927–2002) */
  Afa = 'AFA',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek (1946–1965) */
  Alk = 'ALK',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Angolan Kwanza (1977–1991) */
  Aok = 'AOK',
  /** Angolan New Kwanza (1990–2000) */
  Aon = 'AON',
  /** Angolan Readjusted Kwanza (1995–1999) */
  Aor = 'AOR',
  /** Argentine Austral */
  Ara = 'ARA',
  /** Argentine Peso Ley (1970–1983) */
  Arl = 'ARL',
  /** Argentine Peso (1881–1970) */
  Arm = 'ARM',
  /** Argentine Peso (1983–1985) */
  Arp = 'ARP',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Austrian Schilling */
  Ats = 'ATS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat (1993–2006) */
  Azm = 'AZM',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia-Herzegovina Dinar (1992–1994) */
  Bad = 'BAD',
  /** Bosnia-Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Bosnia-Herzegovina New Dinar (1994–1997) */
  Ban = 'BAN',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Belgian Franc (convertible) */
  Bec = 'BEC',
  /** Belgian Franc */
  Bef = 'BEF',
  /** Belgian Franc (financial) */
  Bel = 'BEL',
  /** Bulgarian Hard Lev */
  Bgl = 'BGL',
  /** Bulgarian Socialist Lev */
  Bgm = 'BGM',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bulgarian Lev (1879–1952) */
  Bgo = 'BGO',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudan Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Bolivian Boliviano (1863–1963) */
  Bol = 'BOL',
  /** Bolivian Peso */
  Bop = 'BOP',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian New Cruzeiro (1967–1986) */
  Brb = 'BRB',
  /** Brazilian Cruzado (1986–1989) */
  Brc = 'BRC',
  /** Brazilian Cruzeiro (1990–1993) */
  Bre = 'BRE',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Brazilian New Cruzado (1989–1990) */
  Brn = 'BRN',
  /** Brazilian Cruzeiro (1993–1994) */
  Brr = 'BRR',
  /** Brazilian Cruzeiro (1942–1967) */
  Brz = 'BRZ',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Burmese Kyat */
  Buk = 'BUK',
  /** Botswanan Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble (1994–1999) */
  Byb = 'BYB',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble (2000–2016) */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss Franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Chilean Escudo */
  Cle = 'CLE',
  /** Chilean Unit of Account (UF) */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Yuan (offshore) */
  Cnh = 'CNH',
  /** Chinese People’s Bank Dollar */
  Cnx = 'CNX',
  /** Chinese Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Colombian Real Value Unit */
  Cou = 'COU',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Serbian Dinar (2002–2006) */
  Csd = 'CSD',
  /** Czechoslovak Hard Koruna */
  Csk = 'CSK',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Cypriot Pound */
  Cyp = 'CYP',
  /** Czech Koruna */
  Czk = 'CZK',
  /** East German Mark */
  Ddm = 'DDM',
  /** German Mark */
  Dem = 'DEM',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Ecuadorian Sucre */
  Ecs = 'ECS',
  /** Ecuadorian Unit of Constant Value */
  Ecv = 'ECV',
  /** Estonian Kroon */
  Eek = 'EEK',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Spanish Peseta (A account) */
  Esa = 'ESA',
  /** Spanish Peseta (convertible account) */
  Esb = 'ESB',
  /** Spanish Peseta */
  Esp = 'ESP',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Finnish Markka */
  Fim = 'FIM',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Islands Pound */
  Fkp = 'FKP',
  /** French Franc */
  Frf = 'FRF',
  /** British Pound */
  Gbp = 'GBP',
  /** Georgian Kupon Larit */
  Gek = 'GEK',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Ghanaian Cedi (1979–2007) */
  Ghc = 'GHC',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guinean Syli */
  Gns = 'GNS',
  /** Equatorial Guinean Ekwele */
  Gqe = 'GQE',
  /** Greek Drachma */
  Grd = 'GRD',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Portuguese Guinea Escudo */
  Gwe = 'GWE',
  /** Guinea-Bissau Peso */
  Gwp = 'GWP',
  /** Guyanaese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Dinar */
  Hrd = 'HRD',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Irish Pound */
  Iep = 'IEP',
  /** Israeli Pound */
  Ilp = 'ILP',
  /** Israeli Shekel (1980–1985) */
  Ilr = 'ILR',
  /** Israeli New Shekel */
  Ils = 'ILS',
  /** IMP */
  Imp = 'IMP',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna (1918–1981) */
  Isj = 'ISJ',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Italian Lira */
  Itl = 'ITL',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgystani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Hwan (1953–1962) */
  Krh = 'KRH',
  /** South Korean Won (1945–1953) */
  Kro = 'KRO',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Laotian Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Lithuanian Litas */
  Ltl = 'LTL',
  /** Lithuanian Talonas */
  Ltt = 'LTT',
  /** Luxembourgian Convertible Franc */
  Luc = 'LUC',
  /** Luxembourgian Franc */
  Luf = 'LUF',
  /** Luxembourg Financial Franc */
  Lul = 'LUL',
  /** Latvian Lats */
  Lvl = 'LVL',
  /** Latvian Ruble */
  Lvr = 'LVR',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moroccan Franc */
  Maf = 'MAF',
  /** Monegasque Franc */
  Mcf = 'MCF',
  /** Moldovan Cupon */
  Mdc = 'MDC',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Malagasy Franc */
  Mgf = 'MGF',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Macedonian Denar (1992–1993) */
  Mkn = 'MKN',
  /** Malian Franc */
  Mlf = 'MLF',
  /** Myanmar Kyat */
  Mmk = 'MMK',
  /** Mongolian Tugrik */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (1973–2017) */
  Mro = 'MRO',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Maltese Lira */
  Mtl = 'MTL',
  /** Maltese Pound */
  Mtp = 'MTP',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rupee (1947–1981) */
  Mvp = 'MVP',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Mexican Silver Peso (1861–1992) */
  Mxp = 'MXP',
  /** Mexican Investment Unit */
  Mxv = 'MXV',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Escudo */
  Mze = 'MZE',
  /** Mozambican Metical (1980–2006) */
  Mzm = 'MZM',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (1988–1991) */
  Nic = 'NIC',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Dutch Guilder */
  Nlg = 'NLG',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Inti */
  Pei = 'PEI',
  /** Peruvian Sol */
  Pen = 'PEN',
  /** Peruvian Sol (1863–1965) */
  Pes = 'PES',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Piso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Zloty */
  Pln = 'PLN',
  /** Polish Zloty (1950–1995) */
  Plz = 'PLZ',
  /** Portuguese Escudo */
  Pte = 'PTE',
  /** Paraguayan Guarani */
  Pyg = 'PYG',
  /** Qatari Rial */
  Qar = 'QAR',
  /** Rhodesian Dollar */
  Rhd = 'RHD',
  /** Romanian Leu (1952–2006) */
  Rol = 'ROL',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Russian Ruble (1991–1998) */
  Rur = 'RUR',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Dinar (1992–2007) */
  Sdd = 'SDD',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Sudanese Pound (1957–1998) */
  Sdp = 'SDP',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** St. Helena Pound */
  Shp = 'SHP',
  /** Slovenian Tolar */
  Sit = 'SIT',
  /** Slovak Koruna */
  Skk = 'SKK',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** Surinamese Guilder */
  Srg = 'SRG',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé & Príncipe Dobra (1977–2017) */
  Std = 'STD',
  /** São Tomé & Príncipe Dobra */
  Stn = 'STN',
  /** Soviet Rouble */
  Sur = 'SUR',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Ruble */
  Tjr = 'TJR',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat (1993–2009) */
  Tmm = 'TMM',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Timorese Escudo */
  Tpe = 'TPE',
  /** Turkish Lira (1922–2005) */
  Trl = 'TRL',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad & Tobago Dollar */
  Ttd = 'TTD',
  /** TVD */
  Tvd = 'TVD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ukrainian Karbovanets */
  Uak = 'UAK',
  /** Ugandan Shilling (1966–1987) */
  Ugs = 'UGS',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** US Dollar */
  Usd = 'USD',
  /** US Dollar (Next day) */
  Usn = 'USN',
  /** US Dollar (Same day) */
  Uss = 'USS',
  /** Uruguayan Peso (Indexed Units) */
  Uyi = 'UYI',
  /** Uruguayan Peso (1975–1993) */
  Uyp = 'UYP',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uruguayan Nominal Wage Index Unit */
  Uyw = 'UYW',
  /** Uzbekistani Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar (1871–2008) */
  Veb = 'VEB',
  /** Venezuelan Bolívar (2008–2018) */
  Vef = 'VEF',
  /** Venezuelan Bolívar */
  Ves = 'VES',
  /** Vietnamese Dong */
  Vnd = 'VND',
  /** Vietnamese Dong (1978–1985) */
  Vnn = 'VNN',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** Central African CFA Franc */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account (XBC) */
  Xbc = 'XBC',
  /** European Unit of Account (XBD) */
  Xbd = 'XBD',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** European Currency Unit */
  Xeu = 'XEU',
  /** French Gold Franc */
  Xfo = 'XFO',
  /** French UIC-Franc */
  Xfu = 'XFU',
  /** West African CFA Franc */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP Franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** RINET Funds */
  Xre = 'XRE',
  /** Sucre */
  Xsu = 'XSU',
  /** Testing Currency Code */
  Xts = 'XTS',
  /** ADB Unit of Account */
  Xua = 'XUA',
  /** The codes assigned for transactions where no currency is involved */
  Xxx = 'XXX',
  /** Yemeni Dinar */
  Ydd = 'YDD',
  /** Yemeni Rial */
  Yer = 'YER',
  /** Yugoslavian Hard Dinar (1966–1990) */
  Yud = 'YUD',
  /** Yugoslavian New Dinar (1994–2002) */
  Yum = 'YUM',
  /** Yugoslavian Convertible Dinar (1990–1992) */
  Yun = 'YUN',
  /** Yugoslavian Reformed Dinar (1992–1993) */
  Yur = 'YUR',
  /** South African Rand (financial) */
  Zal = 'ZAL',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha (1968–2012) */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zairean New Zaire (1993–1998) */
  Zrn = 'ZRN',
  /** Zairean Zaire (1971–1993) */
  Zrz = 'ZRZ',
  /** Zimbabwean Dollar (1980–2008) */
  Zwd = 'ZWD',
  /** Zimbabwean Dollar (2009) */
  Zwl = 'ZWL',
  /** ZWN */
  Zwn = 'ZWN',
  /** Zimbabwean Dollar (2008) */
  Zwr = 'ZWR',
}

/** An enumeration. */
export enum BusinessStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Suspended */
  Suspended = 'SUSPENDED',
}

export type BusinessType = {
  __typename?: 'BusinessType';
  businessType?: Maybe<BusinessBusinessType>;
  category?: Maybe<BusinessCategory>;
  created: Scalars['DateTime'];
  dailySales?: Maybe<Scalars['String']>;
  dailySalesCurrency: BusinessDailySalesCurrency;
  description: Scalars['String'];
  id: Scalars['ID'];
  isRemoved: Scalars['Boolean'];
  modified: Scalars['DateTime'];
  name: Scalars['String'];
  operatingCapital?: Maybe<Scalars['String']>;
  operatingCapitalCurrency: BusinessOperatingCapitalCurrency;
  ownerSet: Array<OwnerType>;
  registrationNumber?: Maybe<Scalars['String']>;
  status?: Maybe<BusinessStatus>;
  suspensionReason?: Maybe<Scalars['String']>;
  yearsInCurrentLocation: Scalars['Int'];
};

/** An enumeration. */
export enum ContactRecordMechanism {
  /** Email */
  Email = 'EMAIL',
  /** Slack */
  Slack = 'SLACK',
  /** Text Message (SMS) */
  Sms = 'SMS',
}

export type ContactRecordType = {
  __typename?: 'ContactRecordType';
  created: Scalars['DateTime'];
  definitionKey?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mechanism: ContactRecordMechanism;
  modified: Scalars['DateTime'];
  sentBy?: Maybe<UserType>;
  sentFromEmailAddress: Scalars['String'];
  sentFromSenderId: Scalars['String'];
  sentTo: UserType;
  sentToEmailAddress: Scalars['String'];
  sentToPhoneNumber: Scalars['String'];
  sentToSlackUsernameOrChannel: Scalars['String'];
  subject: Scalars['String'];
  succeeded: Scalars['Boolean'];
  textContent: Scalars['String'];
};

export type CountryInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type LoanPortfolioInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

/** An enumeration. */
export enum LoanPortfolioStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Closed */
  Closed = 'CLOSED',
}

export type LoanPortfolioType = {
  __typename?: 'LoanPortfolioType';
  created: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  isRemoved: Scalars['Boolean'];
  modified: Scalars['DateTime'];
  name: Scalars['String'];
  owners: Array<UserType>;
  status: LoanPortfolioStatus;
};

export type LocalityInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<StateInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBusiness?: Maybe<AddBusinessMutation>;
  addLoanPortfolio?: Maybe<AddLoanPortlioMutation>;
  assignPortfolioManager?: Maybe<AssignPortfolioManagerMutation>;
  refreshToken?: Maybe<Refresh>;
  revokeToken?: Maybe<Revoke>;
  sendSmsToNumbers?: Maybe<SmsToNumbersMutation>;
  sendSmsToUsers?: Maybe<SmsToUsersMutation>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  unAssignPortfolioManager?: Maybe<UnAssignPortfolioManagerMutation>;
  updateLoanPortfolio?: Maybe<UpdateLoanPortfolioMutation>;
  updatePortfolioManagers?: Maybe<UpdatePortfolioManagers>;
  verifyToken?: Maybe<Verify>;
};

export type MutationAddBusinessArgs = {
  business?: Maybe<BusinessInput>;
  owner?: Maybe<OwnerInput>;
  user?: Maybe<UserInput>;
};

export type MutationAddLoanPortfolioArgs = {
  portfolio: LoanPortfolioInput;
};

export type MutationAssignPortfolioManagerArgs = {
  portfolioId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};

export type MutationSendSmsToNumbersArgs = {
  phoneNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type MutationSendSmsToUsersArgs = {
  text?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationUnAssignPortfolioManagerArgs = {
  portfolioId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MutationUpdateLoanPortfolioArgs = {
  portfolio?: Maybe<LoanPortfolioInput>;
  portfolioId: Scalars['ID'];
};

export type MutationUpdatePortfolioManagersArgs = {
  portfolioId: Scalars['ID'];
  userIds: Array<Maybe<Scalars['ID']>>;
};

export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum OwnerGender {
  /** Female */
  Female = 'FEMALE',
  /** Male */
  Male = 'MALE',
  /** Other */
  Other = 'OTHER',
}

/** An enumeration. */
export enum OwnerIdentificationMethod {
  /** Driver's License */
  DriverLicense = 'DRIVER_LICENSE',
  /** National ID */
  NationalId = 'NATIONAL_ID',
  /** Passport */
  Passport = 'PASSPORT',
}

export type OwnerInput = {
  businessId?: Maybe<Scalars['ID']>;
  gender: Scalars['String'];
  identificationMethod: Scalars['String'];
  identificationNumber: Scalars['String'];
  maritalStatus?: Maybe<Scalars['String']>;
  numberOfDependants?: Maybe<Scalars['Int']>;
  passportPhoto?: Maybe<Scalars['Upload']>;
  phoneNumber: Scalars['String'];
  roleDefinition?: Maybe<Scalars['String']>;
  totalMonthlyIncome?: Maybe<Scalars['Decimal']>;
};

/** An enumeration. */
export enum OwnerMaritalStatus {
  /** Divorced */
  Divorced = 'DIVORCED',
  /** Married */
  Married = 'MARRIED',
  /** Single */
  Single = 'SINGLE',
  /** Widowed */
  Widowed = 'WIDOWED',
}

/** An enumeration. */
export enum OwnerTotalMonthlyIncomeCurrency {
  /** Andorran Peseta */
  Adp = 'ADP',
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani (1927–2002) */
  Afa = 'AFA',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek (1946–1965) */
  Alk = 'ALK',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Angolan Kwanza (1977–1991) */
  Aok = 'AOK',
  /** Angolan New Kwanza (1990–2000) */
  Aon = 'AON',
  /** Angolan Readjusted Kwanza (1995–1999) */
  Aor = 'AOR',
  /** Argentine Austral */
  Ara = 'ARA',
  /** Argentine Peso Ley (1970–1983) */
  Arl = 'ARL',
  /** Argentine Peso (1881–1970) */
  Arm = 'ARM',
  /** Argentine Peso (1983–1985) */
  Arp = 'ARP',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Austrian Schilling */
  Ats = 'ATS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat (1993–2006) */
  Azm = 'AZM',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia-Herzegovina Dinar (1992–1994) */
  Bad = 'BAD',
  /** Bosnia-Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Bosnia-Herzegovina New Dinar (1994–1997) */
  Ban = 'BAN',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Belgian Franc (convertible) */
  Bec = 'BEC',
  /** Belgian Franc */
  Bef = 'BEF',
  /** Belgian Franc (financial) */
  Bel = 'BEL',
  /** Bulgarian Hard Lev */
  Bgl = 'BGL',
  /** Bulgarian Socialist Lev */
  Bgm = 'BGM',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bulgarian Lev (1879–1952) */
  Bgo = 'BGO',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudan Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Bolivian Boliviano (1863–1963) */
  Bol = 'BOL',
  /** Bolivian Peso */
  Bop = 'BOP',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian New Cruzeiro (1967–1986) */
  Brb = 'BRB',
  /** Brazilian Cruzado (1986–1989) */
  Brc = 'BRC',
  /** Brazilian Cruzeiro (1990–1993) */
  Bre = 'BRE',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Brazilian New Cruzado (1989–1990) */
  Brn = 'BRN',
  /** Brazilian Cruzeiro (1993–1994) */
  Brr = 'BRR',
  /** Brazilian Cruzeiro (1942–1967) */
  Brz = 'BRZ',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Burmese Kyat */
  Buk = 'BUK',
  /** Botswanan Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble (1994–1999) */
  Byb = 'BYB',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble (2000–2016) */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss Franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Chilean Escudo */
  Cle = 'CLE',
  /** Chilean Unit of Account (UF) */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Yuan (offshore) */
  Cnh = 'CNH',
  /** Chinese People’s Bank Dollar */
  Cnx = 'CNX',
  /** Chinese Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Colombian Real Value Unit */
  Cou = 'COU',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Serbian Dinar (2002–2006) */
  Csd = 'CSD',
  /** Czechoslovak Hard Koruna */
  Csk = 'CSK',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Cypriot Pound */
  Cyp = 'CYP',
  /** Czech Koruna */
  Czk = 'CZK',
  /** East German Mark */
  Ddm = 'DDM',
  /** German Mark */
  Dem = 'DEM',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Ecuadorian Sucre */
  Ecs = 'ECS',
  /** Ecuadorian Unit of Constant Value */
  Ecv = 'ECV',
  /** Estonian Kroon */
  Eek = 'EEK',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Spanish Peseta (A account) */
  Esa = 'ESA',
  /** Spanish Peseta (convertible account) */
  Esb = 'ESB',
  /** Spanish Peseta */
  Esp = 'ESP',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Finnish Markka */
  Fim = 'FIM',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Islands Pound */
  Fkp = 'FKP',
  /** French Franc */
  Frf = 'FRF',
  /** British Pound */
  Gbp = 'GBP',
  /** Georgian Kupon Larit */
  Gek = 'GEK',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Ghanaian Cedi (1979–2007) */
  Ghc = 'GHC',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guinean Syli */
  Gns = 'GNS',
  /** Equatorial Guinean Ekwele */
  Gqe = 'GQE',
  /** Greek Drachma */
  Grd = 'GRD',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Portuguese Guinea Escudo */
  Gwe = 'GWE',
  /** Guinea-Bissau Peso */
  Gwp = 'GWP',
  /** Guyanaese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Dinar */
  Hrd = 'HRD',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Irish Pound */
  Iep = 'IEP',
  /** Israeli Pound */
  Ilp = 'ILP',
  /** Israeli Shekel (1980–1985) */
  Ilr = 'ILR',
  /** Israeli New Shekel */
  Ils = 'ILS',
  /** IMP */
  Imp = 'IMP',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna (1918–1981) */
  Isj = 'ISJ',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Italian Lira */
  Itl = 'ITL',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgystani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Hwan (1953–1962) */
  Krh = 'KRH',
  /** South Korean Won (1945–1953) */
  Kro = 'KRO',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Laotian Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Lithuanian Litas */
  Ltl = 'LTL',
  /** Lithuanian Talonas */
  Ltt = 'LTT',
  /** Luxembourgian Convertible Franc */
  Luc = 'LUC',
  /** Luxembourgian Franc */
  Luf = 'LUF',
  /** Luxembourg Financial Franc */
  Lul = 'LUL',
  /** Latvian Lats */
  Lvl = 'LVL',
  /** Latvian Ruble */
  Lvr = 'LVR',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moroccan Franc */
  Maf = 'MAF',
  /** Monegasque Franc */
  Mcf = 'MCF',
  /** Moldovan Cupon */
  Mdc = 'MDC',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Malagasy Franc */
  Mgf = 'MGF',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Macedonian Denar (1992–1993) */
  Mkn = 'MKN',
  /** Malian Franc */
  Mlf = 'MLF',
  /** Myanmar Kyat */
  Mmk = 'MMK',
  /** Mongolian Tugrik */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (1973–2017) */
  Mro = 'MRO',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Maltese Lira */
  Mtl = 'MTL',
  /** Maltese Pound */
  Mtp = 'MTP',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rupee (1947–1981) */
  Mvp = 'MVP',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Mexican Silver Peso (1861–1992) */
  Mxp = 'MXP',
  /** Mexican Investment Unit */
  Mxv = 'MXV',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Escudo */
  Mze = 'MZE',
  /** Mozambican Metical (1980–2006) */
  Mzm = 'MZM',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (1988–1991) */
  Nic = 'NIC',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Dutch Guilder */
  Nlg = 'NLG',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Inti */
  Pei = 'PEI',
  /** Peruvian Sol */
  Pen = 'PEN',
  /** Peruvian Sol (1863–1965) */
  Pes = 'PES',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Piso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Zloty */
  Pln = 'PLN',
  /** Polish Zloty (1950–1995) */
  Plz = 'PLZ',
  /** Portuguese Escudo */
  Pte = 'PTE',
  /** Paraguayan Guarani */
  Pyg = 'PYG',
  /** Qatari Rial */
  Qar = 'QAR',
  /** Rhodesian Dollar */
  Rhd = 'RHD',
  /** Romanian Leu (1952–2006) */
  Rol = 'ROL',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Russian Ruble (1991–1998) */
  Rur = 'RUR',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Dinar (1992–2007) */
  Sdd = 'SDD',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Sudanese Pound (1957–1998) */
  Sdp = 'SDP',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** St. Helena Pound */
  Shp = 'SHP',
  /** Slovenian Tolar */
  Sit = 'SIT',
  /** Slovak Koruna */
  Skk = 'SKK',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** Surinamese Guilder */
  Srg = 'SRG',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé & Príncipe Dobra (1977–2017) */
  Std = 'STD',
  /** São Tomé & Príncipe Dobra */
  Stn = 'STN',
  /** Soviet Rouble */
  Sur = 'SUR',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Ruble */
  Tjr = 'TJR',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat (1993–2009) */
  Tmm = 'TMM',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Timorese Escudo */
  Tpe = 'TPE',
  /** Turkish Lira (1922–2005) */
  Trl = 'TRL',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad & Tobago Dollar */
  Ttd = 'TTD',
  /** TVD */
  Tvd = 'TVD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ukrainian Karbovanets */
  Uak = 'UAK',
  /** Ugandan Shilling (1966–1987) */
  Ugs = 'UGS',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** US Dollar */
  Usd = 'USD',
  /** US Dollar (Next day) */
  Usn = 'USN',
  /** US Dollar (Same day) */
  Uss = 'USS',
  /** Uruguayan Peso (Indexed Units) */
  Uyi = 'UYI',
  /** Uruguayan Peso (1975–1993) */
  Uyp = 'UYP',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uruguayan Nominal Wage Index Unit */
  Uyw = 'UYW',
  /** Uzbekistani Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar (1871–2008) */
  Veb = 'VEB',
  /** Venezuelan Bolívar (2008–2018) */
  Vef = 'VEF',
  /** Venezuelan Bolívar */
  Ves = 'VES',
  /** Vietnamese Dong */
  Vnd = 'VND',
  /** Vietnamese Dong (1978–1985) */
  Vnn = 'VNN',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** Central African CFA Franc */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account (XBC) */
  Xbc = 'XBC',
  /** European Unit of Account (XBD) */
  Xbd = 'XBD',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** European Currency Unit */
  Xeu = 'XEU',
  /** French Gold Franc */
  Xfo = 'XFO',
  /** French UIC-Franc */
  Xfu = 'XFU',
  /** West African CFA Franc */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP Franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** RINET Funds */
  Xre = 'XRE',
  /** Sucre */
  Xsu = 'XSU',
  /** Testing Currency Code */
  Xts = 'XTS',
  /** ADB Unit of Account */
  Xua = 'XUA',
  /** The codes assigned for transactions where no currency is involved */
  Xxx = 'XXX',
  /** Yemeni Dinar */
  Ydd = 'YDD',
  /** Yemeni Rial */
  Yer = 'YER',
  /** Yugoslavian Hard Dinar (1966–1990) */
  Yud = 'YUD',
  /** Yugoslavian New Dinar (1994–2002) */
  Yum = 'YUM',
  /** Yugoslavian Convertible Dinar (1990–1992) */
  Yun = 'YUN',
  /** Yugoslavian Reformed Dinar (1992–1993) */
  Yur = 'YUR',
  /** South African Rand (financial) */
  Zal = 'ZAL',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha (1968–2012) */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW',
  /** Zairean New Zaire (1993–1998) */
  Zrn = 'ZRN',
  /** Zairean Zaire (1971–1993) */
  Zrz = 'ZRZ',
  /** Zimbabwean Dollar (1980–2008) */
  Zwd = 'ZWD',
  /** Zimbabwean Dollar (2009) */
  Zwl = 'ZWL',
  /** ZWN */
  Zwn = 'ZWN',
  /** Zimbabwean Dollar (2008) */
  Zwr = 'ZWR',
}

export type OwnerType = {
  __typename?: 'OwnerType';
  business: BusinessType;
  created: Scalars['DateTime'];
  gender?: Maybe<OwnerGender>;
  id: Scalars['ID'];
  identificationMethod: OwnerIdentificationMethod;
  identificationNumber: Scalars['String'];
  isRemoved: Scalars['Boolean'];
  maritalStatus?: Maybe<OwnerMaritalStatus>;
  modified: Scalars['DateTime'];
  numberOfDependants: Scalars['Int'];
  passportPhoto: Scalars['String'];
  phoneNumber: Scalars['String'];
  roleDefinition: Scalars['String'];
  totalMonthlyIncome?: Maybe<Scalars['Decimal']>;
  totalMonthlyIncomeCurrency: OwnerTotalMonthlyIncomeCurrency;
  user: UserType;
};

export type Query = {
  __typename?: 'Query';
  business?: Maybe<BusinessType>;
  businessContactRecords?: Maybe<Array<Maybe<ContactRecordType>>>;
  businessOwners?: Maybe<Array<Maybe<OwnerType>>>;
  businesses?: Maybe<Array<Maybe<BusinessType>>>;
  contactRecords?: Maybe<Array<Maybe<ContactRecordType>>>;
  loanPortfolio?: Maybe<LoanPortfolioType>;
  loanPortfolios?: Maybe<Array<Maybe<LoanPortfolioType>>>;
  me?: Maybe<UserType>;
  staffUsers?: Maybe<Array<Maybe<UserType>>>;
  test?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type QueryBusinessArgs = {
  id: Scalars['ID'];
};

export type QueryBusinessContactRecordsArgs = {
  businessId: Scalars['ID'];
};

export type QueryContactRecordsArgs = {
  userId: Scalars['ID'];
};

export type QueryLoanPortfolioArgs = {
  id: Scalars['ID'];
};

export type QueryLoanPortfoliosArgs = {
  status?: Maybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Revoke = {
  __typename?: 'Revoke';
  revoked?: Maybe<Scalars['Int']>;
};

export type SmsToNumbersMutation = {
  __typename?: 'SmsToNumbersMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type SmsToUsersMutation = {
  __typename?: 'SmsToUsersMutation';
  contactRecords?: Maybe<Array<Maybe<ContactRecordType>>>;
};

export type StateInput = {
  code?: Maybe<Scalars['String']>;
  country?: Maybe<CountryInput>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type UnAssignPortfolioManagerMutation = {
  __typename?: 'UnAssignPortfolioManagerMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateLoanPortfolioMutation = {
  __typename?: 'UpdateLoanPortfolioMutation';
  portfolio?: Maybe<LoanPortfolioType>;
};

export type UpdatePortfolioManagers = {
  __typename?: 'UpdatePortfolioManagers';
  success?: Maybe<Scalars['Boolean']>;
};

export type UserInput = {
  email?: Maybe<Scalars['String']>;
  firstNames?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  contactsReceived: Array<ContactRecordType>;
  contactsSent: Array<ContactRecordType>;
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  loanportfolioSet: Array<LoanPortfolioType>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<OwnerType>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
};

export type OwnerFragmentFragment = {
  __typename?: 'OwnerType';
  id: string;
  created: any;
  modified: any;
  roleDefinition: string;
  identificationMethod: OwnerIdentificationMethod;
  identificationNumber: string;
  phoneNumber: string;
  numberOfDependants: number;
  gender?: Maybe<OwnerGender>;
  passportPhoto: string;
  user: {
    __typename?: 'UserType';
    name?: Maybe<string>;
    firstName: string;
    lastName: string;
    email: string;
  };
  business: { __typename?: 'BusinessType'; id: string };
};

export type BusinessFragmentFragment = {
  __typename?: 'BusinessType';
  id: string;
  created: any;
  modified: any;
  name: string;
  description: string;
  businessType?: Maybe<BusinessBusinessType>;
  category?: Maybe<BusinessCategory>;
  registrationNumber?: Maybe<string>;
  status?: Maybe<BusinessStatus>;
  yearsInCurrentLocation: number;
  operatingCapitalCurrency: BusinessOperatingCapitalCurrency;
  operatingCapital?: Maybe<string>;
  dailySalesCurrency: BusinessDailySalesCurrency;
  dailySales?: Maybe<string>;
  ownerSet: Array<{
    __typename?: 'OwnerType';
    user: { __typename?: 'UserType'; name?: Maybe<string>; email: string };
  }>;
};

export type ClientsQueryVariables = Exact<{ [key: string]: never }>;

export type ClientsQuery = {
  __typename?: 'Query';
  businessOwners?: Maybe<
    Array<
      Maybe<{
        __typename?: 'OwnerType';
        id: string;
        created: any;
        modified: any;
        roleDefinition: string;
        identificationMethod: OwnerIdentificationMethod;
        identificationNumber: string;
        phoneNumber: string;
        numberOfDependants: number;
        gender?: Maybe<OwnerGender>;
        passportPhoto: string;
        user: {
          __typename?: 'UserType';
          name?: Maybe<string>;
          firstName: string;
          lastName: string;
          email: string;
        };
        business: { __typename?: 'BusinessType'; id: string };
      }>
    >
  >;
};

export type BusinessQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type BusinessQuery = {
  __typename?: 'Query';
  business?: Maybe<{
    __typename?: 'BusinessType';
    id: string;
    created: any;
    modified: any;
    name: string;
    description: string;
    businessType?: Maybe<BusinessBusinessType>;
    category?: Maybe<BusinessCategory>;
    registrationNumber?: Maybe<string>;
    status?: Maybe<BusinessStatus>;
    yearsInCurrentLocation: number;
    operatingCapitalCurrency: BusinessOperatingCapitalCurrency;
    operatingCapital?: Maybe<string>;
    dailySalesCurrency: BusinessDailySalesCurrency;
    dailySales?: Maybe<string>;
    ownerSet: Array<{
      __typename?: 'OwnerType';
      user: { __typename?: 'UserType'; name?: Maybe<string>; email: string };
    }>;
  }>;
};

export type RegisterClientMutationVariables = Exact<{
  business: BusinessInput;
  owner: OwnerInput;
  user: UserInput;
}>;

export type RegisterClientMutation = {
  __typename?: 'Mutation';
  addBusiness?: Maybe<{
    __typename?: 'AddBusinessMutation';
    businessOwner?: Maybe<{
      __typename?: 'OwnerType';
      id: string;
      created: any;
      modified: any;
      roleDefinition: string;
      identificationMethod: OwnerIdentificationMethod;
      identificationNumber: string;
      phoneNumber: string;
      numberOfDependants: number;
      gender?: Maybe<OwnerGender>;
      passportPhoto: string;
      user: {
        __typename?: 'UserType';
        name?: Maybe<string>;
        firstName: string;
        lastName: string;
        email: string;
      };
      business: { __typename?: 'BusinessType'; id: string };
    }>;
  }>;
};

export type LoanPortoliosQueryVariables = Exact<{ [key: string]: never }>;

export type LoanPortoliosQuery = {
  __typename?: 'Query';
  loanPortfolios?: Maybe<
    Array<
      Maybe<{
        __typename?: 'LoanPortfolioType';
        id: string;
        name: string;
        description: string;
      }>
    >
  >;
};

export type LoanPortolioQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type LoanPortolioQuery = {
  __typename?: 'Query';
  loanPortfolio?: Maybe<{
    __typename?: 'LoanPortfolioType';
    id: string;
    name: string;
    description: string;
    owners: Array<{
      __typename?: 'UserType';
      id: string;
      name?: Maybe<string>;
    }>;
  }>;
};

export type CreateLoanPortfolioMutationVariables = Exact<{
  portfolio: LoanPortfolioInput;
}>;

export type CreateLoanPortfolioMutation = {
  __typename?: 'Mutation';
  addLoanPortfolio?: Maybe<{
    __typename?: 'AddLoanPortlioMutation';
    portfolio?: Maybe<{ __typename?: 'LoanPortfolioType'; id: string }>;
  }>;
};

export type EditLoanPortfolioMutationVariables = Exact<{
  portfolio: LoanPortfolioInput;
  portfolioId: Scalars['ID'];
}>;

export type EditLoanPortfolioMutation = {
  __typename?: 'Mutation';
  updateLoanPortfolio?: Maybe<{
    __typename?: 'UpdateLoanPortfolioMutation';
    portfolio?: Maybe<{ __typename?: 'LoanPortfolioType'; id: string }>;
  }>;
};

export type UpdatePortfolioManagersMutationVariables = Exact<{
  portfolioId: Scalars['ID'];
  userIds: Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>;
}>;

export type UpdatePortfolioManagersMutation = {
  __typename?: 'Mutation';
  updatePortfolioManagers?: Maybe<{
    __typename?: 'UpdatePortfolioManagers';
    success?: Maybe<boolean>;
  }>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users?: Maybe<
    Array<
      Maybe<{
        __typename?: 'UserType';
        firstName: string;
        lastName: string;
        username: string;
        email: string;
      }>
    >
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: Maybe<{
    __typename?: 'UserType';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
};

export type StaffUsersQueryVariables = Exact<{ [key: string]: never }>;

export type StaffUsersQuery = {
  __typename?: 'Query';
  staffUsers?: Maybe<
    Array<Maybe<{ __typename?: 'UserType'; id: string; name?: Maybe<string> }>>
  >;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  tokenAuth?: Maybe<{
    __typename?: 'ObtainJSONWebToken';
    token?: Maybe<string>;
    refreshToken?: Maybe<string>;
  }>;
};

export type RefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refreshToken?: Maybe<{
    __typename?: 'Refresh';
    token?: Maybe<string>;
    payload?: Maybe<any>;
    refreshToken?: Maybe<string>;
  }>;
};

export const OwnerFragmentFragmentDoc = gql`
  fragment OwnerFragment on OwnerType {
    id
    created
    modified
    roleDefinition
    user {
      name
      firstName
      lastName
      email
    }
    business {
      id
    }
    identificationMethod
    identificationNumber
    phoneNumber
    numberOfDependants
    gender
    passportPhoto
  }
`;
export const BusinessFragmentFragmentDoc = gql`
  fragment BusinessFragment on BusinessType {
    id
    created
    modified
    name
    description
    businessType
    category
    registrationNumber
    status
    yearsInCurrentLocation
    operatingCapitalCurrency
    operatingCapital
    dailySalesCurrency
    dailySales
    ownerSet {
      user {
        name
        email
      }
    }
  }
`;
export const ClientsDocument = gql`
  query Clients {
    businessOwners {
      ...OwnerFragment
    }
  }
  ${OwnerFragmentFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class ClientsGQL extends Apollo.Query<
  ClientsQuery,
  ClientsQueryVariables
> {
  document = ClientsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const BusinessDocument = gql`
  query Business($id: ID!) {
    business(id: $id) {
      ...BusinessFragment
    }
  }
  ${BusinessFragmentFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class BusinessGQL extends Apollo.Query<
  BusinessQuery,
  BusinessQueryVariables
> {
  document = BusinessDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RegisterClientDocument = gql`
  mutation RegisterClient(
    $business: BusinessInput!
    $owner: OwnerInput!
    $user: UserInput!
  ) {
    addBusiness(business: $business, owner: $owner, user: $user) {
      businessOwner {
        ...OwnerFragment
      }
    }
  }
  ${OwnerFragmentFragmentDoc}
`;

@Injectable({
  providedIn: 'root',
})
export class RegisterClientGQL extends Apollo.Mutation<
  RegisterClientMutation,
  RegisterClientMutationVariables
> {
  document = RegisterClientDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LoanPortoliosDocument = gql`
  query LoanPortolios {
    loanPortfolios {
      id
      name
      description
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoanPortoliosGQL extends Apollo.Query<
  LoanPortoliosQuery,
  LoanPortoliosQueryVariables
> {
  document = LoanPortoliosDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LoanPortolioDocument = gql`
  query LoanPortolio($id: ID!) {
    loanPortfolio(id: $id) {
      id
      name
      description
      owners {
        id
        name
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoanPortolioGQL extends Apollo.Query<
  LoanPortolioQuery,
  LoanPortolioQueryVariables
> {
  document = LoanPortolioDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const CreateLoanPortfolioDocument = gql`
  mutation CreateLoanPortfolio($portfolio: LoanPortfolioInput!) {
    addLoanPortfolio(portfolio: $portfolio) {
      portfolio {
        id
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CreateLoanPortfolioGQL extends Apollo.Mutation<
  CreateLoanPortfolioMutation,
  CreateLoanPortfolioMutationVariables
> {
  document = CreateLoanPortfolioDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const EditLoanPortfolioDocument = gql`
  mutation EditLoanPortfolio(
    $portfolio: LoanPortfolioInput!
    $portfolioId: ID!
  ) {
    updateLoanPortfolio(portfolio: $portfolio, portfolioId: $portfolioId) {
      portfolio {
        id
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class EditLoanPortfolioGQL extends Apollo.Mutation<
  EditLoanPortfolioMutation,
  EditLoanPortfolioMutationVariables
> {
  document = EditLoanPortfolioDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdatePortfolioManagersDocument = gql`
  mutation updatePortfolioManagers($portfolioId: ID!, $userIds: [ID]!) {
    updatePortfolioManagers(portfolioId: $portfolioId, userIds: $userIds) {
      success
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdatePortfolioManagersGQL extends Apollo.Mutation<
  UpdatePortfolioManagersMutation,
  UpdatePortfolioManagersMutationVariables
> {
  document = UpdatePortfolioManagersDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UsersDocument = gql`
  query Users {
    users {
      firstName
      lastName
      username
      email
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
  document = UsersDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const StaffUsersDocument = gql`
  query StaffUsers {
    staffUsers {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class StaffUsersGQL extends Apollo.Query<
  StaffUsersQuery,
  StaffUsersQueryVariables
> {
  document = StaffUsersDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<
  LoginMutation,
  LoginMutationVariables
> {
  document = LoginDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const RefreshTokenDocument = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
      payload
      refreshToken
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class RefreshTokenGQL extends Apollo.Mutation<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
> {
  document = RefreshTokenDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
