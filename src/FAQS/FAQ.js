import React,{useState} from "react";
import style from "./FAQ.module.css";
import {FaChevronCircleUp,FaChevronCircleDown} from 'react-icons/fa';
const FAQ=({id,title,desc}) => {
    const [toggle,setToggle]=useState(false);
    return (
        <div className={style.faq}>
            <section onClick={() => setToggle(!toggle)} className={style.upper}>
                <h3  >{title} </h3>
                <button onClick={() => setToggle(!toggle)}>{toggle? <FaChevronCircleUp className={style.icon} />:<FaChevronCircleDown className={style.icon} />}</button>
            </section>
            {toggle&&<p onClick={() => setToggle(!toggle)}> {desc} </p>}
        </div>
    );
};

export default FAQ;
