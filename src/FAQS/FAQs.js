import React from "react";

import { faqsData } from "./Data";
import FAQ from "./FAQ";
import style from "./FAQs.module.css";

const FAQs = () => {
  return (
    <div>
      <article className={style.container}>
        <h1 className={style.title}>FAQs</h1>
        <section className={style.faqs}>
          {faqsData.map((faq) => (
            <FAQ key={faq.id} {...faq} />
          ))}
        </section>
      </article>
      <footer>@All right reserve by Pujon Das</footer>
    </div>
  );
};

export default FAQs;
