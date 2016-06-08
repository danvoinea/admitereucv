Meteor.startup(function () {

    // Facultati.remove({});
    
    if (Facultati.find({}).count() === 0) {
          
//        console.log("insert");

        
        Facultati.insert({
            nume: 'Agricultură și Horticultură',
            descriere: 'Facultatea de Agricultură și Horticultură: pregătește specialiști în următoarele domenii: Științe Agricole și Silvice, Științe inginerești și Științe ale naturii. Absolvenții studiilor universitatre de licență își pot exercita profesia în instituțiile de profil agricol, horticol, silvic, geodezic, în industria alimentară, cercetare științifică, sănătate, în diverse structuri administrative APIA, Direcții Sanitar Veterinare, OCPI, Romsilva. Datorită numeroaselor relații de colaborare și parteneriat la nivel național și internațional, facultatea oferă studenților și masteranzilor posibilitatea de a studia în peste 20 de universități partenere din Franța, Anglia, Germania, Belgia, Austria, Spania, Italia, Turcia, Grecia, Serbia etc, prin intermediul burselor oferite.',
            admitere: 'Media exemenului de bacalaureat 100%',
            web: 'http://www.agro-craiova.ro/',
            telefon: '0251.414.541',
            specializari: [
                {
                    nume: 'Agronomie',
                    descriere: 'buget 100, taxă 60, FR 75',
                    specializari: [
                        {
                            nume: 'Agricultură',
                            descriere: '240 credite ZI/FR'
                        },
                        {
                            nume: 'Montanologie',
                            descriere: '240 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Horticultură',
                    descriere: 'buget 60, taxă 35',
                    specializari: [
                        {
                            nume: 'Horticultură',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Peisagistică',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Biologie',
                    descriere: 'buget 40, taxă 20',
                    specializari: [
                        {
                            nume: 'Biologie',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Ingineria mediului',
                    descriere: 'buget 40, taxă 20',
                    specializari: [
                        {
                            nume: 'Inginerie și Protecția Mediului în Agricultură',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Ingineria produselor alimentare',
                    descriere: 'buget 65, taxă 45',
                    specializari: [
                        {
                            nume: 'Tehnologia Prelucrării Produselor Agricole',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Controlul și Expertiza Produselor Alimentare',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Inginerie Geodezică',
                    descriere: 'buget 30, taxă 20',
                    specializari: [
                        {
                            nume: 'Măsurători terestre și cadastru',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Silvicultură',
                    descriere: 'buget 30, taxă 20',
                    specializari: [
                        {
                            nume: 'Silvicultură',
                            descriere: '240 credite zi'
                        }
                    ]
                }
            ]
        });

        Facultati.insert({
            nume: 'Automatică, Calculatoare și Electronică',
            descriere: 'Este una dintre cele patru facultăți de inginerie ale Universității din Craiova. Ca structură de învățământ este cea mai complexă facultate, cu un caracter de mini-politehnică în domeniul științei și tehnologiei informației. Absolvenții facultății sunt absolviți rapid pe piața muncii de către firmele din domenuil IT și domenii conexe, cererea angajaților fiind în contiună creștere. Faculatatea are relații de colaborare academică cu numeroase instituții de învățământ și cercetare prestigioase, din țară și din stăinătate.',
            admitere: 'Pentru domeniile Ingineria Sistemelor , Inginerie Electonică și telecomunicații, Mecatronică și Robotică: Media examenului de Bacalaureat 100%.<br /><br />Pentru domeniul Calculatoare și tehnologia informației: - examen de admitere: 70% nota obținută la examenul scris (matematică sau informatică, la alegere) și 30% nota examenului de la Bacalaureat',
            web: 'http://www.ace.ucv.ro/',
            telefon: '0251.438.198',
 specializari: [
                {
                    nume: 'Ingineria sistemelor',
                    descriere: 'buget 120, taxă 50',
                    specializari: [
                        {
                            nume: 'Automatică și informatică aplicată',
                            descriere: '240 credite ZI'
                        },
                        {
                            nume: 'Ingineria sistemelor multimedia',
                            descriere: '240 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Calculatoare și tehnologia informației',
                    descriere: 'buget 120',
                    specializari: [
                        {
                            nume: 'Calculatoare',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Calculatoare (în limba engleză)',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Inginerie electronică și telecomunicații',
                    descriere: 'buget 45',
                    specializari: [
                        {
                            nume: 'Electronică aplicată',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Mecatronică și robotică',
                    descriere: 'buget 50, taxă 40',
                    specializari: [
                        {
                            nume: 'Mecatronică',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Robotică',
                            descriere: '240 credite zi'
                        }
                    ]
                }
            ]
        });


        Facultati.insert({
            nume: 'Drept',
            descriere: 'Activitatea se desfășoară în amfiteatre moderne, săli de seminar și laboratoare de criminalistică, medicină legală și informatică juridică, toate dotate cu cea mai modernă aparatură.  Facultatea are bibliotecă proprie, cu acces liber la raft și resurse IT. Absolvenții pot beneficia de de acces la doctorate în cotutelă cu profesori din universitățile partenere: Dijon, Lille, Fribourg.',
            admitere:'Pentru locurile finanțate de la buget, pentru domeniul Drept: concurs – probă scrisă, tip grilă la disciplina „Limba română”',
            web: 'http://drept.ucv.ro',
            telefon: '0351.177.100',
                        specializari: [
                {
                    nume: 'Drept',
                    descriere: 'buget 168, taxă 120, FR 100',
                    specializari: [
                        {
                            nume: 'Drept',
                            descriere: '240 credite ZI/FR'
                        }
                    ]
                },
                {
                    nume: 'Științe Administrative',
                    descriere: 'buget 68, taxă 120',
                    specializari: [
                        {
                            nume: 'Administrație publică',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Administrație publică (Drobeta Turnu Severin)',
                            descriere: '240 credite zi'
                        }
                    ]
                }
            ]
        });


        Facultati.insert({
            nume: 'Economie și Administrarea Afacerilor',
            descriere: 'Este cea mai mare dintre facultățile Universității din Craiova, are peste 3500 de studenți. Facultatea colaborează cu peste 30 de universități de prestigiu din străinătate. Cunoștințele dobândite în domeniu le oferă absolvenților abilități pentru înființarea și gestionarea afacerilor. Pot să desfășoare activități în profesii ca: antreprenor, consultant proiecte europene, analist de piață, cercetător științific etc.',
            admitere: 'Media examenului de bacalaureat 100%. Scrisoare de intenție evaluată prin calificativ admis/ respins. Probă de competență lingvistică pentru programele de studii cu predare în limba engleză',
            web: 'http://feea.ucv.ro',
            telefon: '0351.411.317',
            specializari: [
                {
                    nume: 'Finanțe',
                    descriere: '180 credite ZI/ID',
                    specializari: [
                        {
                            nume: 'Finanțe și bănci (română și engleză)',
                            descriere: 'buget 80, taxă 70, ID 50'
                        },
                        {
                            nume: 'Finanțe și bănci (Drobeta Turnu Severin)',
                            descriere: 'buget 30, taxă 20'
                        }
                    ]
                },
                {
                    nume: 'Management',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Management',
                            descriere: 'buget 50, taxă 50, ID 100'
                        },
                        {
                            nume: 'Management (Drobeta Turnu Severin)',
                            descriere: 'taxă 30'
                        }
                    ]
                },
                {
                    nume: 'Administrarea Afacerilor',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Economia comerțului, turismului și serviciilor',
                            descriere: 'buget 40, taxă 50'
                        },
                        {
                            nume: 'Administrarea afacerilor (Drobeta Turnu Severin)',
                            descriere: 'buget 30, taxă 20'
                        }
                    ]
                },
                {
                    nume: 'Contabilitate',
                    descriere: '180 credite ZI/ID',
                    specializari: [
                        {
                            nume: 'Contabilitate și informatică de gestiune',
                            descriere: 'buget 60, taxă 60, ID 50'
                        },{
                            nume: 'Contabilitate și informatică de gestiune  (Drobeta Turnu Severin)',
                            descriere: 'buget 25, taxă 25'
                        }
                    ]
                },
                {
                    nume: 'Marketing',
                    descriere: 'buget 35, taxă 30',
                    specializari: [
                        {
                            nume: 'Marketing',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Cibernetică, Statistică și Informatică Economică',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Informatică economică',
                            descriere: 'buget 40, taxă 20'
                        },
                        {
                            nume: 'Statistică și previziune economică',
                            descriere: 'buget 22, taxă 10'
                        }
                    ]
                },
                {
                    nume: 'Economie și Afaceri Internaționale',
                    descriere: 'buget 60, taxă 50',
                    specializari: [
                        {
                            nume: 'Economie și Afaceri Internaționale (română și engleză)',
                            descriere: '180 credite zi'
                        }
                    ]
                }
            ]
        });




        Facultati.insert({
            nume: 'Educație Fizică și Sport ',
            descriere: 'Asigură pregătirea în domeniile Educație Fizică și Sport și Kinetoterapie. Pentru buna desfășurare a procesului de învățământ, oferă studenților o bază material adecvată, ce asigură desfășurarea conținutului didactic cuprins în programele pe discipline corespunzătoare  unui plan de studii acordat la nivel național cu celelalte instituții de pofil ce au la bază ECTS.',
            admitere:'1. Testul de atletism 30%. 2. Testul de gimnastică 30%. 3. Testul de ramură sportivă la alegere: volei, baschet, handbal, fotbal, sporturi de luptă, tenis de masa, scrimă 30%. 4. Media examenului de BAC 10%. Pentru specializarea Kinetoterapie și Motricitate Specială testul de la punctual  se va înlocui cu un test grilă la Biologie',
            web: 'http://cis01.central.ucv.ro/educatie_fizica-kineto/',
            telefon: '0251.422.743',
            specializari: [
                {
                    nume: 'Educație Ficiză și Sport',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Educație Fizică și Sportivă',
                            descriere: 'buget 50, taxă 100'
                        },
                        {
                            nume: 'Educație Fizică și Sportivă (Drobeta Turnu Severin)',
                            descriere: 'buget 20, taxă 40'
                        }
                    ]
                },
                {
                    nume: 'Kinetoterapie',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Kinetoterapie și Motricitate Specială',
                            descriere: 'buget 30, taxă 70'
                        },
                        {
                            nume: 'Kinetoterapie și Motricitate Specială  (Drobeta Turnu Severin)',
                            descriere: 'buget 10, taxă 50'
                        }
                    ]
                }
            ]
        });


        Facultati.insert({
            nume: 'Inginerie Electrică',
            descriere: 'Formată prin unirea Facultății de Electrotehnică cu Facultatea de Inginerie în Electromecanică, Mediu și Informatică Industrială, asigură un mediu educațional conform standardelor eurpene. Facultatea întreține un parteneriat activ cu organizația studenților ( OSPPEC), atât pentru activitățile didactice cât și pentru cele extra-curriculare. Cuprinde Departamentul de Inginerie Electrică, E nergetică și Aerospațială și pe cel de Electromecanică, Mediu și Informatică Industrială.',
            admitere:'100% media de la bacalaureat.',
            web: 'http://ie.ucv.ro',
            telefon: '0251.436.447',
            specializari: [
                {
                    nume: 'Inginerie Electrică',
                    descriere: 'buget 129, taxă 76',
                    specializari: [
                        {
                            nume: 'Electromecanică',
                            descriere: '240 credite ZI/FR'
                        },
                        {
                            nume: 'Inginerie electrică și calculatoare',
                            descriere: '240 credite ZI'
                        },
                        {
                            nume: 'Inginerie electrică și calculatoare (în limba franceză)',
                            descriere: '240 credite ZI'
                        },
                        {
                            nume: 'Sisteme electrice',
                            descriere: '240 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Inginerie Aerospațială',
                    descriere: 'buget 27, taxă 3',
                    specializari: [
                        {
                            nume: 'Elemente și instalații de aviație',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Inginerie Energetică',
                    descriere: 'buget 56, taxă 4',
                    specializari: [
                        {
                            nume: 'Ingineria sistemelor electroenergetice',
                            descriere: '240 credite zi'
                        },
                        {
                            nume: 'Termoenergetică',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Ingineria Mediului',
                    descriere: 'buget 41, taxă 19',
                    specializari: [
                        {
                            nume: 'Inginerie și Protecția Mediului în Industrie',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Științe Inginerești Aplicate',
                    descriere: 'buget 30, taxă 5',
                    specializari: [
                        {
                            nume: 'Informatică aplicată în inginerie electrică',
                            descriere: '240 credite zi'
                        }
                    ]
                }
            ]
        });



        
        Facultati.insert({
            nume: 'Litere',
            descriere: 'Programele de studiu oferite au ca obiectiv formarea de specialiști în domenii ca: Științe umaniste, Științe sociale și politice și Arte. Studenții sunt antrenați pentru sincronizarea cu piața europeană de valori, diplomele elaborate de Facultatea de Litere contribuie direct la inserția în societatea integrată, care este Uniunea Europeană. Studenții pot obține burse de studiu în peste 30 de universități partenere prin programul LLP/ Erasmus.',
            admitere: 'Pentru domeniile Limbă și Literatură, Limbi moderne aplicate, Științe ale comunicării: 100% media examenului de bacalaureat; <br /><br />Pentru domeniul Muzică: Etapa I eliminatorie: proba interpretativă Etapa a II-a  – solfegiu, analiza solfegiului, auz-oral - dictat muzical- scris. <br /><br />Pentru domeniul Științe ale Educației: media examenuli de bacalaureat 100%; Interviu ( probă orală) – admis/ respins; Abilitățile de comunicare ( citirea unui text la prima vedere și prezentarea sintetică a mesajului acestuia, argumentarea opțiunii profesionale pentru cariera didactică); Creativitatea (elaborarea unui text bazat pe povestirea unei experiențe de viață sau pe imaginarea unei situații din viața școlii); <br /><br />Pentru domeniul Teatru: Etapa I, eliminatorie; O probă orală/ practică de testare a aptitudinilor vocale, ritmice și de interpretare ale candidatului; prezentatea unor versuri și a unei povestiri din repertoriul candidatului, la alegerea comisiei. Candidatul va fi notat cu admis sau respins. Etapa a II-a cu notare: - atelier de improvizație - un monolog',
            web: 'http://cis01.central.ucv.ro/litere/',
            telefon: '0252.319.301',
           specializari: [
                {
                    nume: 'Limbă și Literatură',
                    descriere: 'buget 140, taxă 215',
                    specializari: [
                        {
                            nume: 'Limba și literatura română și limbă și literatură modernă la alegere: franceză, engleză, germană, italiană, spaniolă',
                            descriere: '180 credite ZI/ID'
                        },
                        {
                            nume: 'Limba și literatura engleză și o limbă și literatură modernă la alegere: franceză, germană, italiană, spaniolă / Limba și literatura latină',
                            descriere: '180 credite ZI'
                        },
                        {
                            nume: 'Limba și literatura franceză și o limbă și literatură modernă la alegere: engleză, germană, italiană, spaniolă / Limba și literatura latină',
                            descriere: '180 credite ZI'
                        },
                        {
                            nume: 'Limba și literatura română - Limba și literatura latină',
                            descriere: '180 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Limbi Moderne Aplicate',
                    descriere: 'buget 20, taxă 20',
                    specializari: [
                        {
                            nume: 'Traducere și interpretare (limba engleză, limba franceză)',
                            descriere: '180 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Științe ale Comunicării',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Comunicare și relații publice',
                            descriere: 'buget 40, taxă 50'
                        },{
                            nume: 'Jurnalism',
                            descriere: 'buget 22, taxă 28'
                        }
                    ]
                },
                {
                    nume: 'Teatru și artele spectacolului',
                    descriere: 'buget 9, taxă 1',
                    specializari: [
                        {
                            nume: 'Artele spectacolului (actorie)',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Muzică',
                    descriere: 'buget 17, taxă 14',
                    specializari: [
                        {
                            nume: 'Pedagogie muzicală',
                            descriere: '180 credite zi'
                        },
                        {
                            nume: 'Interpretare muzicală (canto)',
                            descriere: '180 credite zi'
                        },
                        {
                            nume: 'Interpretare muzicală (instrumente)',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Limbă și Literatură',
                    descriere: 'buget 25, taxă 15',
                    specializari: [
                        {
                            nume: 'Limba și literatura română și o limbă și literatură modernă la alegere: engleză, franceză - Drobeta Turnu Severin',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Științe ale Educației',
                    descriere: '180 credite ZI',
                    specializari: [
                        {
                            nume: 'Pedagogia învățământului primar și preșcolar',
                            descriere: 'buget 20, taxă 40'
                        },{
                            nume: 'Pedagogia învățământului primar și preșcolar - Drobeta Turnu Severin',
                            descriere: 'buget 20, taxă 40'
                        }
                    ]
                }
            ]
        });
        
        

        Facultati.insert({
            nume: 'Mecanică',
            descriere: 'Înființată în urmă cu 40 de ani, continuând tradiția  în învățământul superior mecanic, pregătește ingineri în domenii de vârf ale științei și tehnologiei, asigurând o bază teoretic – aplicativă temeinică, atât prin planurile de învățământ, cât și prin laboratoarele moderne echipate cu standuri și aparatură de înaltă performață și prin existența centrelor de instruire susținute și recunoscute de producători software din domeniu.',
            admitere: 'Media exemenului de bacalaureat 100%',
            web: 'http://mecanica.ucv.ro',
            telefon: '0251.543.739',
            specializari: [
                {
                    nume: 'Ingineria Autovehiculelor',
                    descriere: 'buget 70, taxă 40',
                    specializari: [
                        {
                            nume: 'Autovehicule rutiere',
                            descriere: '240 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Ingineria Transporturilor',
                    descriere: 'buget 39, taxă 21',
                    specializari: [
                        {
                            nume: 'Ingineria transporturilor și a traficului',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Inginerie Civilă',
                    descriere: 'buget 21, taxă 39',
                    specializari: [
                        {
                            nume: 'Construcții civile, industriale și agricole',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Inginerie Industrială',
                    descriere: '240 credite ZI',
                    specializari: [
                        {
                            nume: 'Tehnologia construcțiilor de mașini',
                            descriere: 'buget 50, taxă 10'
                        },
                        {
                            nume: 'Ingineria sudării - Drobeta Turnu Severin',
                            descriere: 'buget 20, taxă 20'
                        }
                    ]
                },
                {
                    nume: 'Inginerie și Management',
                    descriere: '240 credite ZI',
                    specializari: [
                        {
                            nume: 'Inginerie economică în domeniul mecanic',
                            descriere: 'buget 35, taxă 15'
                        },
                        {
                            nume: 'Inginerie economică industrială - Drobeta Turnu Severin',
                            descriere: 'buget 20, taxă 30'
                        }
                    ]
                },
                {
                    nume: 'Ingineria Maritimă și Navigație',
                    descriere: 'buget 20, taxă 10',
                    specializari: [
                        {
                            nume: 'Navigație și transport maritim și fluvial - Drobeta Turnu Severin',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Ingineria Materialelor',
                    descriere: 'buget 20, taxă 10',
                    specializari: [
                        {
                            nume: 'Știința materialelor - Drobeta Turnu Severin',
                            descriere: '240 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Ingineria Mediului',
                    descriere: 'buget 20, taxă 30',
                    specializari: [
                        {
                            nume: 'Ingineria și protecția mediului în industrie - Drobeta Turnu Severin',
                            descriere: '240 credite zi'
                        }
                    ]
                }
            ]
        });


        Facultati.insert({
            nume: 'Matematică și Științe ale Naturii',
            descriere: 'Funcționează cu următoarele departamente: Chimie, Fizică, Geografie, Informatică și Matematică.  Studenții Departamentului de Chimie dobândesc aptitudini practice prin activitățile de laborator și practica de specialitate desfășurată în laboratoarele clinice. Absolvenții pot profesa în sistemul de învățământ, indistrie chimică, petrochimică, laboratoare clinice etc. Studenții Departamentului de Fizică  au șansa de a profesa ca: profesori, cercetători, fizicieni în laboratoare medicale, optometriști și fizicieni în laboratoare de protecția mediului. Absolvenții specializărilor Departamentului de Geografie se pot angaja ca: profesor, hidrolog, meteorolog, agent sau ghid turistic, cartograf, expert la institute de cercetare, în domeniul protecțeie mediului. Studenții din cadrul Departamentelor de Matematică și Informatică beneficiază de o bază materială modernă și de burse de studiu în străinătate. Pot profesa ca cercetători în institute de cercetare, în industrie, sistemul bancar, programatori, analiști programatori, designeri software. Studenții din aceste domenii pot alege în anii 2 și 3 cursuri opționale de mare actualitate, cerute pe piața muncii.',
            admitere:'Media exemenului de bacalaureat 100%',
            web: 'http://stiinte-exacte.ucv.ro/',
            telefon: '0251.413.728',
            specializari: [
                {
                    nume: 'Matematică',
                    descriere: 'buget 50, taxă 50',
                    specializari: [
                        {
                            nume: 'Maetmatică',
                            descriere: '180 credite ZI'
                        },
                        {
                            nume: 'Matematică Informatică',
                            descriere: '180 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Informatică',
                    descriere: 'buget 130, taxă 70',
                    specializari: [
                        {
                            nume: 'Informatică',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Fizică',
                    descriere: 'buget 65, taxă 5',
                    specializari: [
                        {
                            nume: 'Fizică',
                            descriere: '180 credite zi'
                        },{
                            nume: 'Fizică medicală',
                            descriere: '180 credite zi'
                        },{
                            nume: 'Fizică informatică',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Chimie',
                    descriere: 'buget 65, taxă 15',
                    specializari: [
                        {
                            nume: 'Chimie',
                            descriere: '180 credite zi'
                        },{
                            nume: 'Biochimie tehnologică',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Știința Mediului',
                    descriere: 'buget 40, taxă 15',
                    specializari: [
                        {
                            nume: 'Chimia mediului',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Geografie',
                    descriere: 'buget 30, taxă 20',
                    specializari: [
                        {
                            nume: 'Geografie',
                            descriere: '180 credite zi'
                        },{
                            nume: 'Geografia turismului',
                            descriere: '180 credite zi'
                        }
                    ]
                }
            ]
        });



        Facultati.insert({
            nume: 'Teologie Ortodoxă',
            descriere: 'Asigură un mediu educațional conform standardelor europene privind instruirea și formarea profesioanlă. Toate programele de studii universitare de licență din cadrul facultății sunt acreditate să funcționeze de către ARACIS. Departamentul este afiliat la programe europene de colaborare universitară pe perioadă determinată ( LLP/ Erasmus) încheind convenții de parteneriat cu facultăți și institute de tehnologie din Rusia, Norvegia, Elveția, Belgia, Estonia, Italia etc.',
            admitere:'Pentru specializarea Teologie Ortodoxă pastorală: Etapa I – Probe eliminatorii (admis/ respins) -	Examen psihologic -	Verificarea aptitudinilor muzicale ( nu vor participa la acestă probă absolvenții seminariilor și liceelor teologice); Etapa a II- a	 -  Examen scris Teologie Dogmatică 75% - Media Bacalaureat 25%. Criterii de departajare la medii egale: Nota obținută la proba scrisă de Teologie Dogmatică; <br /><br />Pentru specializarea Artă Sacră. Etapa I: - Probe eliminatorii (adims/ respins); - Examen psihologic;  - Interviu; Etapa a II-a: - Probă practică la desen: 75%; - Media examenului de Bacalaureat: 25%; Criterii de departajare la medii egale: Nota obținută la proba practică de desen.',
            web: 'http://teologie.central.ucv.ro/',
            telefon: '0251.413.396',
            specializari: [
                {
                    nume: 'Teologie',
                    descriere: 'buget 50, taxă 30',
                    specializari: [
                        {
                            nume: 'Teologie ortodoxă pastorală',
                            descriere: '240 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Arte vizuale',
                    descriere: 'buget 11, taxă 9',
                    specializari: [
                        {
                            nume: 'Artă sacră',
                            descriere: '180 credite zi'
                        }
                    ]
                }
            ]
        });

        Facultati.insert({
            nume: 'Știinte Sociale',
            descriere: 'Facultatea de Ştiinţe Sociale pregătește specialiști de înaltă clasă în domenii de mare impact asupra vieții social-economice, politice și culturale a țării: Istorie, Filosofie, Sociologie, Științe Politice, Relații Internaționale și studii europene. Absolvenții facultății noastre au posibilitatea de a lucra în institute pentru sondarea opiniei publice, în departamente de resurse umane, consiliere politică, administrație publică, organizații nonguvernamentale, mass-media, servicii de informații, direcții de asistență socială şi instituții de stat cu departamente de politici sociale şi activități de tip consiliere și protecție a victimelor.',
            admitere:'Media exemenului de bacalaureat 100%',
            web: 'http://cis01.central.ucv.ro/ifg/',
            telefon: '0251.418.515',
            specializari: [
                {
                    nume: 'Istorie',
                    descriere: 'buget 20, taxă 25',
                    specializari: [
                        {
                            nume: 'istorie',
                            descriere: '180 credite ZI'
                        }
                    ]
                },
                {
                    nume: 'Relații internaționale și Studii Europene',
                    descriere: 'buget 20, taxă 50',
                    specializari: [
                        {
                            nume: 'Relații internaționale și studii europene',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Sociologie',
                    descriere: 'buget 25, taxă 75',
                    specializari: [
                        {
                            nume: 'Sociologie',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Filosofie',
                    descriere: 'buget 23, taxă 25',
                    specializari: [
                        {
                            nume: 'Filosofie',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Științe Politice',
                    descriere: 'buget 25, taxă 50',
                    specializari: [
                        {
                            nume: 'Științe Politice',
                            descriere: '180 credite zi'
                        }
                    ]
                },
                {
                    nume: 'Asistență Socială',
                    descriere: 'buget 10, taxă 35',
                    specializari: [
                        {
                            nume: 'Asistență Socială',
                            descriere: '180 credite zi'
                        }
                    ]
                },
            ]
        });

    }

});
