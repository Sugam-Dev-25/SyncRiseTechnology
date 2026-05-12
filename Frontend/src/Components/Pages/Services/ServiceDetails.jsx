import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServiceBySlug } from "../../../Api/Api";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceBySlug(slug);
      setService(data);
    };

    fetchData();
  }, [slug]);

  if (!service) return <p>Loading...</p>;

return (
  <div style={{ padding: "40px" }}>
    <h1>{service.title.rendered}</h1>

    {/* Image */}
    {service.image_url && (
      <img
        src={service.image_url}
        alt={service.title.rendered}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "20px"
        }}
      />
    )}

    {/* Content */}
    <div
      dangerouslySetInnerHTML={{
        __html: service.content.rendered,
      }}
    />
  </div>
);
};

export default ServiceDetails;