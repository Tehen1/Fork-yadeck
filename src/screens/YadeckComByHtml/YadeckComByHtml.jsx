import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const YadeckComByHtml = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="yadeck-com-by-html">
      <div
        className="overlap-wrapper"
        style={{
          height:
            screenWidth < 1024
              ? "6564.95px"
              : screenWidth >= 1024 && screenWidth < 1920
              ? "5842.16px"
              : screenWidth >= 1920
              ? "6283.45px"
              : undefined,
          width:
            screenWidth < 1024
              ? "390px"
              : screenWidth >= 1024 && screenWidth < 1920
              ? "1024px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        <div
          className="overlap"
          style={{
            height:
              screenWidth < 1024
                ? "6565px"
                : screenWidth >= 1024 && screenWidth < 1920
                ? "5842px"
                : screenWidth >= 1920
                ? "6283px"
                : undefined,
          }}
        >
          <div
            className="section"
            style={{
              height:
                screenWidth < 1024
                  ? "6565px"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "5842px"
                  : screenWidth >= 1920
                  ? "6283px"
                  : undefined,
              width:
                screenWidth < 1024
                  ? "390px"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "1024px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            {screenWidth < 1024 && (
              <>
                <div className="overlap-group">
                  <div className="main">
                    <div className="div-app-background">
                      <img
                        className="div-mx"
                        alt="Div mx"
                        src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-mx-7.png"
                      />
                    </div>
                    <div className="div-el-row">
                      <div className="div-el-col">
                        <div className="div-headband">
                          <div className="div">
                            <div className="div-el-carousel-wrapper">
                              <div className="div-el-carousel">
                                <div className="div-el-carousel-item">
                                  <div className="div-el-image">
                                    <div className="carroussel" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-headband-wrapper">
                              <div className="div-wrapper">
                                <div className="div-headband-wrapper-2">
                                  <div className="heading">
                                    <div className="digital">DIGITAL</div>
                                    <div className="rap">RAP</div>
                                    <div className="league">LEAGUE</div>
                                  </div>
                                  <div className="div-2">
                                    <div className="p-appearing">
                                      <div className="text-wrapper">Mise</div>
                                      <div className="overlap-group-2">
                                        <p className="sur-tes-artistes"> sur tes artistes urbains préférés dans la</p>
                                        <div className="text-wrapper-2">première ligue de</div>
                                        <div className="text-wrapper-3">rap digitale</div>
                                        <div className="text-wrapper-4">.</div>
                                      </div>
                                    </div>
                                    <button className="button">
                                      <div className="span">
                                        <div className="text-wrapper-5">Découvrir les cartes</div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-col-wrapper">
                      <div className="div-artists-and-wrapper">
                        <div className="div-artists-and">
                          <div className="div-el-col-wrapper">
                            <div className="div-main-title-wrapper">
                              <div className="div-main-title">
                                <div className="div-video-container">
                                  <div className="iframe">
                                    <div className="body">
                                      <div className="youtube-video-player">
                                        <div className="overlap-2">
                                          <div className="div-ytp-cued">
                                            <div className="button-play-SVG-wrapper">
                                              <img
                                                className="button-play-SVG"
                                                alt="Button play SVG"
                                                src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/button---play---svg.svg"
                                              />
                                            </div>
                                          </div>
                                          <img
                                            className="div-ytp-gradient-top"
                                            alt="Div ytp gradient top"
                                            src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-gradient-top@2x.png"
                                          />
                                          <div className="div-ytp-chrome-top">
                                            <div className="div-ytp-title">
                                              <div className="div-ytp-title-text">
                                                <div className="link">
                                                  <a
                                                    href="https://www.youtube.com/watch"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                  >
                                                    <p className="p">Découvre Yadeck, le premier j…</p>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <img
                                              className="img"
                                              alt="Div ytp chrome top"
                                              src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-chrome-top-buttons.svg"
                                            />
                                            <div className="div-ytp-title-2">
                                              <img className="link-photo-image-of" alt="Link photo image of" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-2">
                      <div className="div-text-align-wrapper">
                        <div className="div-text-align">
                          <div className="div-el-row-3">
                            <div className="heading-wrapper">
                              <div className="en-collaboration-wrapper">
                                <div className="text-wrapper-6">
                                  En
                                  <br />
                                  collaboration
                                  <br />
                                  avec
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-wrapper">
                              <div className="div-el-row-4">
                                <div className="div-d-flex-wrapper">
                                  <div className="div-d-flex">
                                    <div className="div-el-image-2">
                                      <div className="warnermusicgroup" />
                                    </div>
                                  </div>
                                </div>
                                <div className="div-d-flex-wrapper">
                                  <div className="div-el-image-wrapper">
                                    <div className="div-el-image-2">
                                      <div className="snep-png" />
                                    </div>
                                  </div>
                                </div>
                                <div className="div-d-flex-wrapper">
                                  <div className="div-d-flex-2">
                                    <div className="div-el-image-2">
                                      <div className="booskap-png" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-5">
                      <div className="div-cards-wrapper">
                        <div className="div-cards">
                          <div className="div-px">
                            <div className="div-el-row-6">
                              <div className="div-el-col-2">
                                <div className="div-el-row-7">
                                  <div className="div-el-col-3">
                                    <div className="des-cartes-uniques-wrapper">
                                      <div className="text-wrapper-6">
                                        Des cartes
                                        <br />
                                        uniques et
                                        <br />
                                        numérotées
                                      </div>
                                    </div>
                                    <div className="p-pt">
                                      <div className="overlap-3">
                                        <div className="text-wrapper-7">Achète</div>
                                        <div className="overlap-group-3">
                                          <div className="text-wrapper-8">,</div>
                                          <div className="text-wrapper-9">,</div>
                                          <div className="et"> et</div>
                                          <p className="text-wrapper-10">tes cartes sur la plateforme Yadeck</p>
                                        </div>
                                        <div className="text-wrapper-11">collectionne</div>
                                        <div className="text-wrapper-12">échange</div>
                                        <div className="text-wrapper-13">revends</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="div-el-col-4">
                                <div className="div-el-carousel-2">
                                  <div className="div-el-carousel-item-wrapper">
                                    <div className="div-image-container-wrapper">
                                      <div className="div-image-container">
                                        <div className="div-3">
                                          <div className="niska-legend-wrapper">
                                            <div className="niska-legend" />
                                          </div>
                                        </div>
                                        <div className="div-image-shadow">
                                          <div className="div-image-shadow-2" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-8">
                              <div className="link-wrapper">
                                <div className="button-wrapper">
                                  <button className="span-wrapper">
                                    <div className="span-2">
                                      <a
                                        className="text-wrapper-14"
                                        href="https://yadeck.com/fr/cartes/details"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        En savoir plus
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-9">
                      <div className="div-bet-for-success-wrapper">
                        <div className="div-bet-for-success">
                          <div className="div-limited-width">
                            <div className="div-px-2">
                              <div className="div-el-row-10">
                                <div className="div-el-col-5">
                                  <div className="mise-sur-le-succ-s-wrapper">
                                    <p className="mise-sur-le-succ-s">
                                      Mise sur le
                                      <br />
                                      succès de tes
                                      <br />
                                      artistes
                                      <br />
                                      préférés
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="div-el-row-11">
                                <div className="p-px-xs-wrapper">
                                  <div className="p-px-xs">
                                    <div className="overlap-group-4">
                                      <p className="text-wrapper-15">Chaque semaine, monte un crew de</p>
                                      <div className="text-wrapper-16">5 artistes</div>
                                      <div className="text-wrapper-17">, et</div>
                                      <p className="text-wrapper-18">affronte les autres joueurs de la</p>
                                      <div className="text-wrapper-19">communauté</div>
                                      <div className="text-wrapper-20">Yadeck</div>
                                      <p className="dans-le-tout-premier">
                                        {" "}
                                        dans le tout premier jeu en ligne basé sur
                                      </p>
                                      <p className="text-wrapper-21">les chiffres réels de l’industrie musicale.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <img
                                className="div-el-row-12"
                                alt="Div el row"
                                src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-row.svg"
                              />
                              <div className="div-triggers-scroll">
                                <div className="div-el-row-13">
                                  <div className="div-triggers-wrapper">
                                    <div className="div-triggers">
                                      <div className="div-p">
                                        <p className="semaine-du-au">
                                          <span className="span-3">Semaine du </span>
                                          <span className="span-4">
                                            3 au 9<br />
                                            Novembre 2023
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="div-middle" />
                                </div>
                                <div className="div-el-row-14">
                                  <div className="div-triggers-bet-wrapper">
                                    <div className="div-triggers-bet">
                                      <div className="div-d-flex-3">
                                        <div className="span-card-margin">
                                          <div className="span-card">
                                            <div className="span-background">
                                              <div className="overlap-group-5">
                                                <div className="span-py">
                                                  <div className="ajoute">AJOUTE</div>
                                                </div>
                                                <div className="une-carte-wrapper">
                                                  <div className="une-carte">UNE CARTE</div>
                                                </div>
                                                <div className="span-inside-border" />
                                                <img
                                                  className="span-plus-container"
                                                  alt="Span plus container"
                                                  src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="span-card-margin">
                                          <div className="span-card">
                                            <div className="span-background">
                                              <div className="overlap-group-5">
                                                <div className="span-py">
                                                  <div className="ajoute">AJOUTE</div>
                                                </div>
                                                <div className="une-carte-wrapper">
                                                  <div className="une-carte">UNE CARTE</div>
                                                </div>
                                                <div className="span-inside-border" />
                                                <img
                                                  className="span-plus-container"
                                                  alt="Span plus container"
                                                  src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-1.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="span-card-margin">
                                          <div className="span-card">
                                            <div className="span-background">
                                              <div className="overlap-group-5">
                                                <div className="span-py">
                                                  <div className="ajoute">AJOUTE</div>
                                                </div>
                                                <div className="une-carte-wrapper">
                                                  <div className="une-carte">UNE CARTE</div>
                                                </div>
                                                <div className="span-inside-border" />
                                                <img
                                                  className="span-plus-container"
                                                  alt="Span plus container"
                                                  src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-2.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="div-d-flex-4">
                                        <div className="span-card-margin">
                                          <div className="span-card">
                                            <div className="span-background">
                                              <div className="overlap-group-5">
                                                <div className="span-py">
                                                  <div className="ajoute">AJOUTE</div>
                                                </div>
                                                <div className="une-carte-wrapper">
                                                  <div className="une-carte">UNE CARTE</div>
                                                </div>
                                                <div className="span-inside-border" />
                                                <img
                                                  className="span-plus-container"
                                                  alt="Span plus container"
                                                  src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-3.svg"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="button-margin">
                                          <div className="span-card-wrapper">
                                            <div className="span-background-wrapper">
                                              <div className="overlap-group-wrapper">
                                                <div className="overlap-group-5">
                                                  <div className="ajoute-wrapper">
                                                    <div className="ajoute-2">AJOUTE</div>
                                                  </div>
                                                  <div className="span-py-2">
                                                    <div className="une-carte-2">UNE CARTE</div>
                                                  </div>
                                                  <div className="span-inside-border" />
                                                  <img
                                                    className="span-plus-container-2"
                                                    alt="Span plus container"
                                                    src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-4.svg"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="div-el-row-15">
                                <div className="div-el-col-6">
                                  <div className="link-2">
                                    <button className="button-2">
                                      <div className="span-5">
                                        <a
                                          className="text-wrapper-22"
                                          href="https://yadeck.com/fr/inscription"
                                          rel="noopener noreferrer"
                                          target="_blank"
                                        >
                                          Découvrir le jeu
                                        </a>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-16">
                      <div className="div-earning-wrapper">
                        <div className="div-earning">
                          <div className="div-px-3">
                            <div className="div-el-row-17">
                              <div className="div-el-col-7">
                                <div className="div-el-row-18">
                                  <div className="div-el-col-8">
                                    <div className="pour-gagner-des-lots-wrapper">
                                      <p className="text-wrapper-23">
                                        Pour gagner
                                        <br />
                                        des lots et
                                        <br />
                                        des contenus
                                        <br />
                                        exclusifs
                                      </p>
                                    </div>
                                    <div className="p-pb">
                                      <div className="overlap-group-6">
                                        <div className="text-wrapper-24">Vous pourrez profiter des</div>
                                        <div className="text-wrapper-25">contenus exclusifs</div>
                                        <p className="text-wrapper-26">
                                          proposés par les artistes en achetant leurs
                                          <br />
                                          cartes, et remporter des lots (
                                        </p>
                                        <div className="text-wrapper-27">ether</div>
                                        <div className="text-wrapper-28">,</div>
                                        <div className="text-wrapper-29">cartes</div>
                                        <div className="text-wrapper-30">Yadeck</div>
                                        <div className="ou"> ou</div>
                                        <div className="text-wrapper-31">euros</div>
                                        <div className="text-wrapper-32">) en participant aux</div>
                                        <div className="text-wrapper-33">compétitions chaque semaine.</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="div-xs-earning">
                                <div className="div-earnings">
                                  <div className="div-corner">
                                    <div className="div-slider-wrapper">
                                      <div className="div-slider">
                                        <div className="div-earnings-2">
                                          <div className="div-earning-2">
                                            <div className="div-images-container" />
                                            <div className="div-label-container" />
                                          </div>
                                          <div className="div-earning-3">
                                            <div className="div-images-container-2">
                                              <div className="image-wrapper">
                                                <div className="image" />
                                              </div>
                                            </div>
                                            <div className="ether-wrapper">
                                              <div className="ether">ETHER</div>
                                            </div>
                                          </div>
                                          <div className="div-earning-4">
                                            <div className="div-container-wrapper">
                                              <div className="div-container">
                                                <div className="div-el-image-3">
                                                  <div className="image-2" />
                                                </div>
                                                <div className="div-el-image-4">
                                                  <div className="image-3" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="exclus-wrapper">
                                              <div className="exclus">EXCLUS</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-19">
                              <div className="div-el-col-9">
                                <div className="link-3">
                                  <button className="button-2">
                                    <div className="span-6">
                                      <a
                                        className="text-wrapper-22"
                                        href="https://yadeck.com/fr/jeu/details"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        Découvrir le jeu
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-20">
                      <div className="div-limited-width-wrapper">
                        <div className="div-limited-width-2">
                          <div className="div-el-row-21">
                            <div className="div-el-col-10">
                              <div className="div-el-row-22">
                                <div className="div-el-col-11">
                                  <div className="les-cartes-yadeck-wrapper">
                                    <div className="text-wrapper-23">
                                      Les cartes
                                      <br />
                                      Yadeck
                                      <br />
                                      prennent de
                                      <br />
                                      la valeur
                                    </div>
                                  </div>
                                  <div className="p-pb-2">
                                    <div className="overlap-group-7">
                                      <div className="text-wrapper-34">La</div>
                                      <div className="text-wrapper-35">rareté</div>
                                      <p className="de-la-carte-et-le"> de la carte et le</p>
                                      <div className="text-wrapper-36">succès</div>
                                      <div className="de-l-artiste"> de l&#39;artiste</div>
                                      <p className="text-wrapper-26">
                                        sont des facteurs déterminants pour définir la
                                        <br />
                                        valeur d&#39;une carte.
                                      </p>
                                      <p className="text-wrapper-37">Sois le joueur qui mise sur les bons artistes !</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-col-12">
                              <div className="image-4" />
                            </div>
                          </div>
                          <div className="div-el-row-23">
                            <div className="link-button-wrapper">
                              <div className="link-button">
                                <a
                                  className="text-wrapper-38"
                                  href="https://yadeck.com/fr/cartes/liste"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Acheter une carte
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-el-row-24">
                      <div className="div-el-col-13">
                        <div className="div-m-xs-wrapper">
                          <div className="div-m-xs">
                            <div className="div-el-row-25">
                              <div className="div-el-col-14">
                                <div className="suivez-l-actualit-de-wrapper">
                                  <p className="suivez-l-actualit-de">
                                    <span className="text-wrapper-39">
                                      Suivez
                                      <br />
                                      l&#39;actualité de
                                      <br />
                                      la ligue
                                      <br />
                                    </span>
                                    <span className="text-wrapper-40">#Yadeck_off</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-26">
                              <div className="div-el-col-15">
                                <div className="link-4">
                                  <button className="button-3">
                                    <div className="span-7">
                                      <img
                                        className="div-el-image-5"
                                        alt="Div el image"
                                        src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image.svg"
                                      />
                                      <a
                                        className="twitter"
                                        href="https://twitter.com/yadeck_off"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        TWITTER
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="div-el-col-15">
                                <div className="link-5">
                                  <button className="button-4">
                                    <div className="span-8">
                                      <img
                                        className="div-el-image-5"
                                        alt="Div el image"
                                        src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-1.svg"
                                      />
                                      <a
                                        className="discord"
                                        href="https://discord.gg/75CSpHy3fR"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        DISCORD
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="div-el-col-15">
                                <div className="link-6">
                                  <button className="button-5">
                                    <div className="span-9">
                                      <img
                                        className="div-el-image-6"
                                        alt="Div el image"
                                        src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-2.svg"
                                      />
                                      <a
                                        className="instagram"
                                        href="https://www.instagram.com/yadeck_off"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        {"  "}INSTAGRAM
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="footer">
                    <div className="div-el-row-27">
                      <div className="div-el-col-16">
                        <div className="div-el-row-28">
                          <img
                            className="div-el-col-17"
                            alt="Div el col"
                            src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col.svg"
                          />
                          <div className="div-el-select-wrapper">
                            <div className="div-wrapper-2">
                              <div className="div-wrapper-2">
                                <div className="div-el-input-wrapper">
                                  <div className="div-wrapper-2">
                                    <div className="span-el-input-prefix">
                                      <div className="div-el-image-7">
                                        <div className="image-5" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input">
                                    <div className="fr-wrapper">
                                      <div className="fr">FR</div>
                                    </div>
                                  </div>
                                  <img
                                    className="span-el-input-suffix"
                                    alt="Span el input suffix"
                                    src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-el-input--suffix.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="div-el-row-29">
                          <div className="div-el-col-18">
                            <div className="div-el-row-30">
                              <div className="link-politique-de-wrapper">
                                <a
                                  className="text-wrapper-41"
                                  href="https://yadeck.com/fr/confidentialite"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Politique de confidentialité
                                </a>
                              </div>
                            </div>
                            <div className="div-el-row-31">
                              <div className="link-conditions-g-n-wrapper">
                                <a
                                  className="text-wrapper-41"
                                  href="https://yadeck.com/fr/cgv"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Conditions générales
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="div-el-col-18">
                            <div className="div-el-row-32">
                              <div className="link-les-cartes-wrapper">
                                <a
                                  className="text-wrapper-41"
                                  href="https://yadeck.com/fr/cartes/details"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Les cartes
                                </a>
                              </div>
                              <div className="link-aide-wrapper">
                                <a
                                  className="link-aide"
                                  href="https://help.yadeck.com/fr"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Aide
                                </a>
                              </div>
                            </div>
                            <div className="div-el-row-33">
                              <div className="link-le-concept-wrapper">
                                <a
                                  className="link-le-concept"
                                  href="https://yadeck.com/fr/concept"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Le concept
                                </a>
                              </div>
                              <div className="link-presse-wrapper">
                                <a
                                  className="link-presse"
                                  href="mailto:presse@yadeck.com"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Presse
                                </a>
                              </div>
                            </div>
                            <div className="div-el-row-34">
                              <div className="link-le-jeu-wrapper">
                                <a
                                  className="text-wrapper-41"
                                  href="https://yadeck.com/fr/jeu/details"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Le jeu
                                </a>
                              </div>
                              <div className="link-contact-wrapper">
                                <a
                                  className="link-contact"
                                  href="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/094d5c99-0864-4054-a71a-ddf1c59e7a45"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Contact
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="div-el-col-19">
                            <div className="div-el-row-35">
                              <div className="div-el-col-20">
                                <div className="link-7">
                                  <a
                                    className="text-wrapper-42"
                                    href="https://twitter.com/yadeck_off"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Twitter
                                  </a>
                                  <img
                                    className="div-el-image-5"
                                    alt="Div el image"
                                    src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-3.svg"
                                  />
                                </div>
                              </div>
                              <div className="div-el-col-21">
                                <div className="link-8">
                                  <a
                                    className="text-wrapper-43"
                                    href="https://www.instagram.com/yadeck_off"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Instagram
                                  </a>
                                  <img
                                    className="div-el-image-5"
                                    alt="Div el image"
                                    src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-4.svg"
                                  />
                                </div>
                              </div>
                              <div className="div-el-col-22">
                                <div className="link-9">
                                  <a
                                    className="text-wrapper-44"
                                    href="https://discord.gg/75CSpHy3fR"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    Discord
                                  </a>
                                  <img
                                    className="div-el-image-5"
                                    alt="Div el image"
                                    src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-5.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
                <header className="header">
                  <div className="div-el-row-36">
                    <div className="div-el-col-23">
                      <div className="div-el-row-37">
                        <img
                          className="div-el-col-24"
                          alt="Div el col"
                          src="https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col-1.svg"
                        />
                        <div className="div-el-col-25">
                          <div className="div-d-flex-5">
                            <button className="button-6">
                              <div className="text-wrapper-45">Connexion</div>
                            </button>
                          </div>
                        </div>
                        <div className="div-el-col-26">
                          <div className="div-d-flex-6">
                            <button className="button-7">
                              <div className="text-wrapper-46">Inscription</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="menubar-wrapper">
                        <div className="menubar">
                          <div className="div-mx" />
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </>
            )}

            {((screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920) && (
              <>
                <div
                  className="main-2"
                  style={{
                    top: screenWidth >= 1024 && screenWidth < 1920 ? "73px" : screenWidth >= 1920 ? "74px" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1920 ? "1024px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <div
                    className="div-mx-wrapper"
                    style={{
                      left: screenWidth >= 1024 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "240px" : undefined,
                      width:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "1024px"
                          : screenWidth >= 1920
                          ? "1440px"
                          : undefined,
                    }}
                  >
                    <img
                      className="div-mx"
                      alt="Div mx"
                      src={
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-mx-7-1.png"
                          : screenWidth >= 1920
                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-mx-7-2.png"
                          : undefined
                      }
                    />
                  </div>
                  <div
                    className="div-el-row-38"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "664.39px"
                          : screenWidth >= 1920
                          ? "809.78px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-27"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "664.39px"
                            : screenWidth >= 1920
                            ? "809.78px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240px 0px 240px" : undefined,
                      }}
                    >
                      <div
                        className="div-headband-2"
                        style={{
                          display:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "flex"
                              : screenWidth >= 1920
                              ? "inline-flex"
                              : undefined,
                          width: screenWidth >= 1024 && screenWidth < 1920 ? "1024px" : undefined,
                        }}
                      >
                        <div
                          className="div-el-row-39"
                          style={{
                            alignItems: screenWidth >= 1920 ? "flex-start" : undefined,
                            display: screenWidth >= 1920 ? "flex" : undefined,
                            flexWrap: screenWidth >= 1920 ? "wrap" : undefined,
                            gap: screenWidth >= 1920 ? "0px 0px" : undefined,
                            height:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "664.39px"
                                : screenWidth >= 1920
                                ? "809.78px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-28"
                            style={{
                              display:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "flex"
                                  : screenWidth >= 1920
                                  ? "inline-flex"
                                  : undefined,
                              flex: screenWidth >= 1920 ? "0 0 auto" : undefined,
                              height: screenWidth >= 1920 ? "809.78px" : undefined,
                              left: screenWidth >= 1024 && screenWidth < 1920 ? "427px" : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "597.33px"
                                  : screenWidth >= 1920
                                  ? "600px"
                                  : undefined,
                              overflow: screenWidth >= 1024 && screenWidth < 1920 ? "hidden" : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "0px 0px 88.87px"
                                  : screenWidth >= 1920
                                  ? "80px 48px 246.19px 128px"
                                  : undefined,
                              position:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "absolute"
                                  : screenWidth >= 1920
                                  ? "relative"
                                  : undefined,
                              top: screenWidth >= 1024 && screenWidth < 1920 ? "0" : undefined,
                              width: screenWidth >= 1024 && screenWidth < 1920 ? "597px" : undefined,
                              zIndex: screenWidth >= 1920 ? "1" : undefined,
                            }}
                          >
                            {screenWidth >= 1024 && screenWidth < 1920 && (
                              <>
                                <div className="div-el-carousel-3">
                                  <div className="overlap-group-8">
                                    <div className="div-el-carousel-item-2">
                                      <div className="carroussel-wrapper">
                                        <div className="carroussel-2" />
                                      </div>
                                    </div>
                                    <div className="div-el-carousel-item-3">
                                      <div className="carroussel-wrapper">
                                        <div className="carroussel-3" />
                                      </div>
                                    </div>
                                    <div className="div-el-carousel-item-4">
                                      <div className="carroussel-wrapper">
                                        <div className="carroussel" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="div-duplicated-title">
                                  <div className="heading-2">
                                    <div className="digital-2">DIGITAL</div>
                                    <div className="rap-2">RAP</div>
                                    <div className="league-2">LEAGUE</div>
                                  </div>
                                </div>
                              </>
                            )}

                            {screenWidth >= 1920 && (
                              <div className="div-headband-wrapper-2">
                                <div className="heading-2">
                                  <div className="digital-3">DIGITAL</div>
                                  <div className="rap-3">RAP</div>
                                  <div className="league-3">LEAGUE</div>
                                </div>
                                <div className="div-4">
                                  <div className="p-appearing-2">
                                    <div className="overlap-group-9">
                                      <div className="text-wrapper-47">Mise</div>
                                      <p className="sur-tes-artistes-2">
                                        {" "}
                                        sur tes artistes urbains préférés dans la première
                                      </p>
                                      <div className="text-wrapper-48">ligue de</div>
                                      <div className="text-wrapper-49">rap digitale</div>
                                      <div className="text-wrapper-50">.</div>
                                    </div>
                                  </div>
                                  <button className="button">
                                    <div className="span">
                                      <div className="text-wrapper-5">Découvrir les cartes</div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                          <div
                            className="div-headband-3"
                            style={{
                              display:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "inline-flex"
                                  : screenWidth >= 1920
                                  ? "flex"
                                  : undefined,
                              height: screenWidth >= 1920 ? "809.78px" : undefined,
                              left: screenWidth >= 1024 && screenWidth < 1920 ? "0" : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "426.67px"
                                  : screenWidth >= 1920
                                  ? "840px"
                                  : undefined,
                              overflow: screenWidth >= 1920 ? "hidden" : undefined,
                              padding: screenWidth >= 1024 && screenWidth < 1920 ? "80px 48px 80px 128px" : undefined,
                              position:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "absolute"
                                  : screenWidth >= 1920
                                  ? "relative"
                                  : undefined,
                              top: screenWidth >= 1024 && screenWidth < 1920 ? "80px" : undefined,
                              width: screenWidth >= 1920 ? "840px" : undefined,
                              zIndex: screenWidth >= 1920 ? "0" : undefined,
                            }}
                          >
                            {screenWidth >= 1024 && screenWidth < 1920 && (
                              <div className="div-headband-wrapper-2">
                                <div className="heading-2">
                                  <div className="digital-4">DIGITAL</div>
                                  <div className="rap-4">RAP</div>
                                  <div className="league-4">LEAGUE</div>
                                </div>
                                <div className="div-4">
                                  <div className="p-appearing-3">
                                    <div className="overlap-group-10">
                                      <div className="text-wrapper-47">Mise</div>
                                      <p className="sur-tes-artistes-2"> sur tes artistes urbains</p>
                                      <p className="text-wrapper-51">préférés dans la première ligue de</p>
                                      <div className="text-wrapper-52">rap digitale</div>
                                      <div className="text-wrapper-53">.</div>
                                    </div>
                                  </div>
                                  <button className="button-8">
                                    <div className="span">
                                      <div className="text-wrapper-5">Découvrir les cartes</div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            )}

                            {screenWidth >= 1920 && (
                              <>
                                <div className="div-el-carousel-4">
                                  <div className="div-el-carousel-item-5">
                                    <div className="div-el-image-8">
                                      <div className="carroussel-3" />
                                    </div>
                                  </div>
                                </div>
                                <div className="div-duplicated-title-2">
                                  <div className="heading-2">
                                    <div className="digital-2">DIGITAL</div>
                                    <div className="rap-2">RAP</div>
                                    <div className="league-2">LEAGUE</div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-el-row-40">
                    <div
                      className="div-el-col-29"
                      style={{
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240px" : undefined,
                      }}
                    >
                      <div
                        className="div-artists-and-2"
                        style={{
                          width:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "1024px"
                              : screenWidth >= 1920
                              ? "1440px"
                              : undefined,
                        }}
                      >
                        <div className="body-wrapper">
                          <div
                            className="youtube-video-player-wrapper"
                            style={{
                              left:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "92px"
                                  : screenWidth >= 1920
                                  ? "300px"
                                  : undefined,
                            }}
                          >
                            <div className="youtube-video-player-2">
                              <div className="overlap-group-11">
                                <div
                                  className="img-wrapper"
                                  style={{
                                    backgroundImage:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-cued-thumbnail-overlay-image-1.png)"
                                        : undefined,
                                  }}
                                >
                                  <img
                                    className="button-play-SVG-2"
                                    alt="Button play SVG"
                                    src={
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/button---play---svg-1.svg"
                                        : screenWidth >= 1920
                                        ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/button---play---svg-2.svg"
                                        : undefined
                                    }
                                  />
                                </div>
                                <div className="link-watch-on">
                                  <div className="div-ytp-impression">
                                    <div className="div-ytp-impression-2">
                                      <a
                                        className="text-wrapper-54"
                                        href="https://www.youtube.com/watch"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        Watch on
                                      </a>
                                    </div>
                                    <img
                                      className="div-ytp-impression-3"
                                      alt="Div ytp impression"
                                      src={
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-impression-link-logo.svg"
                                          : screenWidth >= 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-impression-link-logo-1.svg"
                                          : undefined
                                      }
                                    />
                                  </div>
                                </div>
                                <img
                                  className="div-ytp-gradient-top-2"
                                  alt="Div ytp gradient top"
                                  src={
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-gradient-top-1.png"
                                      : undefined
                                  }
                                />
                                <div className="div-ytp-chrome-top-2">
                                  <div className="div-ytp-title-text-wrapper">
                                    <div className="div-ytp-title-text-2">
                                      <div className="link-10">
                                        <a
                                          href="https://www.youtube.com/watch"
                                          rel="noopener noreferrer"
                                          target="_blank"
                                        >
                                          <p className="p">
                                            Découvre Yadeck, le premier jeu en ligne du rap français !
                                          </p>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="button-share-wrapper">
                                    <button className="button-share">
                                      <img
                                        className="div-ytp-share-icon"
                                        alt="Div ytp share icon"
                                        src={
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-share-icon.svg"
                                            : screenWidth >= 1920
                                            ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-ytp-share-icon-1.svg"
                                            : undefined
                                        }
                                      />
                                      <div className="div-ytp-share-title">
                                        <div className="text-wrapper-55">Share</div>
                                      </div>
                                    </button>
                                  </button>
                                  <div className="div-ytp-title-2">
                                    <div
                                      className="div-ytp-title-beacon"
                                      style={{
                                        backgroundColor:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeckcomblack-93)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeckcomblack-08)"
                                            : undefined,
                                        height:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "41px"
                                            : screenWidth >= 1920
                                            ? "50px"
                                            : undefined,
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "5px"
                                            : screenWidth >= 1920
                                            ? "0"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "5px"
                                            : screenWidth >= 1920
                                            ? "0"
                                            : undefined,
                                        width:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "41px"
                                            : screenWidth >= 1920
                                            ? "50px"
                                            : undefined,
                                      }}
                                    />
                                    <img
                                      className="link-photo-image-of"
                                      alt="Link photo image of"
                                      src={
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/link---photo-image-of-yadeck@2x.png"
                                          : undefined
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-el-row-41"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "212px"
                          : screenWidth >= 1920
                          ? "258.66px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-30"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "212px"
                            : screenWidth >= 1920
                            ? "258.66px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240.02px 0px 240px" : undefined,
                      }}
                    >
                      <div className="div-text-align-2">
                        <div
                          className="div-el-row-42"
                          style={{
                            gap:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "-6.33px 0px"
                                : screenWidth >= 1920
                                ? "0px 0px"
                                : undefined,
                            height:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "212px"
                                : screenWidth >= 1920
                                ? "258.66px"
                                : undefined,
                            padding:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "8px 128.01px 48px 121.69px"
                                : screenWidth >= 1920
                                ? "8px 128px 48px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-31"
                            style={{
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "156px"
                                  : screenWidth >= 1920
                                  ? "202.66px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "512px"
                                  : screenWidth >= 1920
                                  ? "720px"
                                  : undefined,
                              padding: screenWidth >= 1920 ? "49.33px 0px" : undefined,
                            }}
                          >
                            <div
                              className="heading-3"
                              style={{
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 138.64px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 275px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <div className="div-5">
                                {screenWidth >= 1024 && screenWidth < 1920 && (
                                  <>
                                    En
                                    <br />
                                    collaboration
                                    <br />
                                    avec
                                  </>
                                )}

                                {screenWidth >= 1920 && (
                                  <>
                                    En collaboration
                                    <br />
                                    avec
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="div-el-col-32"
                            style={{
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "156px"
                                  : screenWidth >= 1920
                                  ? "202.66px"
                                  : undefined,
                              marginLeft: screenWidth >= 1024 && screenWidth < 1920 ? "-6.33px" : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "512px"
                                  : screenWidth >= 1920
                                  ? "720px"
                                  : undefined,
                            }}
                          >
                            <div className="div-el-row-4">
                              <div
                                className="div-el-col-33"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "148px"
                                      : screenWidth >= 1920
                                      ? "194.66px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "125.33px"
                                      : screenWidth >= 1920
                                      ? "194.67px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="div-d-flex-7"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "37.74px 0px 37.73px"
                                        : screenWidth >= 1920
                                        ? "46px 0px 46.02px"
                                        : undefined,
                                  }}
                                >
                                  <div className="div-el-image-2">
                                    <div
                                      className="warnermusicgroup-2"
                                      style={{
                                        backgroundImage:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/warnermusicgroup-85558411-png-1@2x.png)"
                                            : screenWidth >= 1920
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/warnermusicgroup-85558411-png-2@2x.png)"
                                            : undefined,
                                        width:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "93.33px"
                                            : screenWidth >= 1920
                                            ? "162.66px"
                                            : undefined,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="div-el-col-34"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "148px"
                                      : screenWidth >= 1920
                                      ? "194.66px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "125.33px"
                                      : screenWidth >= 1920
                                      ? "194.67px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="div-d-flex-8"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920 ? "11.33px 0px 11.34px" : undefined,
                                  }}
                                >
                                  <div className="div-el-image-2">
                                    <div
                                      className="snep-da-png"
                                      style={{
                                        width:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "93.33px"
                                            : screenWidth >= 1920
                                            ? "162.66px"
                                            : undefined,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="div-el-col-35"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "148px"
                                      : screenWidth >= 1920
                                      ? "194.66px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "125.33px"
                                      : screenWidth >= 1920
                                      ? "194.67px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="div-d-flex-9"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "24.99px 0px 24.99px"
                                        : screenWidth >= 1920
                                        ? "23.78px 0px 23.8px"
                                        : undefined,
                                  }}
                                >
                                  <div className="div-el-image-2">
                                    <div
                                      className="booskap-cf-png"
                                      style={{
                                        backgroundImage:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/booskap-25c0f803-png-1@2x.png)"
                                            : screenWidth >= 1920
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/booskap-25c0f803-png-2@2x.png)"
                                            : undefined,
                                        width:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "93.33px"
                                            : screenWidth >= 1920
                                            ? "162.66px"
                                            : undefined,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-el-row-43"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920 ? "708px" : screenWidth >= 1920 ? "832px" : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-36"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "708px"
                            : screenWidth >= 1920
                            ? "832px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "80px 0px 128px"
                            : screenWidth >= 1920
                            ? "80px 240px 128px"
                            : undefined,
                      }}
                    >
                      <div
                        className="div-cards-2"
                        style={{
                          padding:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "0px 80px 0px 80px"
                              : screenWidth >= 1920
                              ? "0px 80.01px 0px 80px"
                              : undefined,
                        }}
                      >
                        <div
                          className="div-el-row-44"
                          style={{
                            height:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "500px"
                                : screenWidth >= 1920
                                ? "624px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-37"
                            style={{
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "500px"
                                  : screenWidth >= 1920
                                  ? "624px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "360px"
                                  : screenWidth >= 1920
                                  ? "533.33px"
                                  : undefined,
                              width:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "360px"
                                  : screenWidth >= 1920
                                  ? "533.33px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-el-carousel-5"
                              style={{
                                height:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "500px"
                                    : screenWidth >= 1920
                                    ? "624px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 0px 200px"
                                    : screenWidth >= 1920
                                    ? "0px 0px 324px"
                                    : undefined,
                              }}
                            >
                              <div className="div-el-carousel-item-wrapper">
                                <div
                                  className="div-el-carousel-item-6"
                                  style={{
                                    padding: screenWidth >= 1920 ? "0px 17.17px 0px 17.16px" : undefined,
                                  }}
                                >
                                  <div
                                    className="div-image-container-2"
                                    style={{
                                      gap:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "50px"
                                          : screenWidth >= 1920
                                          ? "49.99px"
                                          : undefined,
                                    }}
                                  >
                                    <div className="div-3">
                                      <div
                                        className="franglish-expert-wrapper"
                                        style={{
                                          height:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "358.39px"
                                              : screenWidth >= 1920
                                              ? "553px"
                                              : undefined,
                                          maxWidth:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "264px"
                                              : screenWidth >= 1920
                                              ? "403px"
                                              : undefined,
                                        }}
                                      >
                                        <div
                                          className="franglish-expert"
                                          style={{
                                            backgroundImage:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/franglish-expert-331aace8-webp@2x.png)"
                                                : screenWidth >= 1920
                                                ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/niska-legend-eb66ae7c-webp-1.png)"
                                                : undefined,
                                            maxWidth:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "264px"
                                                : screenWidth >= 1920
                                                ? "403px"
                                                : undefined,
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className="div-image-shadow-wrapper">
                                      <div
                                        className="div-image-shadow-3"
                                        style={{
                                          borderRadius:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "138.5px"
                                              : screenWidth >= 1920
                                              ? "208px"
                                              : undefined,
                                          width:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "264px"
                                              : screenWidth >= 1920
                                              ? "403px"
                                              : undefined,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="div-el-col-38"
                            style={{
                              gap:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "0.01px"
                                  : screenWidth >= 1920
                                  ? "1.53e-05px"
                                  : undefined,
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "500px"
                                  : screenWidth >= 1920
                                  ? "624px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "504px"
                                  : screenWidth >= 1920
                                  ? "746.67px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "94.2px 24px 94.2px 112px"
                                  : screenWidth >= 1920
                                  ? "182.2px 24px 182.21px 112px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-el-row-45"
                              style={{
                                height:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "261.59px"
                                    : screenWidth >= 1920
                                    ? "209.59px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="div-el-col-39"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "261.59px"
                                      : screenWidth >= 1920
                                      ? "209.59px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "368px"
                                      : screenWidth >= 1920
                                      ? "610.66px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="heading-4"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "0px 132px 0px 0px"
                                        : screenWidth >= 1920
                                        ? "0px 232.66px 0px 0px"
                                        : undefined,
                                  }}
                                >
                                  <div className="div-5">
                                    {screenWidth >= 1024 && screenWidth < 1920 && (
                                      <>
                                        Des cartes
                                        <br />
                                        uniques et
                                        <br />
                                        numérotées
                                      </>
                                    )}

                                    {screenWidth >= 1920 && (
                                      <>
                                        Des cartes uniques
                                        <br />
                                        et numérotées
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="p-pt-2"
                                  style={{
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "368px"
                                        : screenWidth >= 1920
                                        ? "610.66px"
                                        : undefined,
                                  }}
                                >
                                  <div className="overlap-4">
                                    <div className="overlap-group-12">
                                      <div className="text-wrapper-56">Achète</div>
                                      <div className="text-wrapper-57">,</div>
                                      <div className="text-wrapper-58">collectionne</div>
                                      <div className="text-wrapper-59">,</div>
                                      <div className="et-2"> et</div>
                                      <p className="text-wrapper-60">tes cartes sur la plateforme Yadeck</p>
                                    </div>
                                    <div className="text-wrapper-61">échange</div>
                                    <div className="text-wrapper-62">revends</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-46">
                              <div
                                className="div-el-col-40"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "368px"
                                      : screenWidth >= 1920
                                      ? "610.66px"
                                      : undefined,
                                  padding:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "0px 68px 0px 0px"
                                      : screenWidth >= 1920
                                      ? "0px 310.66px 0px 0px"
                                      : undefined,
                                }}
                              >
                                <div className="link-11">
                                  <button className="span-wrapper">
                                    <div className="span-10">
                                      <a
                                        className="text-wrapper-14"
                                        href="https://yadeck.com/fr/cartes/details"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        En savoir plus
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-el-row-47"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "1200.2px"
                          : screenWidth >= 1920
                          ? "1225px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-41"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1200.2px"
                            : screenWidth >= 1920
                            ? "1225px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                      }}
                    >
                      <div
                        className="div-bet-for-success-2"
                        style={{
                          padding:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "128px 48px 48px"
                              : screenWidth >= 1920
                              ? "128px 240px 48px"
                              : undefined,
                        }}
                      >
                        <div className="div-px-wrapper">
                          <div
                            className="div-px-4"
                            style={{
                              padding: screenWidth >= 1920 ? "0px 80px" : undefined,
                            }}
                          >
                            <div className="div-el-row-48">
                              <div
                                className="div-el-col-42"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "928px"
                                      : screenWidth >= 1920
                                      ? "1280px"
                                      : undefined,
                                  padding: screenWidth >= 1920 ? "0px 128px" : undefined,
                                }}
                              >
                                <div
                                  className="heading-5"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "0px 218.4px 0px 218.6px"
                                        : screenWidth >= 1920
                                        ? "0px 186.41px 0px 186.59px"
                                        : undefined,
                                  }}
                                >
                                  <div className="mise-sur-le-succ-s-2">
                                    {screenWidth >= 1024 && screenWidth < 1920 && (
                                      <p className="text-wrapper-85">
                                        Mise sur le succès de tes
                                        <br />
                                        artistes préférés
                                      </p>
                                    )}

                                    {screenWidth >= 1920 && (
                                      <p className="text-wrapper-85">
                                        Mise sur le succès de tes artistes
                                        <br />
                                        préférés
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-49">
                              <div
                                className="div-el-col-43"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "928px"
                                      : screenWidth >= 1920
                                      ? "1280px"
                                      : undefined,
                                  padding:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "40px 0px 16px"
                                      : screenWidth >= 1920
                                      ? "40px 128px 16px"
                                      : undefined,
                                  width:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "928px"
                                      : screenWidth >= 1920
                                      ? "1280px"
                                      : undefined,
                                }}
                              >
                                <div className="p-px-xs-2">
                                  <div
                                    className="overlap-group-13"
                                    style={{
                                      height:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "43px"
                                          : screenWidth >= 1920
                                          ? "53px"
                                          : undefined,
                                      left:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "4px"
                                          : screenWidth >= 1920
                                          ? "129px"
                                          : undefined,
                                      top:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "-2px"
                                          : screenWidth >= 1920
                                          ? "-12px"
                                          : undefined,
                                      width:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "921px"
                                          : screenWidth >= 1920
                                          ? "765px"
                                          : undefined,
                                    }}
                                  >
                                    <p
                                      className="text-wrapper-63"
                                      style={{
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "1px"
                                            : screenWidth >= 1920
                                            ? "11px"
                                            : undefined,
                                      }}
                                    >
                                      Chaque semaine, monte un crew de
                                    </p>
                                    <div
                                      className="text-wrapper-64"
                                      style={{
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0"
                                            : screenWidth >= 1920
                                            ? "10px"
                                            : undefined,
                                      }}
                                    >
                                      5 artistes
                                    </div>
                                    <p
                                      className="text-wrapper-65"
                                      style={{
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "1px"
                                            : screenWidth >= 1920
                                            ? "11px"
                                            : undefined,
                                      }}
                                    >
                                      , et affronte les autres joueurs de la
                                    </p>
                                    <div
                                      className="text-wrapper-66"
                                      style={{
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0"
                                            : screenWidth >= 1920
                                            ? "10px"
                                            : undefined,
                                      }}
                                    >
                                      communauté Yadeck
                                    </div>
                                    <div
                                      className="dans-le-tout-premier-2"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-font-weight)"
                                            : undefined,
                                        height:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "21px"
                                            : screenWidth >= 1920
                                            ? "42px"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-16-line-height)"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "1px"
                                            : screenWidth >= 1920
                                            ? "0"
                                            : undefined,
                                        whiteSpace: screenWidth >= 1024 && screenWidth < 1920 ? "nowrap" : undefined,
                                        width: screenWidth >= 1920 ? "38px" : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && (
                                        <p className="text-wrapper-85"> dans le tout premier jeu en</p>
                                      )}

                                      {screenWidth >= 1920 && <> dans</>}
                                    </div>
                                    <div
                                      className="ligne-bas-sur-les"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-font-weight)"
                                            : undefined,
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "266px"
                                            : screenWidth >= 1920
                                            ? "113px"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-63-line-height)"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "22px"
                                            : screenWidth >= 1920
                                            ? "32px"
                                            : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && (
                                        <p className="text-wrapper-85">
                                          ligne basé sur les chiffres réels de l’industrie musicale.
                                        </p>
                                      )}

                                      {screenWidth >= 1920 && (
                                        <p className="text-wrapper-85">
                                          le tout premier jeu en ligne basé sur les chiffres réels de l’industrie
                                          musicale.
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              className="div-el-row-50"
                              alt="Div el row"
                              src={
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-row-2.svg"
                                  : screenWidth >= 1920
                                  ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-row-1.svg"
                                  : undefined
                              }
                            />
                            <div className="div-triggers-scroll-2">
                              <div
                                className="div-el-row-51"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "166px"
                                      : screenWidth >= 1920
                                      ? "92px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="div-el-col-44"
                                  style={{
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "166px"
                                        : screenWidth >= 1920
                                        ? "92px"
                                        : undefined,
                                    maxWidth:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "928px"
                                        : screenWidth >= 1920
                                        ? "1280px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "928px"
                                        : screenWidth >= 1920
                                        ? "1280px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="div-p-wrapper"
                                    style={{
                                      height:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "166px"
                                          : screenWidth >= 1920
                                          ? "92px"
                                          : undefined,
                                    }}
                                  >
                                    <div
                                      className="semaine-du-au-wrapper"
                                      style={{
                                        padding:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0px 65.49px 0px 65.67px"
                                            : screenWidth >= 1920
                                            ? "0px 165.53px 0px 165.72px"
                                            : undefined,
                                      }}
                                    >
                                      <div
                                        className="semaine-du-au-2"
                                        style={{
                                          width:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "796.84px"
                                              : screenWidth >= 1920
                                              ? "948.75px"
                                              : undefined,
                                        }}
                                      >
                                        <span className="span-3">Semaine du </span>
                                        <span className="span-4">
                                          {screenWidth >= 1024 && screenWidth < 1920 && (
                                            <>
                                              3 au 9 Novembre
                                              <br />
                                              2023
                                            </>
                                          )}

                                          {screenWidth >= 1920 && <>3 au 9 Novembre 2023</>}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="div-middle-2"
                                  style={{
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "166px"
                                        : screenWidth >= 1920
                                        ? "92px"
                                        : undefined,
                                    left:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "325px"
                                        : screenWidth >= 1920
                                        ? "448px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "278px"
                                        : screenWidth >= 1920
                                        ? "384px"
                                        : undefined,
                                  }}
                                />
                              </div>
                              <div
                                className="div-el-row-52"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "393.81px"
                                      : screenWidth >= 1920
                                      ? "492.61px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="div-el-col-45"
                                  style={{
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "393.81px"
                                        : screenWidth >= 1920
                                        ? "492.61px"
                                        : undefined,
                                    maxWidth:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "928px"
                                        : screenWidth >= 1920
                                        ? "1280px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="div-triggers-bet-2"
                                    style={{
                                      gap: screenWidth >= 1920 ? "0.01px" : undefined,
                                    }}
                                  >
                                    <div
                                      className="div-d-flex-10"
                                      style={{
                                        padding:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "1.08px 0px 1.07px"
                                            : screenWidth >= 1920
                                            ? "1.28px 0px 1.28px"
                                            : undefined,
                                      }}
                                    >
                                      <div className="span-card-margin-2">
                                        <div
                                          className="span-card-2"
                                          style={{
                                            height:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "214.66px"
                                                : screenWidth >= 1920
                                                ? "313.05px"
                                                : undefined,
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "153.33px"
                                                : screenWidth >= 1920
                                                ? "223.61px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="span-background-2"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "217px"
                                                  : screenWidth >= 1920
                                                  ? "315px"
                                                  : undefined,
                                              width:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "153px"
                                                  : screenWidth >= 1920
                                                  ? "224px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="overlap-group-14"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "195px"
                                                    : screenWidth >= 1920
                                                    ? "284px"
                                                    : undefined,
                                                left:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "8px"
                                                    : screenWidth >= 1920
                                                    ? "11px"
                                                    : undefined,
                                                top:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "11px"
                                                    : screenWidth >= 1920
                                                    ? "16px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "138px"
                                                    : screenWidth >= 1920
                                                    ? "201px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="span-py-3"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "53px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "13px"
                                                      : screenWidth >= 1920
                                                      ? "54px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="ajoute-3"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "31.83px"
                                                        : screenWidth >= 1920
                                                        ? "65.2px"
                                                        : undefined,
                                                  }}
                                                >
                                                  AJOUTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-py-4"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "46px"
                                                      : screenWidth >= 1920
                                                      ? "53px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "130px"
                                                      : screenWidth >= 1920
                                                      ? "174px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="une-carte-3"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "46.09px"
                                                        : screenWidth >= 1920
                                                        ? "95.23px"
                                                        : undefined,
                                                  }}
                                                >
                                                  UNE CARTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-inside-border-2"
                                                style={{
                                                  height:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "195px"
                                                      : screenWidth >= 1920
                                                      ? "284px"
                                                      : undefined,
                                                  width:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "138px"
                                                      : screenWidth >= 1920
                                                      ? "201px"
                                                      : undefined,
                                                }}
                                              />
                                              <img
                                                className="span-plus-container-3"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "37px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "65px"
                                                      : screenWidth >= 1920
                                                      ? "110px"
                                                      : undefined,
                                                }}
                                                alt="Span plus container"
                                                src={
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-10.svg"
                                                    : screenWidth >= 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-5.svg"
                                                    : undefined
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="span-card-margin-3">
                                        <div
                                          className="span-card-3"
                                          style={{
                                            height:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "214.66px"
                                                : screenWidth >= 1920
                                                ? "313.05px"
                                                : undefined,
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "153.33px"
                                                : screenWidth >= 1920
                                                ? "223.61px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="span-background-3"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "217px"
                                                  : screenWidth >= 1920
                                                  ? "315px"
                                                  : undefined,
                                              width:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "153px"
                                                  : screenWidth >= 1920
                                                  ? "224px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="overlap-group-15"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "195px"
                                                    : screenWidth >= 1920
                                                    ? "284px"
                                                    : undefined,
                                                left:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "8px"
                                                    : screenWidth >= 1920
                                                    ? "11px"
                                                    : undefined,
                                                top:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "11px"
                                                    : screenWidth >= 1920
                                                    ? "16px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "138px"
                                                    : screenWidth >= 1920
                                                    ? "201px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="span-py-5"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "53px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "13px"
                                                      : screenWidth >= 1920
                                                      ? "54px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="ajoute-4"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "31.83px"
                                                        : screenWidth >= 1920
                                                        ? "65.2px"
                                                        : undefined,
                                                  }}
                                                >
                                                  AJOUTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-py-6"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "46px"
                                                      : screenWidth >= 1920
                                                      ? "53px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "130px"
                                                      : screenWidth >= 1920
                                                      ? "174px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="une-carte-4"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "46.09px"
                                                        : screenWidth >= 1920
                                                        ? "95.23px"
                                                        : undefined,
                                                  }}
                                                >
                                                  UNE CARTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-inside-border-3"
                                                style={{
                                                  height:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "195px"
                                                      : screenWidth >= 1920
                                                      ? "284px"
                                                      : undefined,
                                                  width:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "138px"
                                                      : screenWidth >= 1920
                                                      ? "201px"
                                                      : undefined,
                                                }}
                                              />
                                              <img
                                                className="span-plus-container-4"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "37px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "65px"
                                                      : screenWidth >= 1920
                                                      ? "110px"
                                                      : undefined,
                                                }}
                                                alt="Span plus container"
                                                src={
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-11.svg"
                                                    : screenWidth >= 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-6.svg"
                                                    : undefined
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="span-card-margin-4">
                                        <div
                                          className="span-card-4"
                                          style={{
                                            height:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "214.66px"
                                                : screenWidth >= 1920
                                                ? "313.05px"
                                                : undefined,
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "153.33px"
                                                : screenWidth >= 1920
                                                ? "223.61px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="span-background-4"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "217px"
                                                  : screenWidth >= 1920
                                                  ? "315px"
                                                  : undefined,
                                              width:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "153px"
                                                  : screenWidth >= 1920
                                                  ? "224px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="overlap-group-16"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "195px"
                                                    : screenWidth >= 1920
                                                    ? "284px"
                                                    : undefined,
                                                left:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "8px"
                                                    : screenWidth >= 1920
                                                    ? "11px"
                                                    : undefined,
                                                top:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "11px"
                                                    : screenWidth >= 1920
                                                    ? "16px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "138px"
                                                    : screenWidth >= 1920
                                                    ? "201px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="span-py-7"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "53px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "13px"
                                                      : screenWidth >= 1920
                                                      ? "54px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="ajoute-5"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "31.83px"
                                                        : screenWidth >= 1920
                                                        ? "65.2px"
                                                        : undefined,
                                                  }}
                                                >
                                                  AJOUTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-py-8"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "46px"
                                                      : screenWidth >= 1920
                                                      ? "53px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "130px"
                                                      : screenWidth >= 1920
                                                      ? "174px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="une-carte-5"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "46.09px"
                                                        : screenWidth >= 1920
                                                        ? "95.23px"
                                                        : undefined,
                                                  }}
                                                >
                                                  UNE CARTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-inside-border-4"
                                                style={{
                                                  height:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "195px"
                                                      : screenWidth >= 1920
                                                      ? "284px"
                                                      : undefined,
                                                  width:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "138px"
                                                      : screenWidth >= 1920
                                                      ? "201px"
                                                      : undefined,
                                                }}
                                              />
                                              <img
                                                className="span-plus-container-5"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "37px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "65px"
                                                      : screenWidth >= 1920
                                                      ? "110px"
                                                      : undefined,
                                                }}
                                                alt="Span plus container"
                                                src={
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-12.svg"
                                                    : screenWidth >= 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-7.svg"
                                                    : undefined
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="div-d-flex-11"
                                      style={{
                                        marginLeft: screenWidth >= 1024 && screenWidth < 1920 ? "-0.02px" : undefined,
                                      }}
                                    >
                                      <div className="span-card-margin-5">
                                        <div
                                          className="span-card-5"
                                          style={{
                                            height:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "212.81px"
                                                : screenWidth >= 1920
                                                ? "311.61px"
                                                : undefined,
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "152.02px"
                                                : screenWidth >= 1920
                                                ? "222.58px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="span-background-5"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "215px"
                                                  : screenWidth >= 1920
                                                  ? "314px"
                                                  : undefined,
                                              width:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "152px"
                                                  : screenWidth >= 1920
                                                  ? "223px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="overlap-group-17"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "194px"
                                                    : screenWidth >= 1920
                                                    ? "282px"
                                                    : undefined,
                                                left:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "8px"
                                                    : screenWidth >= 1920
                                                    ? "11px"
                                                    : undefined,
                                                top:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "11px"
                                                    : screenWidth >= 1920
                                                    ? "16px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "137px"
                                                    : screenWidth >= 1920
                                                    ? "201px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="span-py-9"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "53px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "12px"
                                                      : screenWidth >= 1920
                                                      ? "53px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="ajoute-6"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "31.83px"
                                                        : screenWidth >= 1920
                                                        ? "65.2px"
                                                        : undefined,
                                                  }}
                                                >
                                                  AJOUTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-py-10"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "46px"
                                                      : screenWidth >= 1920
                                                      ? "53px"
                                                      : undefined,
                                                  padding:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "5px 0px 5.8px"
                                                      : screenWidth >= 1920
                                                      ? "5px 0px 8.8px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "129px"
                                                      : screenWidth >= 1920
                                                      ? "174px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="une-carte-6"
                                                  style={{
                                                    fontFamily:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-family)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-family)"
                                                        : undefined,
                                                    fontSize:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-size)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-size)"
                                                        : undefined,
                                                    fontStyle:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-style)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-style)"
                                                        : undefined,
                                                    fontWeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-font-weight)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-font-weight)"
                                                        : undefined,
                                                    letterSpacing:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-letter-spacing)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-letter-spacing)"
                                                        : undefined,
                                                    lineHeight:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "var(--yadeck-com-inter-thin-7-5-upper-line-height)"
                                                        : screenWidth >= 1920
                                                        ? "var(--yadeck-com-inter-thin-15-38-upper-line-height)"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "46.09px"
                                                        : screenWidth >= 1920
                                                        ? "95.23px"
                                                        : undefined,
                                                  }}
                                                >
                                                  UNE CARTE
                                                </div>
                                              </div>
                                              <div
                                                className="span-inside-border-5"
                                                style={{
                                                  height:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "194px"
                                                      : screenWidth >= 1920
                                                      ? "282px"
                                                      : undefined,
                                                  width:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "137px"
                                                      : screenWidth >= 1920
                                                      ? "201px"
                                                      : undefined,
                                                }}
                                              />
                                              <img
                                                className="span-plus-container-6"
                                                style={{
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "36px"
                                                      : screenWidth >= 1920
                                                      ? "68px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "64px"
                                                      : screenWidth >= 1920
                                                      ? "109px"
                                                      : undefined,
                                                }}
                                                alt="Span plus container"
                                                src={
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-13.svg"
                                                    : screenWidth >= 1920
                                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-8.svg"
                                                    : undefined
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="button-margin-2"
                                        style={{
                                          marginLeft: screenWidth >= 1024 && screenWidth < 1920 ? "-0.01px" : undefined,
                                        }}
                                      >
                                        <div
                                          className="button-9"
                                          style={{
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "156.02px"
                                                : screenWidth >= 1920
                                                ? "226.58px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="span-card-6"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "212.81px"
                                                  : screenWidth >= 1920
                                                  ? "311.61px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="span-background-6"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "215px"
                                                    : screenWidth >= 1920
                                                    ? "314px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "152px"
                                                    : screenWidth >= 1920
                                                    ? "223px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="overlap-group-18"
                                                style={{
                                                  height:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "194px"
                                                      : screenWidth >= 1920
                                                      ? "282px"
                                                      : undefined,
                                                  left:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "8px"
                                                      : screenWidth >= 1920
                                                      ? "11px"
                                                      : undefined,
                                                  top:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "11px"
                                                      : screenWidth >= 1920
                                                      ? "16px"
                                                      : undefined,
                                                  width:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "137px"
                                                      : screenWidth >= 1920
                                                      ? "201px"
                                                      : undefined,
                                                }}
                                              >
                                                <div
                                                  className="span-py-11"
                                                  style={{
                                                    left:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "53px"
                                                        : screenWidth >= 1920
                                                        ? "68px"
                                                        : undefined,
                                                    padding:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "13px 0px"
                                                        : screenWidth >= 1920
                                                        ? "12px 0px 11px"
                                                        : undefined,
                                                    top:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "19px"
                                                        : screenWidth >= 1920
                                                        ? "53px"
                                                        : undefined,
                                                  }}
                                                >
                                                  <div
                                                    className="ajoute-7"
                                                    style={{
                                                      fontFamily:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-family)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-font-family)"
                                                          : undefined,
                                                      fontSize:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-size)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-font-size)"
                                                          : undefined,
                                                      fontStyle:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-style)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-font-style)"
                                                          : undefined,
                                                      fontWeight:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-weight)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-font-weight)"
                                                          : undefined,
                                                      letterSpacing:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-letter-spacing)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-letter-spacing)"
                                                          : undefined,
                                                      lineHeight:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-line-height)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-15-94-upper-line-height)"
                                                          : undefined,
                                                      width:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "31.83px"
                                                          : screenWidth >= 1920
                                                          ? "65.2px"
                                                          : undefined,
                                                    }}
                                                  >
                                                    AJOUTE
                                                  </div>
                                                </div>
                                                <div
                                                  className="span-py-12"
                                                  style={{
                                                    left:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "46px"
                                                        : screenWidth >= 1920
                                                        ? "53px"
                                                        : undefined,
                                                    padding:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "13px 0px"
                                                        : screenWidth >= 1920
                                                        ? "10px 0px 11px"
                                                        : undefined,
                                                    top:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "124px"
                                                        : screenWidth >= 1920
                                                        ? "169px"
                                                        : undefined,
                                                  }}
                                                >
                                                  <div
                                                    className="une-carte-7"
                                                    style={{
                                                      fontFamily:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-family)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-font-family)"
                                                          : undefined,
                                                      fontSize:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-size)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-font-size)"
                                                          : undefined,
                                                      fontStyle:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-style)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-font-style)"
                                                          : undefined,
                                                      fontWeight:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-font-weight)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-font-weight)"
                                                          : undefined,
                                                      letterSpacing:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-letter-spacing)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-letter-spacing)"
                                                          : undefined,
                                                      lineHeight:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "var(--yadeck-com-inter-regular-10-31-upper-line-height)"
                                                          : screenWidth >= 1920
                                                          ? "var(--yadeck-com-inter-regular-16-13-upper-line-height)"
                                                          : undefined,
                                                      width:
                                                        screenWidth >= 1024 && screenWidth < 1920
                                                          ? "46.09px"
                                                          : screenWidth >= 1920
                                                          ? "95.23px"
                                                          : undefined,
                                                    }}
                                                  >
                                                    UNE CARTE
                                                  </div>
                                                </div>
                                                <div
                                                  className="span-inside-border-6"
                                                  style={{
                                                    height:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "194px"
                                                        : screenWidth >= 1920
                                                        ? "282px"
                                                        : undefined,
                                                    width:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "137px"
                                                        : screenWidth >= 1920
                                                        ? "201px"
                                                        : undefined,
                                                  }}
                                                />
                                                <img
                                                  className="span-plus-container-7"
                                                  style={{
                                                    left:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "41px"
                                                        : screenWidth >= 1920
                                                        ? "73px"
                                                        : undefined,
                                                    top:
                                                      screenWidth >= 1024 && screenWidth < 1920
                                                        ? "69px"
                                                        : screenWidth >= 1920
                                                        ? "114px"
                                                        : undefined,
                                                  }}
                                                  alt="Span plus container"
                                                  src={
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-14.svg"
                                                      : screenWidth >= 1920
                                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-plus-container-9.svg"
                                                      : undefined
                                                  }
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="div-el-row-15">
                              <div
                                className="div-el-col-46"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "928px"
                                      : screenWidth >= 1920
                                      ? "1280px"
                                      : undefined,
                                  padding:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "48px 314px"
                                      : screenWidth >= 1920
                                      ? "48px 490px"
                                      : undefined,
                                }}
                              >
                                <div className="link-12">
                                  <button className="button-2">
                                    <div className="span-11">
                                      <a
                                        className="text-wrapper-22"
                                        href="https://yadeck.com/fr/inscription"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        Découvrir le jeu
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-el-row-53"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "582.79px"
                          : screenWidth >= 1920
                          ? "650.66px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-47"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "582.79px"
                            : screenWidth >= 1920
                            ? "650.66px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240px" : undefined,
                      }}
                    >
                      <div
                        className="div-earning-5"
                        style={{
                          padding:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "0px 80px 0px 80px"
                              : screenWidth >= 1920
                              ? "0px 80.01px 0px 80px"
                              : undefined,
                        }}
                      >
                        <div
                          className="div-el-row-54"
                          style={{
                            gap:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "0px 0px"
                                : screenWidth >= 1920
                                ? "6.1e-05px 0px"
                                : undefined,
                            height:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "582.79px"
                                : screenWidth >= 1920
                                ? "650.66px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-48"
                            style={{
                              gap: screenWidth >= 1024 && screenWidth < 1920 ? "0.01px" : undefined,
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "582.79px"
                                  : screenWidth >= 1920
                                  ? "650.66px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "360px"
                                  : screenWidth >= 1920
                                  ? "533.33px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "48px 48px 0px"
                                  : screenWidth >= 1920
                                  ? "194.73px 48px 66.74px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-el-row-55"
                              style={{
                                height:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "484.78px"
                                    : screenWidth >= 1920
                                    ? "339.19px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="div-el-col-49"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "484.78px"
                                      : screenWidth >= 1920
                                      ? "339.19px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "264px"
                                      : screenWidth >= 1920
                                      ? "437.33px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="heading-6"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "0px 79px 0px 0px"
                                        : screenWidth >= 1920
                                        ? "0px 171.33px 0px 0px"
                                        : undefined,
                                  }}
                                >
                                  <div className="div-5">
                                    {screenWidth >= 1024 && screenWidth < 1920 && (
                                      <>
                                        Pour
                                        <br />
                                        gagner
                                        <br />
                                        des lots
                                        <br />
                                        et des
                                        <br />
                                        contenus
                                        <br />
                                        exclusifs
                                      </>
                                    )}

                                    {screenWidth >= 1920 && (
                                      <p className="text-wrapper-85">
                                        Pour gagner
                                        <br />
                                        des lots et
                                        <br />
                                        des contenus
                                        <br />
                                        exclusifs
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="p-pb-3"
                                  style={{
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "140.78px"
                                        : screenWidth >= 1920
                                        ? "99.19px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "264px"
                                        : screenWidth >= 1920
                                        ? "437.33px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="overlap-group-19"
                                    style={{
                                      height:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "126px"
                                          : screenWidth >= 1920
                                          ? "84px"
                                          : undefined,
                                      width: screenWidth >= 1920 ? "436px" : undefined,
                                    }}
                                  >
                                    <div className="text-wrapper-24">Vous pourrez profiter des</div>
                                    <div
                                      className="contenus"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-font-weight)"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-25-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-14-5-line-height)"
                                            : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && <>contenus</>}

                                      {screenWidth >= 1920 && <>contenus exclusifs</>}
                                    </div>
                                    <div
                                      className="exclusifs"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-weight)"
                                            : undefined,
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0"
                                            : screenWidth >= 1920
                                            ? "314px"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-14-63-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-line-height)"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "21px"
                                            : screenWidth >= 1920
                                            ? "1px"
                                            : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && <>exclusifs</>}

                                      {screenWidth >= 1920 && <> proposés par les</>}
                                    </div>
                                    {screenWidth >= 1920 && (
                                      <p className="text-wrapper-26">
                                        artistes en achetant leurs cartes, et remporter des lots
                                        <br />(
                                      </p>
                                    )}

                                    <div
                                      className="propos-s-par-les"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-weight)"
                                            : undefined,
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "64px"
                                            : screenWidth >= 1920
                                            ? "5px"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-5-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-line-height)"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "22px"
                                            : screenWidth >= 1920
                                            ? "42px"
                                            : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && (
                                        <p className="text-wrapper-85"> proposés par les artistes en</p>
                                      )}

                                      {screenWidth >= 1920 && <>ether</>}
                                    </div>
                                    {screenWidth >= 1920 && (
                                      <>
                                        <div className="text-wrapper-67">,</div>
                                        <div className="text-wrapper-68">cartes Yadeck</div>
                                        <div className="ou-2"> ou</div>
                                        <div className="text-wrapper-69">euros</div>
                                        <div className="text-wrapper-70">) en participant aux</div>
                                        <div className="text-wrapper-71">compétitions chaque semaine.</div>
                                      </>
                                    )}

                                    {screenWidth >= 1024 && screenWidth < 1920 && (
                                      <>
                                        <p className="achetant-leurs">
                                          achetant leurs cartes, et remporter
                                          <br />
                                          des lots (
                                        </p>
                                        <div className="text-wrapper-72">ether</div>
                                        <div className="text-wrapper-73">,</div>
                                        <div className="text-wrapper-74">cartes Yadeck</div>
                                        <div className="ou-3"> ou</div>
                                        <div className="text-wrapper-75">euros</div>
                                        <div className="text-wrapper-76">) en participant aux</div>
                                        <div className="text-wrapper-77">compétitions chaque semaine.</div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="div-el-row-56"
                              style={{
                                marginTop: screenWidth >= 1920 ? "-1.53e-05px" : undefined,
                              }}
                            >
                              <div
                                className="div-el-col-50"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "264px"
                                      : screenWidth >= 1920
                                      ? "437.33px"
                                      : undefined,
                                  padding: screenWidth >= 1920 ? "0px 137.33px 0px 0px" : undefined,
                                }}
                              >
                                <div className="link-13">
                                  <button
                                    className="button-10"
                                    style={{
                                      padding:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "18px 82.59px 18px 82.41px"
                                          : screenWidth >= 1920
                                          ? "18px 100.59px 18px 100.41px"
                                          : undefined,
                                    }}
                                  >
                                    <div className="span-12">
                                      <a
                                        className="text-wrapper-22"
                                        href="https://yadeck.com/fr/jeu/details"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                      >
                                        Découvrir le jeu
                                      </a>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="div-earnings-wrapper"
                            style={{
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "582.78px"
                                  : screenWidth >= 1920
                                  ? "650.66px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "504px"
                                  : screenWidth >= 1920
                                  ? "746.67px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "47.39px 8px 47.39px"
                                  : screenWidth >= 1920
                                  ? "0px 48px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-corner-wrapper"
                              style={{
                                backgroundImage:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-earnings-animation-container-1.svg)"
                                    : screenWidth >= 1920
                                    ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-earnings-animation-container.svg)"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "48px"
                                    : screenWidth >= 1920
                                    ? "96px 96px 96px 96px"
                                    : undefined,
                              }}
                            >
                              <div className="div-corner">
                                <div
                                  className="div-earnings-3"
                                  style={{
                                    borderRadius:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "392px"
                                        : screenWidth >= 1920
                                        ? "458.66px"
                                        : undefined,
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "392px"
                                        : screenWidth >= 1920
                                        ? "458.66px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "392px"
                                        : screenWidth >= 1920
                                        ? "458.66px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="div-slider-2"
                                    style={{
                                      left:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "-389px"
                                          : screenWidth >= 1920
                                          ? "-456px"
                                          : undefined,
                                    }}
                                  >
                                    <div
                                      className="div-earnings-4"
                                      style={{
                                        padding:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0px 0px 0px 97.5px"
                                            : screenWidth >= 1920
                                            ? "0px 0px 0px 114.15px"
                                            : undefined,
                                      }}
                                    >
                                      <div
                                        className="div-label-container-wrapper"
                                        style={{
                                          padding:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "273px 59.12px 0px 59.11px"
                                              : screenWidth >= 1920
                                              ? "319.65px 75.78px 0px 75.79px"
                                              : undefined,
                                        }}
                                      >
                                        <div
                                          className="div-label-container-2"
                                          style={{
                                            width:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "76.77px"
                                                : screenWidth >= 1920
                                                ? "76.76px"
                                                : undefined,
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="div-earning-6"
                                        style={{
                                          padding:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "0px 42.88px 0px 42.86px"
                                              : screenWidth >= 1920
                                              ? "0px 50.05px 0px 50.02px"
                                              : undefined,
                                        }}
                                      >
                                        <div
                                          className="div-images-container-3"
                                          style={{
                                            padding:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "75px 0px 0px"
                                                : screenWidth >= 1920
                                                ? "90.89px 0px 0px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="div-container-2"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "177px"
                                                  : screenWidth >= 1920
                                                  ? "207.76px"
                                                  : undefined,
                                              maxHeight:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "177.45px"
                                                  : screenWidth >= 1920
                                                  ? "207.78px"
                                                  : undefined,
                                              maxWidth:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "98.35px"
                                                  : screenWidth >= 1920
                                                  ? "115.45px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="div-el-image-9"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "177px"
                                                    : screenWidth >= 1920
                                                    ? "207.76px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "98.34px"
                                                    : screenWidth >= 1920
                                                    ? "115.46px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="image-6"
                                                style={{
                                                  backgroundImage:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-4@2x.png)"
                                                      : screenWidth >= 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-8@2x.png)"
                                                      : undefined,
                                                }}
                                              />
                                            </div>
                                          </div>
                                          <div
                                            className="div-image-shadow-4"
                                            style={{
                                              padding:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "15px 27.31px 0px"
                                                  : screenWidth >= 1920
                                                  ? "15px 32.06px 0px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="div-image-shadow-5"
                                              style={{
                                                borderRadius:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "30.32px"
                                                    : screenWidth >= 1920
                                                    ? "35.07px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "54.64px"
                                                    : screenWidth >= 1920
                                                    ? "64.14px"
                                                    : undefined,
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="div-label-container-3"
                                          style={{
                                            padding:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "37.1px 0px 37.9px"
                                                : screenWidth >= 1920
                                                ? "47.1px 0px 47.9px"
                                                : undefined,
                                          }}
                                        >
                                          <div className="ether-2">ETHER</div>
                                        </div>
                                      </div>
                                      <div
                                        className="div-earning-7"
                                        style={{
                                          padding:
                                            screenWidth >= 1024 && screenWidth < 1920
                                              ? "0px 13.84px 0px 13.84px"
                                              : screenWidth >= 1920
                                              ? "0px 15.99px 0px 15.95px"
                                              : undefined,
                                        }}
                                      >
                                        <div
                                          className="div-images-container-4"
                                          style={{
                                            padding:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "75px 0px 0px"
                                                : screenWidth >= 1920
                                                ? "90.89px 0px 0px"
                                                : undefined,
                                          }}
                                        >
                                          <div
                                            className="div-container-3"
                                            style={{
                                              height:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "177px"
                                                  : screenWidth >= 1920
                                                  ? "207.76px"
                                                  : undefined,
                                              maxHeight:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "177.45px"
                                                  : screenWidth >= 1920
                                                  ? "207.78px"
                                                  : undefined,
                                              maxWidth:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "150.58px"
                                                  : screenWidth >= 1920
                                                  ? "176.77px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="div-el-image-10"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "177px"
                                                    : screenWidth >= 1920
                                                    ? "208px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "151px"
                                                    : screenWidth >= 1920
                                                    ? "177px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="image-7"
                                                style={{
                                                  backgroundImage:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-5@2x.png)"
                                                      : screenWidth >= 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-9@2x.png)"
                                                      : undefined,
                                                }}
                                              />
                                            </div>
                                            <div
                                              className="div-el-image-11"
                                              style={{
                                                height:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "177px"
                                                    : screenWidth >= 1920
                                                    ? "207.76px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "150.58px"
                                                    : screenWidth >= 1920
                                                    ? "176.76px"
                                                    : undefined,
                                              }}
                                            >
                                              <div
                                                className="image-8"
                                                style={{
                                                  backgroundImage:
                                                    screenWidth >= 1024 && screenWidth < 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-6@2x.png)"
                                                      : screenWidth >= 1920
                                                      ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-10@2x.png)"
                                                      : undefined,
                                                }}
                                              />
                                            </div>
                                          </div>
                                          <div
                                            className="div-image-shadow-6"
                                            style={{
                                              padding:
                                                screenWidth >= 1024 && screenWidth < 1920
                                                  ? "15px 41.83px 0px"
                                                  : screenWidth >= 1920
                                                  ? "15px 49.09px 0px"
                                                  : undefined,
                                            }}
                                          >
                                            <div
                                              className="div-image-shadow-7"
                                              style={{
                                                borderRadius:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "44.83px"
                                                    : screenWidth >= 1920
                                                    ? "52.1px"
                                                    : undefined,
                                                width:
                                                  screenWidth >= 1024 && screenWidth < 1920
                                                    ? "83.66px"
                                                    : screenWidth >= 1920
                                                    ? "98.2px"
                                                    : undefined,
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="div-label-container-4"
                                          style={{
                                            padding:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "37.1px 0px 37.9px"
                                                : screenWidth >= 1920
                                                ? "47.1px 0px 47.9px"
                                                : undefined,
                                          }}
                                        >
                                          <div className="exclus-2">EXCLUS</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="div-el-row-57"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "664.78px"
                          : screenWidth >= 1920
                          ? "696.36px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-51"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "664.78px"
                            : screenWidth >= 1920
                            ? "696.36px"
                            : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240.01px 0px 240px" : undefined,
                      }}
                    >
                      <div className="div-limited-width-3">
                        <div
                          className="div-el-row-58"
                          style={{
                            height:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "664.78px"
                                : screenWidth >= 1920
                                ? "696.36px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-52"
                            style={{
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "664.78px"
                                  : screenWidth >= 1920
                                  ? "696.36px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "597.33px"
                                  : screenWidth >= 1920
                                  ? "840px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "176.39px 24px 96.39px 0px"
                                  : screenWidth >= 1920
                                  ? "80px 24px 0px 0px"
                                  : undefined,
                              width:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "448px"
                                  : screenWidth >= 1920
                                  ? "690.66px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="image-9"
                              style={{
                                backgroundImage:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-7@2x.png)"
                                    : screenWidth >= 1920
                                    ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-11.png)"
                                    : undefined,
                                height:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "392px"
                                    : screenWidth >= 1920
                                    ? "616.36px"
                                    : undefined,
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "448px"
                                    : screenWidth >= 1920
                                    ? "690.66px"
                                    : undefined,
                              }}
                            />
                          </div>
                          <div
                            className="div-el-col-53"
                            style={{
                              gap: screenWidth >= 1024 && screenWidth < 1920 ? "3.05e-05px" : undefined,
                              height:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "664.78px"
                                  : screenWidth >= 1920
                                  ? "696.36px"
                                  : undefined,
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "426.67px"
                                  : screenWidth >= 1920
                                  ? "600px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "128px 48px 0px"
                                  : screenWidth >= 1920
                                  ? "226.99px 48px 98.98px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-el-row-59"
                              style={{
                                height:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "484.78px"
                                    : screenWidth >= 1920
                                    ? "318.39px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="div-el-col-54"
                                style={{
                                  height:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "484.78px"
                                      : screenWidth >= 1920
                                      ? "318.39px"
                                      : undefined,
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "224px"
                                      : screenWidth >= 1920
                                      ? "397.33px"
                                      : undefined,
                                }}
                              >
                                <div
                                  className="heading-7"
                                  style={{
                                    padding:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "0px 45px 0px 0px"
                                        : screenWidth >= 1920
                                        ? "0px 159.33px 0px 0px"
                                        : undefined,
                                  }}
                                >
                                  <div className="div-5">
                                    {screenWidth >= 1024 && screenWidth < 1920 && (
                                      <>
                                        Les
                                        <br />
                                        cartes
                                        <br />
                                        Yadeck
                                        <br />
                                        prennent
                                        <br />
                                        de la
                                        <br />
                                        valeur
                                      </>
                                    )}

                                    {screenWidth >= 1920 && (
                                      <>
                                        Les cartes
                                        <br />
                                        Yadeck
                                        <br />
                                        prennent de
                                        <br />
                                        la valeur
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div
                                  className="p-pb-4"
                                  style={{
                                    height:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "140.78px"
                                        : screenWidth >= 1920
                                        ? "78.39px"
                                        : undefined,
                                    width:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "224px"
                                        : screenWidth >= 1920
                                        ? "397.33px"
                                        : undefined,
                                  }}
                                >
                                  <div
                                    className="overlap-group-20"
                                    style={{
                                      height:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "125px"
                                          : screenWidth >= 1920
                                          ? "63px"
                                          : undefined,
                                      width:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "218px"
                                          : screenWidth >= 1920
                                          ? "394px"
                                          : undefined,
                                    }}
                                  >
                                    <div className="text-wrapper-34">La</div>
                                    <div className="text-wrapper-35">rareté</div>
                                    <p
                                      className="de-la-carte-et-le-2"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-font-weight)"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-thin-15-13-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-thin-15-75-line-height)"
                                            : undefined,
                                      }}
                                    >
                                      {" "}
                                      de la carte et le
                                    </p>
                                    <div
                                      className="text-wrapper-78"
                                      style={{
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "0"
                                            : screenWidth >= 1920
                                            ? "184px"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "22px"
                                            : screenWidth >= 1920
                                            ? "1px"
                                            : undefined,
                                      }}
                                    >
                                      succès
                                    </div>
                                    <p
                                      className="de-l-artiste-sont"
                                      style={{
                                        left:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "49px"
                                            : screenWidth >= 1920
                                            ? "233px"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "22px"
                                            : screenWidth >= 1920
                                            ? "1px"
                                            : undefined,
                                      }}
                                    >
                                      {" "}
                                      de l&#39;artiste sont des
                                    </p>
                                    <div
                                      className="facteurs-d"
                                      style={{
                                        height:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "42px"
                                            : screenWidth >= 1920
                                            ? "21px"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "43px"
                                            : screenWidth >= 1920
                                            ? "22px"
                                            : undefined,
                                        whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && (
                                        <p className="text-wrapper-85">
                                          facteurs déterminants pour
                                          <br />
                                          définir la valeur d&#39;une carte.
                                        </p>
                                      )}

                                      {screenWidth >= 1920 && (
                                        <p className="text-wrapper-85">
                                          facteurs déterminants pour définir la valeur d&#39;une carte.
                                        </p>
                                      )}
                                    </div>
                                    <div
                                      className="sois-le-joueur-qui"
                                      style={{
                                        fontFamily:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-family)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-font-family)"
                                            : undefined,
                                        fontSize:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-size)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-font-size)"
                                            : undefined,
                                        fontStyle:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-style)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-font-style)"
                                            : undefined,
                                        fontWeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-font-weight)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-font-weight)"
                                            : undefined,
                                        height:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "42px"
                                            : screenWidth >= 1920
                                            ? "21px"
                                            : undefined,
                                        letterSpacing:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-letter-spacing)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-letter-spacing)"
                                            : undefined,
                                        lineHeight:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "var(--yadeck-com-inter-bold-15-13-line-height)"
                                            : screenWidth >= 1920
                                            ? "var(--yadeck-com-inter-bold-15-line-height)"
                                            : undefined,
                                        top:
                                          screenWidth >= 1024 && screenWidth < 1920
                                            ? "83px"
                                            : screenWidth >= 1920
                                            ? "42px"
                                            : undefined,
                                        whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                                      }}
                                    >
                                      {screenWidth >= 1024 && screenWidth < 1920 && (
                                        <p className="text-wrapper-85">
                                          Sois le joueur qui mise sur les
                                          <br />
                                          bons artistes !
                                        </p>
                                      )}

                                      {screenWidth >= 1920 && (
                                        <p className="text-wrapper-85">
                                          Sois le joueur qui mise sur les bons artistes !
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="div-el-row-60"
                              style={{
                                marginTop: screenWidth >= 1920 ? "-1.53e-05px" : undefined,
                              }}
                            >
                              <div
                                className="div-el-col-55"
                                style={{
                                  maxWidth:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "224px"
                                      : screenWidth >= 1920
                                      ? "397.33px"
                                      : undefined,
                                }}
                              >
                                <div className="div-wrapper-2">
                                  <button
                                    className="button-11"
                                    style={{
                                      padding:
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "17px 48.41px 17px 48.59px"
                                          : screenWidth >= 1920
                                          ? "17px 135.07px 17px 135.26px"
                                          : undefined,
                                    }}
                                  >
                                    <a
                                      className="text-wrapper-38"
                                      href="https://yadeck.com/fr/cartes/liste"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      Acheter une carte
                                    </a>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-el-row-61">
                    <div
                      className="div-el-col-56"
                      style={{
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                        padding: screenWidth >= 1920 ? "0px 240px" : undefined,
                      }}
                    >
                      <div className="div-limited-width-4">
                        <div
                          className="div-m-xs-2"
                          style={{
                            backgroundImage:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-m-0-xs-1.png)"
                                : screenWidth >= 1920
                                ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-m-0-xs-2.png)"
                                : undefined,
                            padding:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "128px 16px"
                                : screenWidth >= 1920
                                ? "128px"
                                : undefined,
                          }}
                        >
                          <div className="div-el-row-62">
                            <div
                              className="div-el-col-57"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "736px"
                                    : screenWidth >= 1920
                                    ? "928px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="heading-8"
                                style={{
                                  padding:
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "0px 130.9px 0px 131.1px"
                                      : screenWidth >= 1920
                                      ? "0px 195.39px 0px 195.61px"
                                      : undefined,
                                }}
                              >
                                <div className="suivez-l-actualit-de-2">
                                  {screenWidth >= 1024 && screenWidth < 1920 && <>SUIVEZ L&#39;ACTUALITÉ DE</>}

                                  {screenWidth >= 1920 && <>SUIVEZ L&#39;ACTUALITÉ DE LA</>}
                                </div>
                                <div className="la-ligue-yadeck-off">
                                  <span className="span-3">
                                    {screenWidth >= 1024 && screenWidth < 1920 && <>la ligue </>}

                                    {screenWidth >= 1920 && <>ligue </>}
                                  </span>
                                  <span className="span-4">#Yadeck_off</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="div-el-row-63">
                            <div
                              className="div-el-col-58"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "245.33px"
                                    : screenWidth >= 1920
                                    ? "309.33px"
                                    : undefined,
                              }}
                            >
                              <div className="link-14">
                                <button
                                  className="button-12"
                                  style={{
                                    minWidth:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "197.33px"
                                        : screenWidth >= 1920
                                        ? "261.33px"
                                        : undefined,
                                  }}
                                >
                                  <div className="span-7">
                                    <img
                                      className="div-el-image-5"
                                      alt="Div el image"
                                      src={
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-6.svg"
                                          : screenWidth >= 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-12.svg"
                                          : undefined
                                      }
                                    />
                                    <a
                                      className="twitter"
                                      href="https://twitter.com/yadeck_off"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      TWITTER
                                    </a>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div
                              className="div-el-col-59"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "245.33px"
                                    : screenWidth >= 1920
                                    ? "309.33px"
                                    : undefined,
                              }}
                            >
                              <div className="link-15">
                                <button
                                  className="button-13"
                                  style={{
                                    minWidth:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "197.33px"
                                        : screenWidth >= 1920
                                        ? "261.33px"
                                        : undefined,
                                  }}
                                >
                                  <div className="span-8">
                                    <img
                                      className="div-el-image-5"
                                      alt="Div el image"
                                      src={
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-7.svg"
                                          : screenWidth >= 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-13.svg"
                                          : undefined
                                      }
                                    />
                                    <a
                                      className="discord"
                                      href="https://discord.gg/75CSpHy3fR"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      DISCORD
                                    </a>
                                  </div>
                                </button>
                              </div>
                            </div>
                            <div
                              className="div-el-col-60"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "245.33px"
                                    : screenWidth >= 1920
                                    ? "309.33px"
                                    : undefined,
                              }}
                            >
                              <div className="link-16">
                                <button
                                  className="button-14"
                                  style={{
                                    minWidth:
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "197.33px"
                                        : screenWidth >= 1920
                                        ? "261.33px"
                                        : undefined,
                                  }}
                                >
                                  <div className="span-9">
                                    <img
                                      className="div-el-image-6"
                                      alt="Div el image"
                                      src={
                                        screenWidth >= 1024 && screenWidth < 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-8.svg"
                                          : screenWidth >= 1920
                                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-14.svg"
                                          : undefined
                                      }
                                    />
                                    <a
                                      className="instagram"
                                      href="https://www.instagram.com/yadeck_off"
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {"  "}INSTAGRAM
                                    </a>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer
                  className="footer-2"
                  style={{
                    top:
                      screenWidth >= 1024 && screenWidth < 1920 ? "5523px" : screenWidth >= 1920 ? "5964px" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1920 ? "1024px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <div
                    className="div-el-row-64"
                    style={{
                      padding:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "0px 0.02px 0px 0px"
                          : screenWidth >= 1920
                          ? "0px 0.01px 0px 0px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-el-col-61"
                      style={{
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                      }}
                    >
                      <div className="div-el-row-65">
                        <img
                          className="div-el-col-62"
                          style={{
                            maxWidth:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "268px"
                                : screenWidth >= 1920
                                ? "566.67px"
                                : undefined,
                          }}
                          alt="Div el col"
                          src={
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col-3.svg"
                              : screenWidth >= 1920
                              ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col-4.svg"
                              : undefined
                          }
                        />
                        <div
                          className="div-el-col-margin"
                          style={{
                            maxWidth:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "536px"
                                : screenWidth >= 1920
                                ? "1133.33px"
                                : undefined,
                            padding:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "0px 0px 0px 402px"
                                : screenWidth >= 1920
                                ? "0px 0px 0px 850px"
                                : undefined,
                          }}
                        >
                          <div
                            className="div-el-col-63"
                            style={{
                              maxWidth:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "134px"
                                  : screenWidth >= 1920
                                  ? "283.33px"
                                  : undefined,
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "17px 0px"
                                  : screenWidth >= 1920
                                  ? "17px 115.33px 17px 0px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="div-el-select"
                              style={{
                                marginRight: screenWidth >= 1024 && screenWidth < 1920 ? "-34.00px" : undefined,
                              }}
                            >
                              <div className="div-el-input">
                                <div className="div-el-input-wrapper">
                                  <div className="div-wrapper-2">
                                    <div className="span-el-input-prefix">
                                      <div className="div-el-image-7">
                                        <div
                                          className="image-10"
                                          style={{
                                            backgroundImage:
                                              screenWidth >= 1024 && screenWidth < 1920
                                                ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/image-12@2x.png)"
                                                : undefined,
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input">
                                    <div className="fr-wrapper">
                                      <div className="fr">FR</div>
                                    </div>
                                  </div>
                                  <img
                                    className="span-el-input-suffix-2"
                                    alt="Span el input suffix"
                                    src={
                                      screenWidth >= 1024 && screenWidth < 1920
                                        ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-el-input--suffix-1.svg"
                                        : screenWidth >= 1920
                                        ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-el-input--suffix-2.svg"
                                        : undefined
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="div-el-row-66">
                        <div
                          className="div-el-col-64"
                          style={{
                            maxWidth:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "268px"
                                : screenWidth >= 1920
                                ? "566.67px"
                                : undefined,
                          }}
                        >
                          <div className="div-el-row-67">
                            <div
                              className="div-el-col-65"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "267.98px"
                                    : screenWidth >= 1920
                                    ? "566.66px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 57.98px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 356.66px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="text-wrapper-79"
                                href="https://yadeck.com/fr/confidentialite"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Politique de confidentialité
                              </a>
                            </div>
                          </div>
                          <div className="div-el-row-68">
                            <div
                              className="div-el-col-66"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "267.98px"
                                    : screenWidth >= 1920
                                    ? "566.66px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 100.98px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 399.66px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="text-wrapper-79"
                                href="https://yadeck.com/fr/cgv"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Conditions générales
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="div-el-col-67"
                          style={{
                            maxWidth:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "402px"
                                : screenWidth >= 1920
                                ? "850px"
                                : undefined,
                          }}
                        >
                          <div className="div-el-row-69">
                            <div
                              className="div-el-col-68"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 118px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 342px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="text-wrapper-79"
                                href="https://yadeck.com/fr/cartes/details"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Les cartes
                              </a>
                            </div>
                            <div
                              className="div-el-col-69"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 166px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 390px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="link-aide-2"
                                href="https://help.yadeck.com/fr"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Aide
                              </a>
                            </div>
                          </div>
                          <div className="div-el-row-70">
                            <div
                              className="div-el-col-70"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 115px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 339px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="link-le-concept-2"
                                href="https://yadeck.com/fr/concept"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Le concept
                              </a>
                            </div>
                            <div
                              className="div-el-col-71"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 146px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 370px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="link-presse-2"
                                href="mailto:presse@yadeck.com"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Presse
                              </a>
                            </div>
                          </div>
                          <div className="div-el-row-71">
                            <div
                              className="div-el-col-72"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 152px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 376px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="text-wrapper-79"
                                href="https://yadeck.com/fr/jeu/details"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Le jeu
                              </a>
                            </div>
                            <div
                              className="div-el-col-73"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "201px"
                                    : screenWidth >= 1920
                                    ? "425px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "0px 139px 0px 0px"
                                    : screenWidth >= 1920
                                    ? "0px 363px 0px 0px"
                                    : undefined,
                              }}
                            >
                              <a
                                className="link-contact-2"
                                href="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/094d5c99-0864-4054-a71a-ddf1c59e7a45"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                Contact
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="div-el-col-74"
                          style={{
                            maxWidth:
                              screenWidth >= 1024 && screenWidth < 1920
                                ? "134px"
                                : screenWidth >= 1920
                                ? "283.33px"
                                : undefined,
                          }}
                        >
                          <div className="div-el-row-72">
                            <div
                              className="div-el-col-75"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "133.98px"
                                    : screenWidth >= 1920
                                    ? "283.33px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "16px 45.76px 15px 0px"
                                    : screenWidth >= 1920
                                    ? "16px 195.11px 15px 0px"
                                    : undefined,
                              }}
                            >
                              <div className="link-7">
                                <a
                                  className="text-wrapper-80"
                                  href="https://twitter.com/yadeck_off"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Twitter
                                </a>
                                <img
                                  className="div-el-image-5"
                                  alt="Div el image"
                                  src={
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-9.svg"
                                      : screenWidth >= 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-15.svg"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="div-el-col-76"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "133.98px"
                                    : screenWidth >= 1920
                                    ? "283.33px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "16px 21.93px 15px 0px"
                                    : screenWidth >= 1920
                                    ? "16px 171.28px 15px 0px"
                                    : undefined,
                              }}
                            >
                              <div className="link-8">
                                <a
                                  className="text-wrapper-81"
                                  href="https://www.instagram.com/yadeck_off"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Instagram
                                </a>
                                <img
                                  className="div-el-image-5"
                                  alt="Div el image"
                                  src={
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-10.svg"
                                      : screenWidth >= 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-16.svg"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="div-el-col-77"
                              style={{
                                maxWidth:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "133.98px"
                                    : screenWidth >= 1920
                                    ? "283.33px"
                                    : undefined,
                                padding:
                                  screenWidth >= 1024 && screenWidth < 1920
                                    ? "16px 40.53px 15px 0px"
                                    : screenWidth >= 1920
                                    ? "16px 189.88px 15px 0px"
                                    : undefined,
                              }}
                            >
                              <div className="link-9">
                                <a
                                  className="text-wrapper-82"
                                  href="https://discord.gg/75CSpHy3fR"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  Discord
                                </a>
                                <img
                                  className="div-el-image-5"
                                  alt="Div el image"
                                  src={
                                    screenWidth >= 1024 && screenWidth < 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-11.svg"
                                      : screenWidth >= 1920
                                      ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-image-17.svg"
                                      : undefined
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
                <header
                  className="header-2"
                  style={{
                    opacity: screenWidth >= 1024 && screenWidth < 1920 ? "0.01" : undefined,
                    width:
                      screenWidth >= 1024 && screenWidth < 1920 ? "1024px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                >
                  <div
                    className="div-el-row-73"
                    style={{
                      height:
                        screenWidth >= 1024 && screenWidth < 1920 ? "73px" : screenWidth >= 1920 ? "74px" : undefined,
                      padding:
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "0px 0.27px 1px 0px"
                          : screenWidth >= 1920
                          ? "0px 0.28px 1px 0px"
                          : undefined,
                    }}
                  >
                    <img
                      className="div-el-col-78"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920 ? "72px" : screenWidth >= 1920 ? "73px" : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "42.67px"
                            : screenWidth >= 1920
                            ? "320px"
                            : undefined,
                      }}
                      alt="Div el col"
                      src={
                        screenWidth >= 1024 && screenWidth < 1920
                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col-2.svg"
                          : screenWidth >= 1920
                          ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/div-el-col-5.svg"
                          : undefined
                      }
                    />
                    <div
                      className="div-el-col-79"
                      style={{
                        height:
                          screenWidth >= 1024 && screenWidth < 1920 ? "72px" : screenWidth >= 1920 ? "73px" : undefined,
                        maxWidth:
                          screenWidth >= 1024 && screenWidth < 1920
                            ? "981.33px"
                            : screenWidth >= 1920
                            ? "1600px"
                            : undefined,
                      }}
                    >
                      <div
                        className="menubar-2"
                        style={{
                          padding:
                            screenWidth >= 1024 && screenWidth < 1920
                              ? "0px 0.01px 0px 28.29px"
                              : screenWidth >= 1920
                              ? "0px 0px 0px 646.97px"
                              : undefined,
                        }}
                      >
                        <div className="div-6">
                          <div
                            className="menuitem"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "6px 20px 10px"
                                  : screenWidth >= 1920
                                  ? "6.5px 20px 10.5px"
                                  : undefined,
                            }}
                          >
                            <a
                              className="cartes"
                              href="https://yadeck.com/fr/cartes/liste"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              CARTES
                            </a>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="menuitem-2"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "7px 19px 9px 20px"
                                  : screenWidth >= 1920
                                  ? "7.5px 19px 9.5px 20px"
                                  : undefined,
                            }}
                          >
                            <div className="packs-wrapper">
                              <a
                                className="packs"
                                href="https://yadeck.com/fr/packs/liste"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                PACKS
                              </a>
                            </div>
                            <div className="div-position">
                              <div className="div-position-2">
                                <a
                                  className="text-wrapper-83"
                                  href="https://yadeck.com/fr/packs/liste"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  NOUVEAU
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="jeu-wrapper"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "6px 18.98px 10px 20px"
                                  : screenWidth >= 1920
                                  ? "6.5px 18.98px 10.5px 20px"
                                  : undefined,
                            }}
                          >
                            <a
                              className="jeu"
                              href="https://yadeck.com/fr/jeu/details"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              JEU
                            </a>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="artistes-wrapper"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "6px 19.47px 10px 20px"
                                  : screenWidth >= 1920
                                  ? "6.5px 19.47px 10.5px 20px"
                                  : undefined,
                            }}
                          >
                            <a
                              className="artistes"
                              href="https://yadeck.com/fr/artistes/apercu"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              ARTISTES
                            </a>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="le-concept-wrapper"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "6px 19.45px 10px 20px"
                                  : screenWidth >= 1920
                                  ? "6.5px 19.45px 10.5px 20px"
                                  : undefined,
                            }}
                          >
                            <a
                              className="text-wrapper-84"
                              href="https://yadeck.com/fr/concept"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              LE CONCEPT
                            </a>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="div-el-sub-menu"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "6px 19.52px 10px 20px"
                                  : screenWidth >= 1920
                                  ? "6.5px 19.52px 10.5px 20px"
                                  : undefined,
                            }}
                          >
                            <div className="text-wrapper-84">CLASSEMENTS</div>
                          </div>
                        </div>
                        <div className="div-wrapper-3">
                          <div
                            className="aide-wrapper"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "7px 20px 9px"
                                  : screenWidth >= 1920
                                  ? "7.5px 20px 9.5px"
                                  : undefined,
                            }}
                          >
                            <a
                              className="aide"
                              href="https://help.yadeck.com/fr"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              AIDE
                            </a>
                          </div>
                        </div>
                        <div className="div-d-flex-margin">
                          <div
                            className="div-d-flex-12"
                            style={{
                              padding:
                                screenWidth >= 1024 && screenWidth < 1920
                                  ? "9.91px 0px 9.9px"
                                  : screenWidth >= 1920
                                  ? "10.41px 0px 10.4px"
                                  : undefined,
                            }}
                          >
                            <div className="button-margin-3">
                              <button className="button-15">
                                <div className="text-wrapper-45">Connexion</div>
                              </button>
                            </div>
                            <div className="button-margin-4">
                              <button className="button-16">
                                <div className="text-wrapper-46">Inscription</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </>
            )}
          </div>
          <div
            className="button-open-chat"
            style={{
              borderRadius:
                screenWidth < 1024
                  ? "54px"
                  : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                  ? "60px"
                  : undefined,
              left:
                screenWidth < 1024
                  ? "322px"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "940px"
                  : screenWidth >= 1920
                  ? "1836px"
                  : undefined,
              top:
                screenWidth < 1024
                  ? "625px"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "1740px"
                  : screenWidth >= 1920
                  ? "1000px"
                  : undefined,
              width:
                screenWidth < 1024
                  ? "54px"
                  : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                  ? "60px"
                  : undefined,
            }}
          >
            <div
              className="span-cc-imbb"
              style={{
                borderRadius:
                  screenWidth < 1024
                    ? "54px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "60px"
                    : undefined,
                height:
                  screenWidth < 1024
                    ? "54px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "60px"
                    : undefined,
                width:
                  screenWidth < 1024
                    ? "54px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "60px"
                    : undefined,
              }}
            />
            <img
              className="span-cc"
              style={{
                height:
                  screenWidth < 1024
                    ? "26px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "28px"
                    : undefined,
                left:
                  screenWidth < 1024
                    ? "11px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "13px"
                    : undefined,
                top:
                  screenWidth < 1024
                    ? "16px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "18px"
                    : undefined,
                width:
                  screenWidth < 1024
                    ? "32px"
                    : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                    ? "33px"
                    : undefined,
              }}
              alt="Span cc"
              src={
                screenWidth < 1024
                  ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-cc-15e7.svg"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-cc-15e7-1.svg"
                  : screenWidth >= 1920
                  ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/span-cc-15e7-2.svg"
                  : undefined
              }
            />
          </div>
          <div
            className="div-wisepops"
            style={{
              padding:
                screenWidth < 1024
                  ? "0.19px 0px 0px 0.38px"
                  : (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                  ? "0px 0px 0px 0.38px"
                  : undefined,
              width:
                screenWidth < 1024
                  ? "390px"
                  : screenWidth >= 1024 && screenWidth < 1920
                  ? "1024px"
                  : screenWidth >= 1920
                  ? "1920px"
                  : undefined,
            }}
          >
            <div
              className="div-wisepops-overlay"
              style={{
                height:
                  screenWidth < 1024
                    ? "693px"
                    : screenWidth >= 1024 && screenWidth < 1920
                    ? "1820px"
                    : screenWidth >= 1920
                    ? "1080px"
                    : undefined,
                width:
                  screenWidth < 1024
                    ? "390px"
                    : screenWidth >= 1024 && screenWidth < 1920
                    ? "1024px"
                    : screenWidth >= 1920
                    ? "1920px"
                    : undefined,
              }}
            />
            <div
              className="dialog-information"
              style={{
                width:
                  screenWidth < 1024
                    ? "390px"
                    : screenWidth >= 1024 && screenWidth < 1920
                    ? "1024px"
                    : screenWidth >= 1920
                    ? "1920px"
                    : undefined,
              }}
            >
              <div
                className="section-2"
                style={{
                  maxWidth:
                    screenWidth < 1024
                      ? "390px"
                      : screenWidth >= 1024 && screenWidth < 1920
                      ? "1024px"
                      : screenWidth >= 1920
                      ? "1920px"
                      : undefined,
                }}
              >
                <div className="div-7">
                  <div
                    className="div-popup-wrapper"
                    style={{
                      minHeight:
                        screenWidth < 1024
                          ? "693px"
                          : screenWidth >= 1024 && screenWidth < 1920
                          ? "1820px"
                          : screenWidth >= 1920
                          ? "1080px"
                          : undefined,
                    }}
                  >
                    <div
                      className="div-popup"
                      style={{
                        maxWidth:
                          screenWidth < 1024
                            ? "390px"
                            : screenWidth >= 1024 && screenWidth < 1920
                            ? "1024px"
                            : screenWidth >= 1920
                            ? "1920px"
                            : undefined,
                      }}
                    >
                      <div
                        className="div-blockscontainer"
                        style={{
                          maxWidth:
                            screenWidth < 1024
                              ? "310px"
                              : screenWidth >= 1024 && screenWidth < 1920
                              ? "944px"
                              : screenWidth >= 1920
                              ? "1840px"
                              : undefined,
                        }}
                      >
                        <div
                          className="div-wisepops-blocks"
                          style={{
                            padding:
                              screenWidth < 1024
                                ? "0px 0px 355.33px"
                                : screenWidth >= 1024 && screenWidth < 1920
                                ? "0px 0px 1281.48px"
                                : screenWidth >= 1920
                                ? "0px 0px 189.81px"
                                : undefined,
                          }}
                        >
                          <div className="div-blockreadonly">
                            <div className="div-blockreadonly-2">
                              <div className="div-8">
                                <div className="div-6">
                                  <div className="span-13">
                                    <div
                                      className="div-9"
                                      style={{
                                        backgroundImage:
                                          (screenWidth >= 1024 && screenWidth < 1920) || screenWidth < 1024
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/4fbbd012a50c6c6deaf4e315f06ce46c-png-1.png)"
                                            : screenWidth >= 1920
                                            ? "url(https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/4fbbd012a50c6c6deaf4e315f06ce46c-png.png)"
                                            : undefined,
                                        height:
                                          screenWidth < 1024
                                            ? "121.67px"
                                            : screenWidth >= 1024 && screenWidth < 1920
                                            ? "370.52px"
                                            : screenWidth >= 1920
                                            ? "722.19px"
                                            : undefined,
                                        maxWidth:
                                          screenWidth < 1024
                                            ? "310px"
                                            : screenWidth >= 1024 && screenWidth < 1920
                                            ? "944px"
                                            : screenWidth >= 1920
                                            ? "1840px"
                                            : undefined,
                                        width:
                                          screenWidth < 1024
                                            ? "310px"
                                            : screenWidth >= 1024 && screenWidth < 1920
                                            ? "944px"
                                            : screenWidth >= 1920
                                            ? "1840px"
                                            : undefined,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="div-buttonpopupblock"
                            style={{
                              padding:
                                screenWidth < 1024
                                  ? "0px 117.82px 0px 117.79px"
                                  : screenWidth >= 1024 && screenWidth < 1920
                                  ? "0px 358.73px 0px 358.72px"
                                  : screenWidth >= 1920
                                  ? "0px 699.21px 0px 699.2px"
                                  : undefined,
                            }}
                          >
                            <div
                              className="button-17"
                              style={{
                                gap:
                                  screenWidth < 1024
                                    ? "0.65px"
                                    : screenWidth >= 1024 && screenWidth < 1920
                                    ? "5.12px"
                                    : screenWidth >= 1920
                                    ? "5.13px"
                                    : undefined,
                                padding:
                                  screenWidth < 1024
                                    ? "16px 15.35px 16px 16px"
                                    : screenWidth >= 1024 && screenWidth < 1920
                                    ? "16px 59.99px 16px 65.44px"
                                    : screenWidth >= 1920
                                    ? "16px 167.5px 16px 172.96px"
                                    : undefined,
                              }}
                            >
                              <div
                                className="c-e-st-par-ti-wrapper"
                                style={{
                                  padding: screenWidth < 1024 ? "0px 1.09px 0px 1.3px" : undefined,
                                }}
                              >
                                <a
                                  className="c-e-st-par-ti"
                                  style={{
                                    whiteSpace:
                                      (screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920
                                        ? "nowrap"
                                        : undefined,
                                  }}
                                  href="https://yadeck.com/fr"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  {screenWidth < 1024 && (
                                    <>
                                      C&#39;e
                                      <br />
                                      st
                                      <br />
                                      par
                                      <br />
                                      ti !
                                    </>
                                  )}

                                  {((screenWidth >= 1024 && screenWidth < 1920) || screenWidth >= 1920) && (
                                    <>C&#39;est parti !</>
                                  )}
                                </a>
                              </div>
                              <img
                                className="SVG"
                                alt="Svg"
                                src={
                                  screenWidth < 1024
                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/svg.svg"
                                    : screenWidth >= 1024 && screenWidth < 1920
                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/svg-1.svg"
                                    : screenWidth >= 1920
                                    ? "https://cdn.animaapp.com/projects/64c03199d05949cd3e9fc7e2/releases/65432d3ce71150547576378f/img/svg-2.svg"
                                    : undefined
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
