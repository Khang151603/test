import React from "react";
import imgTesla from "../assets/images/imgTesla.png";
import Oppenheimer from "../assets/images/Oppenheimer.png";
import hoden from "../assets/images/hoden.png";
import ourMission from "../assets/images/ourMission.png";

export default function About() {
    return (
        <div
            style={{
                padding: "6% 0%",
                overflowX: "hidden",
            }}
            className="d-flex w-100 flex-column justify-content-center"
        >
            <div
                style={{
                    borderBottom: "1px solid black",
                    margin: "0% 5%",
                    paddingBottom: "1%",
                }}
                className="w-full"
            >
                <p
                    style={{ fontSize: 50, fontWeight: 700 }}
                    className="text-center"
                >
                    Our Team
                </p>
            </div>
            <div className="row mt-5">
                <div className="col-6">
                    <img
                        style={{ width: "100%", height: "390px" }}
                        src={imgTesla}
                    />
                </div>
                <div
                    style={{ paddingLeft: "2%", paddingRight: "6%" }}
                    className="col-6 d-flex flex-column justify-content-center"
                >
                    <p style={{ fontSize: 36, fontWeight: 700 }}>
                        Nikola Tesla
                    </p>
                    <p
                        style={{
                            fontSize: 24,
                            fontStyle: "italic",
                            fontWeight: 400,
                            marginBottom: "2%",
                        }}
                    >
                        Founder of 宝石店 & Lead Designer
                    </p>
                    <p
                        style={{
                            borderBottom: "1px solid black",
                            paddingBottom: "4%",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div
                    style={{ paddingLeft: "6%", paddingRight: "2%" }}
className="col-6 d-flex flex-column justify-content-center"
                >
                    <p style={{ fontSize: 36, fontWeight: 700 }}>
                        Robert Oppenheimer
                    </p>
                    <p
                        style={{
                            fontSize: 24,
                            fontStyle: "italic",
                            fontWeight: 400,
                            marginBottom: "2%",
                        }}
                    >
                        Co-Founder of 宝石店 & Sale Manager
                    </p>
                    <p
                        style={{
                            borderBottom: "1px solid black",
                            paddingBottom: "4%",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className="col-6">
                    <img
                        style={{
                            width: "100%",
                            height: "390px",
                            paddingLeft: "2%",
                        }}
                        src={Oppenheimer}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6">
                    <img
                        style={{ width: "100%", height: "390px" }}
                        src={hoden}
                    />
                </div>
                <div
                    style={{ paddingLeft: "2%", paddingRight: "6%" }}
                    className="col-6 d-flex flex-column justify-content-center"
                >
                    <p style={{ fontSize: 36, fontWeight: 700 }}>Black Hole</p>
                    <p
                        style={{
                            fontSize: 24,
                            fontStyle: "italic",
                            fontWeight: 400,
                            marginBottom: "2%",
                        }}
                    >
                        Nothing & Operations Lead
                    </p>
                    <p
                        style={{
                            borderBottom: "1px solid black",
                            paddingBottom: "4%",
                        }}
                    >
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            <div
                style={{
                    marginLeft: "6%",
                    marginRight: "6%",
                }}
                className="w-full flex-column d-flex justify-content-center align-items-center"
            >
                <p
                    style={{
                        fontSize: 50,
                        fontWeight: 700,
                        borderBottom: "1px solid black",
                        width: "100%",
                        paddingBottom: "1%",
                    }}
                    className="text-center"
                >
                    Our Mission
                </p>
                <p
                    style={{
                        margin: "3% 0%",
                        padding: "0 3%",
                        textAlign: "center",
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <img
                    style={{ width: "950px", height: "440px" }}
                    src={ourMission}
                />
            </div>
        </div>
    );
}