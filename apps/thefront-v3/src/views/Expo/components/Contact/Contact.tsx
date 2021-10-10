import React from "react"
import { CardBase, ContactForm } from "@watheia/front.organisms"

const Contact = ({ className, ...rest }: ViewComponentProps): JSX.Element => (
  <div className={className} {...rest}>
    <CardBase withShadow data-aos="fade-up">
      <ContactForm />
    </CardBase>
  </div>
)

export default Contact
