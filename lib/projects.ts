/** Données fictives de démonstration. Structure miroir du futur document Sanity `project`.
 * Migration : créer un projet Sanity, installer next-sanity, puis remplacer getProjects/getProject
 * par des requêtes GROQ sur les mêmes champs (title, slug, coverImage, gallery, description,
 * category, schoolYear, location, status, beforeAfter).
 */
export type Project={title:string;slug:string;coverImage?:string;gallery:string[];description:string;category:string;schoolYear:'2026-2027'|'2027-2028'|'2028-2029';location:string;status:'réalisation'|'archive';beforeAfter?:{before:string;after:string}};
export const projects:Project[]=[
{title:'Appartement Ligne Claire',slug:'appartement-ligne-claire',gallery:['#CFC8BC','#A8B88A'],description:'Une rénovation douce où les circulations se dessinent dans la lumière et les matières minérales.',category:'Appartement parisien',schoolYear:'2026-2027',location:'Paris 11e',status:'réalisation',beforeAfter:{before:'#C8C2BB',after:'#A8B88A'}},
{title:'Café Hémisphère',slug:'cafe-hemisphere',gallery:['#B88E72','#E8E4DF'],description:'Un café de quartier pensé comme une parenthèse chaude : banquette courbe, bois fumé et lumière basse.',category:'Café / restaurant',schoolYear:'2026-2027',location:'Lyon',status:'archive'},
{title:'Maison des Pins',slug:'maison-des-pins',gallery:['#9CA586','#D3C6B5'],description:'Révéler le paysage sans l’encadrer. Une maison de campagne aux seuils généreux et aux teintes silencieuses.',category:'Maison de campagne',schoolYear:'2027-2028',location:'Forêt de Fontainebleau',status:'réalisation',beforeAfter:{before:'#B9B2A8',after:'#9CA586'}},
{title:'Bureau Latitude',slug:'bureau-latitude',gallery:['#B4B0A3','#6F7963'],description:'Des espaces de travail qui alternent concentration et respiration, structurés par une bibliothèque traversante.',category:'Bureau',schoolYear:'2027-2028',location:'Bruxelles',status:'réalisation'},
{title:'Loft des Ateliers',slug:'loft-des-ateliers',gallery:['#8E8176','#D8D1C7'],description:'Conserver la mémoire industrielle du lieu tout en lui offrant une nouvelle fluidité domestique.',category:'Loft',schoolYear:'2027-2028',location:'Paris 10e',status:'archive'},
{title:'Boutique Sillage',slug:'boutique-sillage',gallery:['#C5A89A','#7F896A'],description:'Une écriture retail précise et tactile, où chaque objet trouve son écrin sans jamais saturer l’espace.',category:'Boutique',schoolYear:'2028-2029',location:'Bordeaux',status:'réalisation'},
{title:'Appartement Traverses',slug:'appartement-traverses',gallery:['#D0C4B6','#A7B18E'],description:'Un appartement familial recomposé autour d’une pièce centrale, entre usages quotidiens et gestes singuliers.',category:'Appartement parisien',schoolYear:'2028-2029',location:'Paris 18e',status:'réalisation'},
{title:'Maison Calanque',slug:'maison-calanque',gallery:['#B9C1B0','#D7C2A8'],description:'Une rénovation méditerranéenne retenue, attentive aux ombres, aux vents et aux matériaux locaux.',category:'Maison',schoolYear:'2028-2029',location:'Marseille',status:'archive'}
];
export const getProjects=()=>projects; export const getProject=(slug:string)=>projects.find(p=>p.slug===slug);
