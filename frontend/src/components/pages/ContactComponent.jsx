import React from "react";
import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

export default function ContactComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="container pt-2">
                <h1>Home Page</h1>
                <FooterComponent />
            </div>
        </div>
    )
}