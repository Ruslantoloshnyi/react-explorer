function TheContacts() {
  return (
    <section>
      <div className="container">
        <div className="contact">
          <div className="contact__text">
            <p>03680 Киев, Украина</p>
            <p>переулок Радищева, 3, офис 114</p>
            <p>Phone/Fax: +380 44-455-3516</p>
            <p>Mobile: +380 50-311-8442</p>
            <p> www.optissconsulting.com</p>
            <p> e-mail: akucheruk@optissconsulting.com</p>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10162.92530124715!2d30.529695975630403!3d50.44610495654727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2ssg!4v1685711250473!5m2!1sru!2ssg"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheContacts;
