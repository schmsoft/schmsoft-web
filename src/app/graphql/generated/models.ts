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
  created: Scalars['DateTime'];
  dailySales?: Maybe<Scalars['Decimal']>;
  dailySalesCurrency: BusinessDailySalesCurrency;
  description: Scalars['String'];
  id: Scalars['ID'];
  isRemoved: Scalars['Boolean'];
  modified: Scalars['DateTime'];
  name: Scalars['String'];
  operatingCapital?: Maybe<Scalars['Decimal']>;
  operatingCapitalCurrency: BusinessOperatingCapitalCurrency;
  ownerSet: Array<OwnerType>;
  registrationNumber?: Maybe<Scalars['String']>;
  status?: Maybe<BusinessStatus>;
  suspensionReason?: Maybe<Scalars['String']>;
  yearsInCurrentLocation: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
};

export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};

export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
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
  /** Driver License */
  DriverLicense = 'DRIVER_LICENSE',
  /** National Id */
  NationalId = 'NATIONAL_ID',
  /** Passport */
  Passport = 'PASSPORT',
}

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
  businessOwners?: Maybe<Array<Maybe<OwnerType>>>;
  businesses?: Maybe<Array<Maybe<BusinessType>>>;
  me?: Maybe<UserType>;
  users?: Maybe<Array<Maybe<UserType>>>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload?: Maybe<Scalars['GenericScalar']>;
  token?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
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

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  tokenAuth?: Maybe<{
    __typename?: 'ObtainJSONWebToken';
    token?: Maybe<string>;
  }>;
};

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
export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
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
