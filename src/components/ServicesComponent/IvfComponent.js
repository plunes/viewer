import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
import LandingFooter from '../LandingComponent/LandingFooter'
import LandingHeader from '../LandingComponent/LandingHeader'
import { Helmet } from "react-helmet";

export default class IvfComponent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="canonical" href="https://www.plunes.com/ivf" />
                    <title>A Complete Guide To IVF: All You Need To Know</title>
                    <meta name = 'keywords' content= 'test tube baby, ivf, embryo transfer, ivf, in vitro fertilization, female infertility, infertility, pregnancy, artificial pregnancy, egg transfer, infertility, male infertility'></meta>
                    <meta name="description" content="Search for the desired IVF procedure such as Infertility & Artificial Insemination, Hysteroscopy IVF, Egg Retrieval, etc & avail upto 50% discount. ">
                    </meta>
                </Helmet>
                <LandingHeader />
                <br></br>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-11">
                        <ul class="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li className="header-font2" ><a className="breadcrumb-text" href="#">IVF</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-11 header2-text">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="dentist-image" src="/IVF.png" alt=".."/>
                            </div>
                            <div className="col-sm-9 view-more-align">
                                <h3 className="header-font">IVF</h3>
                                <p className="peragraph-text">
                                    IVF stands for in vitro fertilization. It’s one of the more widely known types of assisted reproductive technology (ART).  IVF works by using a combination of medicines and surgical procedures to help sperm fertilize an egg, and help the fertilized egg implant in your uterus.                                </p>
                                <p className="peragraph-text">
                                    An IVF Specialist is a person who treats patients that focuses on diagnosing and treating male and female infertility. These doctors have completed four years of medical school and at least four years of residency training in obstetrics/gynecology (OB/GYN) or urology. In addition, reproductive endocrinologists are board-certified in reproductive endocrinology and infertility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="80%"></hr>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-10 header-size">
                        <br></br><br></br>
                        <h3 className="header-font">Why Plunes? </h3>
                        <p className="peragraph-text">
                            We help you find the best price solutions to all your medical concerns with just one click. Our AI will help you search instant solutions for all your gynecological treatments & procedures in Delhi NCR.
                        </p>
                        <p className="peragraph-text">
                            Search for the desired IVF procedure such as Infertility & Artificial Insemination, Hysteroscopy IVF, Egg Retrieval, Male Infertility (Varicocelectomy) or any other gynecological treatments & our AI will negotiate in real-time with top IVF specialists & clinics nearest to you to get the best price in real time.
                        </p>
                        <p className="peragraph-text">
                            Avail upto 50% discount instantly at IVF clinics & hospitals in Delhi NCR through Plunes!
                        </p>
                    </div>
                    <div className="col-sm-1"></div>
                </div><br></br><br></br>
                <hr width="80%"></hr>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-11">
                        <br></br>
                        <h3 className="header-font align-text">Procedure</h3>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-3'><p className="header-font">1. Infertility & Artificial Insemination:
                        </p>
                            <p className="peragraph-text">
                                Artificial insemination is a method of treating infertility by inserting semen directly into a womb. Medical Scientists have adapted this technique to use in humans since the late 70s & operated quite successfully till now.
                        </p></div>
                        <div className='col-sm-3'> <p className="header-font">2. T.E.S.A (Testicular Sperm Aspiration): </p>
                            <p className="peragraph-text">
                                Testicular Sperm Aspiration can be used as a diagnostic procedure to detect Azoospermia (a condition whereby a man has no sperm in his seminal fluid).
                                This procedure is also being used as a process to recover sperm from the testicles of men with ejaculatory problems.
                        </p>
                        </div>
                        <div className='col-sm-3'><p className="header-font">3. Blastocyst Culture & Transfer:</p>
                            <p className="peragraph-text">
                                It is a technique in which an embryo is developed in the laboratory for 4-6 days after fertilization before being placed in the womb. The embryo gains many cells as a result of being developed for so many days. The embryo developed for 4-6 days are much more advanced than the ones developed for just three days. These embryos are called blastocysts.
                        </p></div>
                        <div className='col-sm-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-3'>
                            <p className="header-font">4. Egg Retrieval:
                        </p>
                            <p className="peragraph-text">
                                Egg retrieval is the process in which eggs are removed from the ovarian follicles via a thin needle for use in an IVF procedure.
                        </p>
                        </div>
                        <div className='col-sm-3'> <p className="header-font">5. Follicular Dynamic Ultrasound (FD):</p>
                            <p className="peragraph-text">
                                Follicular Dynamic Ultrasounds (FD) is used to track follicle growth. It is used to measure the size. This procedure helps to identify the dominant follicle or follicles.
                        </p>
                        </div>
                        <div className='col-sm-3'><p className="header-font">6. Ovarian Reserve Assessment:</p>
                            <p className="peragraph-text">
                                This procedure is often performed as part of an initial fertility examination and is used to determine the supply of eggs remaining in the ovaries.
                        </p></div>
                        <div className='col-sm-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-3'>
                            <p className="header-font">7. Laparotomy IVF:
                        </p>
                            <p className="peragraph-text">
                            In this surgical approach, the surgeon makes one long incision in your lower abdomen to access your ovaries. The surgeon separates each ovary from the blood supply and tissue that surrounds it and removes the ovary. This procedure is usually done to treat abdominal pain and ovarian cysts. 
                        </p>
                        </div>
                        <div className='col-sm-3'> <p className="header-font">8. Hysteroscopy IVF:</p>
                            <p className="peragraph-text">
                            Hysteroscopy is a procedure that allows your doctor to examine your uterus in order to diagnose and treat causes of abnormal bleeding. Hysteroscopy is done using a hysteroscopy, which is inserted into the vagina to inspect the cervix and uterus.
                            </p>
                        </div>
                        <div className='col-sm-3'><p className="header-font">9. Laparoscopic IVF:</p>
                            <p className="peragraph-text">
                            Laparoscopy is a minimally invasive surgical technique that provides a safe & durable method for incisions inside the abdomen.
                            <br></br>
                            Common reasons of undergoing laparoscopy will include treatment for chronic pelvic pain, pelvic inflammatory disease, and causes of infertility, ovarian cysts, or an ectopic pregnancy. 
                            </p>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-3'>
                            <p className="header-font">10. Elective Single Embryo Transfer (eSET):
                        </p>
                            <p className="peragraph-text">
                            Elective Single Embryo Transfer (eSET) is the transfer of one embryo when you have more than one embryo to choose from. Elective Single Embryo Transfer is another way to make In Vitro Fertilization (IVF) safer and the goal of IVF is to have a healthy baby and eSET helps achieve that goal of a successful pregnancy.
                        </p>
                        </div>
                    </div>
                </div>
                <LandingFooter />
            </div>
        )
    }
}