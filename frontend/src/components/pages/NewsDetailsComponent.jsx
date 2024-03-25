import HeaderComponent from "../../layouts/HeaderComponent";
import FooterComponent from "../../layouts/FooterComponent";

import React from "react";

export default function NewsDetailsComponent() {
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