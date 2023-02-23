import { useState } from "react"
import Swal from 'sweetalert2'

function Contact () {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail () {
    Swal.fire({
      icon: 'success',
      title: 'Your email has been send.',
    })
    window.open(`mailto:muhammadpazrinandreanor@gmail.com?subject=${subject}&body=${message}`)
    setName('')
    setSubject('')
    setMessage('')
  }

  const onChangeNameHandler = event => {
    setName(event.target.value)
  }

  const onChangeSubjectHandler = event => {
    setSubject(event.target.value)
  }

  const onChangeMessageHandler = event => {
    setMessage(event.target.value)
  }

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
                <input type="text" value={name} onChange={onChangeNameHandler} placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input type="text" value={subject} onChange={onChangeSubjectHandler} placeholder="Subject" className="input input-bordered" />
                <textarea value={message} onChange={onChangeMessageHandler} className="textarea textarea-bordered h-24" placeholder="Write you want"></textarea>
                <label className="label">
                  <a href='https://wa.me/082251607524?text=Hai Pazrin, saya ingin berkonsultasi dengan anda.' target="_blank" className="label-text-alt link link-hover">
                    or chat via WhatsApp? Text now.
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" onClick={sendEmail} className="btn btn-success">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact