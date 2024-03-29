import React, {forwardRef} from "react";
import {motion} from "framer-motion";


export const Circle = forwardRef(({},ref) =>{

    return (
        <div ref={ref} className="d11" >
            <div className="d21">
                <div className="d31">
                    <div className="d41">
                        <div className="d51">
                            <div className="d61"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
})

export const MCircle = motion(Circle);
