import dynamic from "next/dynamic";
import React from "react";

const NoSsrWrapper = props => (
    <React.Fragment>{props.children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSsrWrapper), {
    ssr: false
});
