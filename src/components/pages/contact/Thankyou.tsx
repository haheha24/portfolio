import "./thankyou.css";
const Thankyou = (props: { contactName: string }) => {
  return (
    <section className="thankyou">
      <p>Thank you for sending an email, {props.contactName}.</p>
      <p>
        A confirmation email will be sent and will be responded to within 48
        hours.
      </p>
    </section>
  );
};

export default Thankyou;
