import React from "react";

// ICONS
import logo from "../../assets/icons/logo-comision.png";
import icon from "../../assets/icons/logo-acde.png";

// INTEGRANTES DE LA COMISION
import ana_pico from "../../assets/images/ana_pico.png";
import arturo_simone from "../../assets/images/arturo_simone.png";
import barbara_harteneck from "../../assets/images/barbara_harteneck.png";
import carolina_abarca from "../../assets/images/carolina_abarca.png";
import catalina_lopez from "../../assets/images/catalina_lopez_lecube.png";
import elena_newkirk from "../../assets/images/elena_newkirk.png";
import fernando_ambroa from "../../assets/images/fernando_ambroa.png";
import fernando_oris_de_roa from "../../assets/images/fernando_oris_de_roa.png";
import gabriel_castelli from "../../assets/images/gabriel_castelli.png";
import gonzalo_tanoira from "../../assets/images/gonzalo_tanoira.png";
import graciela_martini from "../../assets/images/graciela_martini.png";
import hernan_alberro from "../../assets/images/hernan_alberro.png";
import ignacio_cornejo_sola from "../../assets/images/ignacio_cornejo_sola.png";
import ignacio_gorupicz from "../../assets/images/ignacio_gorupicz.png";
import jorge_laroza from "../../assets/images/jorge_la_roza.png";
import maria_gabriela_capacete from "../../assets/images/maria_gabriela_capacete.png";
import sebastian_mocorrea from "../../assets/images/sebastian_mocorrea.png";
import silvia_bulla from "../../assets/images/silvia_bulla.png";
import juan_vaquer from "../../assets/images/vaquer_juan.png";
import victor_valle from "../../assets/images/victor_manuel_valle.png";
import hernan_etchaleco from "../../assets/images/hernan_etchaleco.jpeg";
import gonzalo_oliva from "../../assets/images/gonzalo_oliva.jpeg";

//Componente de Integrante

import Integrante from "../../components/integrante";

const Comision = () => {
  return (
    <div className="comision">
      <div className="container">
        <div className="comision__rectangulo" id="comision">
          <div className="comision__span">
            <img className="logo" src={icon} alt="ACDE" />
            <img src={logo} alt="ACDE" />
            <h1 className="comision__titulo">comisi??n organizadora</h1>
          </div>
        </div>

        <div className="comision__integrantes col-12">
          <div className="col-12 d-flex justify-content-center ">
            <Integrante
              nombre="Ignacio Gorupicz"
              posicion={
                "Presidente del XXIV Encuentro Anual ACDE Socio en McKinsey & Company"
              }
              imagen={ignacio_gorupicz}
              biografia={
                <React.Fragment>
                  Desde hace 12 a??os Ignacio Gorupicz se desempe??a en McKinsey &
                  Company, donde es Socio y L??der de la pr??ctica de
                  Transformaci??n de las Operaciones para Am??rica Latina Hispana.
                  Ha servido m??ltiples clientes en estrategia, transformaci??n
                  digital, operaciones y organizaci??n en el sector privado y
                  p??blico, principalmente, en Argentina, Chile, Brasil, Per?? y
                  Colombia. Anteriormente desarroll?? su carrera en Finanzas
                  Corporativas en Siemens y DuPont. Tiene un MBA de Stanford
                  University y un master en Finanzas de la Universidad Torcuato
                  Di Tella (UTDT). Es Licenciado en Administraci??n y Contador
                  por la Facultad de Ciencias Econ??micas de la Universidad de
                  Buenos Aires (UBA). Miembro del Directorio de la ONG Help
                  Argentina, que canaliza donaciones desde el exterior hacia
                  ONGs en el pa??s. Tambi??n es miembro del Consejo Directivo de
                  la Asociaci??n Cristiana de Dirigentes de Empresa (ACDE).
                </React.Fragment>
              }
            />
          </div>
          <Integrante
            nombre="Carolina Abarca"
            posicion={"Directora Ejecutiva de Fundaci??n Alumbrar"}
            imagen={carolina_abarca}
            biografia={
              <React.Fragment>
                Carolina Abarca es una profesional apasionada por el desarrollo
                humano. Su experiencia combina la participaci??n activa en el
                tercer sector y el desempe??o en empresas privadas, tanto en el
                sector industrial como en servicios. Emprendi?? y co-fund?? Stop
                Tiempo de Mujeres, desde donde se facilitaban espacios de
                inspiraci??n, autoconocimiento y crecimiento personal para
                mujeres. Cantar y escribir son sus cables a tierra. Actualmente
                es Directora Ejecutiva de Fundaci??n Alumbrar, de la cual depende
                Revista Sophia, un medio digital que busca desplegar el alma y
                la sabidur??a humana a trav??s de diferentes formatos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Hern??n Alberro"
            posicion={"Consultor independiente"}
            imagen={hernan_alberro}
            biografia={
              <React.Fragment>
                Hern??n Alberro es consultor independiente especializado en
                gesti??n de proyectos de cooperaci??n internacional, fundraising,
                comunicaci??n y derechos humanos. Actualmente es miembro del
                Consejo Consultivo del Centro para la Apertura y el Desarrollo
                de Am??rica Latina, donde adem??s se desempe???? como Director de
                Programas durante m??s de 15 a??os. Asesora a empresas y
                organizaciones de la sociedad civil en temas de comunicaci??n,
                asuntos p??blicos, gesti??n e incidencia.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Fernando Ambroa"
            posicion={
              "Director y Asesor en empresas nacionales y multinacionales"
            }
            imagen={fernando_ambroa}
            biografia={
              <React.Fragment>
                Fernando Ambroa es ingeniero con Posgrados de Alta Direcci??n en
                Europa y Argentina. Desde hace 25 a??os ocupando posiciones
                ejecutivas en la Alta Direcci??n, como Presidente, CEO,
                Vice-Presidente, Director Regional y Director Ejecutivo en
                empresas multinacionales y nacionales, principalmente en
                sectores de Servicios P??blicos, Servicios Privados,
                Instituciones de formaci??n acad??mica y Empresas de Salud.
                S??lidas competencias adquiridas en liderazgo, transformaci??n,
                desarrollo y conducci??n de equipos, resoluci??n de conflictos,
                negociaci??n, estrategia, planificaci??n, desarrollo de nuevos
                negocios, start-ups, procesos y relaciones con gobiernos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Silvia Bulla"
            posicion={
              "Presidente de Danisco Argentina y Directora de HR de IFF para Am??rica Latina"
            }
            imagen={silvia_bulla}
            biografia={
              <React.Fragment>
                Silvia Bulla es licenciada en Estad??stica de la UNR, posee una
                Maestr??a en Administraci??n de Empresas y certificaci??n de Coach
                otorgada por la International Coaching Federation. Es la
                Presidente de Danisco Argentina y Directora de Recursos Humanos
                para LATAM International Flavors and Fragrancies (IFF). Fue
                Presidente de DuPont Argentina y ocup?? varias posiciones
                regionales en el ??rea de Recursos Humanos de la empresa. En 2020
                fue reconocida como la Mujer destacada del ??mbito empresarial
                por parte de Women Corporate Directors Foundation (WCD) y como
                una de los 10 CEOs m??s influyentes durante la pandemia, seg??n el
                ranking HORSE publicado por Cronista Comercial. Es miembro del
                directorio de AmCham (C??mara de Comercio de USA en Argentina),
                de IDEA (Instituto para el Desarrollo empresarial de Argentina)
                y del CEADS (Consejo Empresario Argentino para el Desarrollo
                Sustentable) y adem??s es miembro del Consejo Directivo de la
                Asociaci??n Cristiana de Dirigentes de Empresa (ACDE).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Mar??a Gabriela Capacete"
            posicion={"Consultora independiente"}
            imagen={maria_gabriela_capacete}
            biografia={
              <React.Fragment>
                Mar??a Gabriela Capacete es consultora en comunicaciones, cultura
                corporativa y crisis de empresas nacionales y multinacionales.
                Tiene una amplia trayectoria de gerenciamiento de ??reas
                institucionales, comunicaci??n corporativa y de negocios, prensa
                y marketing en empresa multinacional.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gabriel E. Castelli"
            posicion={
              "Director externo de Farmacity S.A. y del ICBC Bank S. A."
            }
            imagen={gabriel_castelli}
            biografia={
              <React.Fragment>
                Gabriel Castelli tiene una amplia trayectoria en el sistema
                financiero en el ??rea de finanzas. Actualmente es Director
                externo de Farmacity S.A. y del ICBC Bank S. A. Fue Director
                Nacional de C??ritas Argentina y Secretario Nacional de Ni??ez,
                Adolescencia y Familia del Ministerio de Desarrollo Social de la
                Naci??n.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Ignacio Cornejo Sol??"
            posicion={
              "Responsable de Corporate Affairs, external advisor Arla Foods Ingredients"
            }
            imagen={ignacio_cornejo_sola}
            biografia={
              <React.Fragment>
                Ignacio Cornejo Sol??, es un salte??o que reside en Buenos Aires,
                casado, padre de siete hijos y esperando el catorceavo nieto.
                Recibido de Bachiller en Hutchinson High School Minnesota USA.
                Graduado de Licenciado en Comercio Internacional en UADE
                Argentina. Obtuvo un Degree sobre Seminar Trade Promotion en el
                World Trade Center de Tokio Jap??n. Curs?? en la Universidad de
                Harvard Boston USA el Programa Strategic Marketing Managment.
                Obtuvo certificaci??n del NCBS National Commerce Bank Service
                sobre Inn Store Banking Branch Memphis Tennessee USA. Colabor??
                con diferentes posiciones en organismos del Estado, como
                Ministerio de Relaciones Exteriores y Secretar??a de Comercio, y
                en empresas, como McDonald???s, Vale Rio Doce, Trane Ingersoll
                Rand, entre otras. Actualmente es responsable de PR & Corporate
                Affairs de la empresa danesa Arla Foods Ingredients. Desarroll??
                diferentes proyectos en USA, Indonesia, Rusia, M??xico, Latam,
                India, China, Kuwait y otros pa??ses, enfocados en la Reputaci??n
                de las empresas y sus directivos. Participa en varias ONG???S y
                tiene una ferviente vocaci??n por todos los temas solidarios.
                Mantiene un s??lido relacionamiento con los referentes p??blico ???
                privado en los pa??ses mencionados.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Hern??n Etchaleco"
            posicion={"Director de Identia PR"}
            imagen={hernan_etchaleco}
            biografia={
              <React.Fragment>
                Hern??n Etchaleco es licenciado en Ciencias de la Comunicaci??n
                Social, egresado de la Universidad de Buenos Aires (UBA). Fue
                docente en las carreras de Ciencia Pol??tica y Comunicaci??n
                Social (UBA). Cuenta con una especializaci??n en administraci??n y
                resoluci??n de conflictos (Fundaci??n Friedrich Naumann; Alemania,
                2009). Fue asesor parlamentario en la C??mara de Diputados de la
                Naci??n para el Bloque Coalici??n C??vica-ARI, y jefe de Prensa del
                Bloque Coalici??n C??vica-ARI (C??mara de Diputados de la Naci??n
                2007-2009). Ex periodista especializado en pol??tica, pol??tica
                internacional y econom??a. Especializado en comunicaci??n de
                crisis y conflictos, tiene a su cargo el ??rea de Asuntos
                P??blicos en Identia.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="B??rbara Harteneck"
            posicion={"Directora Ejecutiva de UNAJE"}
            imagen={barbara_harteneck}
            biografia={
              <React.Fragment>
                B??rbara Harteneck se caracteriza por su esp??ritu curioso, en la
                constante exploraci??n y b??squeda de soluciones. Es licenciada en
                Administraci??n de Empresas por la Universidad de Buenos Aires
                (UBA), con varios posgrados, en comunicaci??n, marketing
                corporativo, gesti??n de proyectos sociales y liderazgo
                consciente. Se especializa en el triple impacto de los negocios.
                Cuenta con un recorrido profesional como consultora en temas de
                sustentabilidad, estrategia y comunicaci??n; gesti??n de marcas y
                proyectos; articulaci??n p??blico-privada-OSC. Actualmente es
                Directora Ejecutiva de la Uni??n Argentina de J??venes Empresarios
                y forma parte del equipo de Damasco Sustentabilidad (Empresa B
                Certificada). Fue ayudante de c??tedra en la Facultad de Ciencias
                Econ??micas de la UBA y tutora de emprendimientos del Centro de
                Emprendedores de la FCE, UBA, y facilitadora del programa "Vos
                lo hac??s", del Gobierno de la Ciudad de Buenos Aires.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Jorge La Roza"
            posicion={"Miembro del Consejo Directivo de ACDE"}
            imagen={jorge_laroza}
            biografia={
              <React.Fragment>
                Jorge La Roza es ingeniero agr??nomo por la Universidad Nacional
                del Sur, con estudios ejecutivos en la Universidad de Indiana
                (Bloomington, Estados Unidos). Desde 1977 hasta 2014 ocup??
                diversos puestos en la empresa Dow, donde comenz?? en el
                departamento comercial y lleg?? a ser Presidente para Argentina y
                la Regi??n Sur de Latinoam??rica, luego de una extensa carrera
                internacional de 25 A??os en Am??rica, Europa y Asia. Actualmente
                dedicado a sus emprendimientos personales, integra el Consejo
                Directivo de ACDE, Consejo Asesor de RAP y es Presidente del
                Cap??tulo Educaci??n de Rotary Club.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Catalina L??pez Lecube"
            posicion={"L??der de Comunicaciones & Socios de ACDE"}
            imagen={catalina_lopez}
            biografia={
              <React.Fragment>
                Catalina L??pez Lecube es licenciada en Ciencias de la
                Comunicaci??n por la Universidad de Buenos Aires (UBA). Curs?? la
                Maestr??a en Gesti??n de la Comunicaci??n en las Organizaciones por
                la Universidad Austral. Cuenta con 20 a??os de experiencia
                desarrollada en ??reas de Comunicaci??n y Comercial. Durante 8
                a??os se desempe???? en diversos cargos en los Posgrados de la
                Facultad de Derecho de la Universidad Austral. En marzo de 2017
                ingres?? como Coordinadora de Socios en la Asociaci??n Cristiana
                de Dirigentes de Empresa (ACDE) y, desde enero de 2018, se
                desempe??a como L??der de Comunicaciones & Socios en la misma
                instituci??n.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Graciela Martini"
            posicion={"Directora Asociada de Infomedia"}
            imagen={graciela_martini}
            biografia={
              <React.Fragment>
                Licenciada en Letras, Master de NYU y consultora de comunicaci??n
                corporativa e institucional durante los ??ltimos 30 a??os.
                Actualmente Directora Asociada del grupo INFOMEDIA Consulting,
                especializado en Reputaci??n Corporativa, Comunicaci??n
                Estrat??gica con Medios y Redes Sociales, Gesti??n de Crisis y
                Asuntos P??blicos. Previamente, vicepresidente de Edelman PR
                Argentina, consultora senior de Porter Novelli Argentina y
                fundadora de Grupo Dimco Comunicaci??n. Miembro de varias
                instituciones como ACDE, Consejo de Fundaci??n Luminis y Enablis
                Argentina, Comisi??n Cultura CARI y Vice-presidente de IWF,
                International Women Forum Argentina, entre otras.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Sebasti??n Mocorrea"
            posicion={
              "Presidente de Argencon y Consultor en Estrategia Corporativa, Comunicaciones y Stakeholder Management"
            }
            imagen={sebastian_mocorrea}
            biografia={
              <React.Fragment>
                Sebasti??n Mocorrea es consultor en Estrategia Corporativa,
                Comunicaciones y Stakeholder Management. Desde septiembre de
                2020 es, adem??s, presidente de Argencon. Con m??s de treinta a??os
                de experiencia corporativa, inici?? su carrera en los grupos de
                medios de comunicaci??n Clar??n y Telef??. Fue presidente de la
                Asociaci??n de Televisi??n Argentina (ATA). Desarroll??
                posteriormente una extensa carrera en IBM donde comenz?? como
                Director de Comunicaciones y Relaciones Externas de IBM
                Latinoam??rica Sur. Asumi?? posteriormente las posiciones de
                Director Regional de IBM Latinoam??rica, Vicepresidente de
                Asuntos P??blicos y Regulatorios para IBM Europa y Vicepresidente
                de Global Market Support. Entre 2016 y 2020 fue Vicepresidente
                Ejecutivo de Asuntos Corporativos, Marketing y Comunicaciones de
                YPF. En 2018 fue Deputy Chair de la Taskforce on Energy,
                Resource Efficiency and Sustainability (ERES) del B20. Es
                abogado, graduado en la Facultad de Derecho de la Universidad de
                Buenos Aires y licenciado en Ciencias Pol??ticas de la
                Universidad Cat??lica Argentina. Est?? casado y tiene tres hijos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Elena Newkirk"
            posicion={
              "Periodista especializada en comunicaci??n estrat??gica y pol??ticas p??blicas"
            }
            imagen={elena_newkirk}
            biografia={
              <React.Fragment>
                Elena Newkirk es licenciada en Periodismo de la Universidad del
                Salvador (USAL) y realiz?? la maestr??a en Administraci??n y
                Pol??ticas P??blicas de la Universidad de San Andr??s (UdeSA), en
                Buenos Aires. Durante m??s de diez a??os se dedic?? a las noticias
                en su producci??n televisiva, radial y digital, en medios como
                Todo Noticias, Am??rica TV, Radio La Red y Radio Continental. Se
                desempe???? como redactora y editora interina de pol??tica en el
                diario La Prensa, de Capital Federal. Fue analista de prensa y
                comunicaci??n en el Ministerio de Asuntos P??blicos de la
                Provincia de Buenos Aires durante la gesti??n de Mar??a Eugenia
                Vidal. Y coordin?? la comunicaci??n institucional del Centro para
                la Apertura y el Desarrollo de Am??rica Latina (CADAL).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gonzalo Oliva Beltran"
            posicion={
              "Socio en BARREIRO, OLIVA, DE LUCA, JACA & NICASTRO Abogados"
            }
            imagen={gonzalo_oliva}
            biografia={
              "Gonzalo Oliva Beltr??n es socio fundador de Barreiro, Oliva, De Luca, Jaca & Nicastro. Lidera la pr??ctica de Empresas y Tecnolog??a y asesora regularmente a empresas locales e internacionales en aspectos legales vinculados con finanzas, tecnolog??a, regulaciones cambiarias, fusiones y adquisiciones, derecho corporativo, y ONG.Es abogado egresado de la Universidad Cat??lica Argentina, tiene un M??ster en Derecho Financiero (LL.M. con honores) por la Universidad de Westminster, y es doctorando por la Universidad Austral. Fue fundador de la Fundaci??n GSF y en la actualidad es miembro del Consejo Directivo de la Asociaci??n Cristiana de Dirigentes de Empresa (ACDE) y de la Sociedad Argentina de Cultura."
            }
          />
          <Integrante
            nombre="Fernando Oris de Roa"
            posicion={"Director de Empresa"}
            imagen={fernando_oris_de_roa}
            biografia={
              <React.Fragment>
                Fernando Oris de Roa es empresario emprendedor en compa????as como
                San Miguel y Avex. Director de Orocobre (litio) y otras empresas
                nacionales. Fue Embajador argentino en los Estados Unidos. Tiene
                una maestr??a en Pol??ticas P??blicas de Harvard Kennedy School of
                Government.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Ana Mar??a Pico Aguirre"
            posicion={"Directora Ejecutiva de ACDE"}
            imagen={ana_pico}
            biografia={
              <React.Fragment>
                Ana Mar??a Pico Aguirre es ingeniera industrial por la
                Universidad de Buenos Aires (UBA), con un posgrado en Gesti??n de
                Empresas por la Universidad Cat??lica Argentina (UCA). Es
                Especialista en Organizaciones sin fines de lucro por la
                Universidad de San Andr??s, Di Tella y Cedes. Es Directora
                Ejecutiva de ACDE desde abril de 2016, habiendo ingresado en
                2015 como consultor. Colabora con diferentes Organizaciones
                sociales y es miembro del Consejo Directivo de Fundaci??n
                Escolares. Ha desarrollado su carrera en el ??mbito empresarial,
                especializ??ndose en Log??stica y Consultor??a de procesos. En
                paralelo, siempre tuvo diferentes roles en distintas
                organizaciones sociales: Asociaci??n Civil Mar??a de las C??rceles,
                Fundaci??n Arch?? y Fundaci??n Red Comunidades Rurales. Fue docente
                en materias de grado de Ingenier??a en la UBA, de posgrado de
                UTN- Fundaci??n Andreani y en la Fundaci??n Forge.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Arturo Simone"
            posicion={"Director General Grupo RDA"}
            imagen={arturo_simone}
            biografia={
              <React.Fragment>
                Arturo Simone posee un MBA del CEM, graduado de la carrera de
                Administraci??n de la Universidad Cat??lica Argentina (UCA), de
                donde es ex alumno destacado. Es CEO y fundador de AWTO
                Argentina. Fund?? Grupo RDA (Argentina, Uruguay y Colombia), de
                donde es Director General. Es miembro del Global Fleet Advisory
                Board Latin America. Obtuvo la nominaci??n a Mayor Promesa Forbes
                2019, y fue galardonado Emprendedor Endeavor 2018. Se destac??
                como Board Member de Arval ??? BNP Paribas Group, Presidente de la
                C??mara de Administradores de Flota de Argentina (CAFLA) y
                miembro consultor de ADEFA. Tambi??n integr?? el Latam Mobility
                Lab y es Presidente en Carpro S.A. Adem??s, fue Director de la
                Asociaci??n de Leasing de Argentina, Director The Trade Company
                LLC y Presidente de Subway Argentina. Desde 2016 es miembro de
                la Asociaci??n Cristiana de Dirigentes de Empresa (ACDE) y lidera
                el espacio de ACDE PyME.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Gonzalo Tanoira"
            posicion={"Presidente de ACDE"}
            imagen={gonzalo_tanoira}
            biografia={
              <React.Fragment>
                Gonzalo Tanoira es licenciado en Administraci??n de Empresas por
                la Universidad de Belgrano, tiene un m??ster en Business
                Administration de Wharton School. Es vicepresidente de S.A. San
                Miguel, director del Grupo Pe??aflor S.A. y del Banco Quilvest.
                Es fundador del Movimiento de Dirigentes Cristianos y cofundador
                de GAM (Generaci??n por una Argentina Mejor). Es miembro del
                Consejo Asesor de la Universidad Austral y del IAE. Gan?? el
                Premio LIDE en la categor??a Empresario de Agronegocios, el
                Premio Fortuna a la Mejor empresa agroindustrial (2015), el
                Premio Galicia Excelencia Agropecuaria por mejor Gesti??n
                Ambiental (2017), y el Premio Konex como empresario de la
                agroindustria (2018).
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Victor Valle"
            posicion={
              "Managing Director en Google para los Mercados de Habla Hispana de Am??rica Latina"
            }
            imagen={victor_valle}
            biografia={
              <React.Fragment>
                V??ctor Valle es un ejecutivo de Google Latinoam??rica. En el a??o
                2006 lider?? la apertura de la oficina de Buenos Aires, el tercer
                Headquarter de Google a nivel mundial. Actualmente se desempe??a
                como Managing Director para los Mercados de Habla Hispana de
                Am??rica Latina, siendo responsable del desarrollo del negocio de
                Google Ads para Startups, PyMEs y Grandes Empresas Emergentes en
                la regi??n. Antes de unirse a Google ejerci?? roles de liderazgo
                en Sony, Kimberly-Clark, Havas y PricewaterhouseCoopers. V??ctor
                es Licenciado en Administraci??n de Empresas y Contador P??blico
                de la Universidad Cat??lica Argentina, y MBA de IAE Business
                School. Es miembro del Consejo Asesor de la Universidad Austral
                y Profesor de Posgrado en su Facultad de Comunicaciones. V??ctor
                est?? casado y es padre de cuatro hijos.
              </React.Fragment>
            }
          />
          <Integrante
            nombre="Juan Manuel Vaquer"
            posicion={"Abogado y empresario agropecuario"}
            imagen={juan_vaquer}
            biografia={
              <React.Fragment>
                Juan Manuel Vaquer tiene una explotaci??n familiar agropecuaria,
                se desempe??a como Of Counsel en el Estudio Jur??dico JP
                O??Farrell, integra el Consejo Asesor del Instituto de ??tica y
                Transparencia de AmCham Argentina, el Consejo Asesor de la
                Universidad Austral, y lidera la Red de Gobierno Corporativo de
                IDEA. En 1990 ingres?? a la empresa DuPont, donde ocup?? diversos
                cargos, en Am??rica Latina y en Europa, retir??ndose como
                presidente para Am??rica Latina, en mayo de 2019. Presidi?? la
                C??mara Americana de Comercio en Argentina (AmCham) desde 2013
                hasta junio de 2016, y la Asociaci??n Cristiana de Dirigentes de
                Empresa (ACDE), entre 2017 y 2020. Fue director del Instituto
                para el Desarrollo Empresarial de la Argentina (IDEA), miembro
                de la Comisi??n Directiva del Consejo Empresario Argentino para
                el Desarrollo Sostenible (CEADS) y presidente del Directorio de
                Aleph Midstream S.A.. Es abogado graduado en la Universidad de
                Buenos Aires (UBA), y con una maestr??a en Derecho Internacional
                y Comparado en SMU, de Dallas, Texas
              </React.Fragment>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Comision;
