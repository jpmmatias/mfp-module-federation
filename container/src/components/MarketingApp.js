import {mount} from 'marketing/Marketing';
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const MarketingApp = () => {
    const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
    }, []);


    return <div ref={ref} />;
};

export default MarketingApp;