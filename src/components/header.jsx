function Header ({ bio }) {
  return (
    <div className="w-full p-1">
      <div className="max-[640px]:text-3xl text-5xl min-[320px]:leading-relaxed">
        <p>Hello 👋</p>
        <p>I'm {bio.fullName}</p>
        <p>{bio.role}</p>
      </div>
      <div className="flex min-[320px]:justify-center sm:justify-between items-center">
        <ul className="min-[320px]:hidden sm:inline-flex menu menu-horizontal bg-base-200 rounded-box p-2 mt-2">
          {
            bio.socials.map(social => {
              return (
                <li key={social.id}>
                  <a href={social.link} target="_blank">{social.title}</a>
                </li>
              )
            })
          }
        </ul>
        <a href={bio.cvUrl} target="_blank" className="btn btn-outline rounded-full">Download CV</a>
      </div>
    </div>
  )
}

export default Header