function CertificationCard (certificate) {
  return (
    <div className="card col-span-1 shadow-xl">
      <figure className="px-5 pt-10">
        <img src={certificate.imageSrc} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p>{certificate.title}</p>
        <a className="link link-primary" href={certificate.url} target="_blank">Credential</a>
      </div>
    </div>
  )
}

export default CertificationCard