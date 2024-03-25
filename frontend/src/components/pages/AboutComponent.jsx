import React from "react";
import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

export default function AboutComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="container pt-2">
                <h1>About Page</h1>
                <FooterComponent />
            </div>
        </div>
    )
}