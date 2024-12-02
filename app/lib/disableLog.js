"use client";
import {memo, useEffect} from 'react';

export default memo(function Disable(){
    useEffect(() => {
        WebGLRenderingContext.prototype.getProgramInfoLog = () =>{};
    })
    return null;
});