function Contact () {
  return (
    <div id="contact" className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Me!</h1>
            <p className="py-6">Ingin aplikasi/web sesuai kebutuhan anda? Jangan sungkan untuk berkonsultasi dengan kami.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Write you want"></textarea>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">or chat via WhatsApp?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact