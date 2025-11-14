import { ServiceDetail } from "@/data/services"
import Image from "next/image"

const DetailedService = (
  { data }: {
    data: ServiceDetail
  }
) => {
  return (
    <div className="w-full flex flex-col items-center bg-white text-gray-800 py-8">
      {/* Hero Section */}
      <section className="w-full bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800">{data.subtitle}</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">{data?.whatIs?.description}</p>
      </section>

      <section className="w-full flex justify-center py-5 md:px-10 px-4">
        <Image
          alt=""
          src={data.image}
          width={1000}
          height={600}
          className="rounded-lg"
         />
      </section>

      {/* Symptoms */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">{data?.symptoms?.heading}</h2>
        <p className="mb-6">{data?.symptoms?.description}</p>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          {data?.symptoms?.obsessions?.map((symptom, i) => (
            <li key={i}>{symptom}</li>
          ))}
        </ul>
      </section>

      {/* Causes */}
      <section className="max-w-5xl w-full px-6 py-10 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">{data?.causes?.heading}</h2>
        <p className="mb-4">{data?.causes?.description}</p>
        <ul className="grid md:grid-cols-2 gap-4">
          {data?.causes?.list.map((cause, i) => (
            <li key={i}>
              <strong>{cause.title}: </strong>
              {cause.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* Treatment Steps */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">{data?.treatmentProcess?.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data?.treatmentProcess?.steps.map((step, i) => (
            <div key={i} className="p-4 border border-vivid-azure/50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of OCD */}
      <section className="max-w-5xl w-full px-6 py-10 bg-blue-50 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">{data?.types?.heading}</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
          {data?.types?.list.map((type, i) => (
            <li key={i}>{type}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl w-full px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">{data?.benefits?.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data?.benefits?.list.map((benefit, i) => (
            <div key={i} className="p-4 border border-vivid-azure/50 rounded-lg">
              <h3 className="font-semibold text-lg">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{data?.whyChoose?.heading}</h2>
        <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left list-disc list-inside">
          {data?.whyChoose?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default DetailedService