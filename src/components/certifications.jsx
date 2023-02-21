import CertificationCard from "./certification-card"

function Certifications ({ certificates }) {
  return (<>
    <h1 className="text-2xl my-4">Certifications</h1>
    <div className="w-full grid grid-cols-3 max-[640px]:grid-cols-1 gap-4 justify-center">
      {
        certificates.map(certificate => {
          return (
            <CertificationCard key={certificate.id} {...certificate} />
          )
        })
      }
    </div>
  </>)
}

export default Certifications